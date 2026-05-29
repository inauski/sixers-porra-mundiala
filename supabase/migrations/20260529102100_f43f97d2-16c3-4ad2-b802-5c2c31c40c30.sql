
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin','user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Player scores
CREATE TABLE public.player_scores (
  name text PRIMARY KEY,
  points integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.player_scores TO anon, authenticated;
GRANT ALL ON public.player_scores TO service_role;

ALTER TABLE public.player_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read scores" ON public.player_scores
  FOR SELECT USING (true);

CREATE POLICY "Admins insert scores" ON public.player_scores
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update scores" ON public.player_scores
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete scores" ON public.player_scores
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER player_scores_touch
BEFORE UPDATE ON public.player_scores
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Recalc functions
CREATE OR REPLACE FUNCTION public.recalc_prediction_points(pred_id uuid)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  total integer;
BEGIN
  SELECT COALESCE(SUM(COALESCE(ps.points, 0)), 0) INTO total
  FROM (
    SELECT goalkeeper AS name FROM public.predictions WHERE id = pred_id AND goalkeeper IS NOT NULL
    UNION ALL
    SELECT unnest(defenders) FROM public.predictions WHERE id = pred_id
    UNION ALL
    SELECT unnest(midfielders) FROM public.predictions WHERE id = pred_id
    UNION ALL
    SELECT unnest(forwards) FROM public.predictions WHERE id = pred_id
  ) players
  LEFT JOIN public.player_scores ps ON ps.name = players.name;

  UPDATE public.predictions SET total_points = total WHERE id = pred_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.recalc_all_predictions()
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE r record;
BEGIN
  FOR r IN SELECT id FROM public.predictions LOOP
    PERFORM public.recalc_prediction_points(r.id);
  END LOOP;
END;
$$;

GRANT EXECUTE ON FUNCTION public.recalc_all_predictions() TO authenticated;

-- Trigger: recalc when a prediction is saved
CREATE OR REPLACE FUNCTION public.trg_recalc_prediction()
RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  PERFORM public.recalc_prediction_points(NEW.id);
  RETURN NEW;
END;
$$;

CREATE TRIGGER predictions_recalc
AFTER INSERT OR UPDATE OF goalkeeper, defenders, midfielders, forwards
ON public.predictions
FOR EACH ROW EXECUTE FUNCTION public.trg_recalc_prediction();

-- Trigger: recalc all predictions when scores change
CREATE OR REPLACE FUNCTION public.trg_recalc_on_score()
RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  PERFORM public.recalc_all_predictions();
  RETURN NULL;
END;
$$;

CREATE TRIGGER player_scores_recalc
AFTER INSERT OR UPDATE OR DELETE ON public.player_scores
FOR EACH STATEMENT EXECUTE FUNCTION public.trg_recalc_on_score();
