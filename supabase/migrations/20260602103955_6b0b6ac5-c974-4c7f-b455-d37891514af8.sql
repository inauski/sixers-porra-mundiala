
-- Bonuses per user per bombo (team chosen in each pot)
CREATE TABLE public.team_bonuses (
  user_id uuid NOT NULL,
  bombo integer NOT NULL CHECK (bombo BETWEEN 1 AND 12),
  points integer NOT NULL DEFAULT 0 CHECK (points BETWEEN 0 AND 3),
  penalty boolean NOT NULL DEFAULT false,
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, bombo)
);

GRANT SELECT ON public.team_bonuses TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.team_bonuses TO authenticated;
GRANT ALL ON public.team_bonuses TO service_role;

ALTER TABLE public.team_bonuses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read bonuses"
  ON public.team_bonuses FOR SELECT
  USING (true);

CREATE POLICY "Admins insert bonuses"
  ON public.team_bonuses FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update bonuses"
  ON public.team_bonuses FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete bonuses"
  ON public.team_bonuses FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Recalc function now includes team bonuses
CREATE OR REPLACE FUNCTION public.recalc_prediction_points(pred_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  player_total integer;
  bonus_total integer;
  uid uuid;
BEGIN
  SELECT user_id INTO uid FROM public.predictions WHERE id = pred_id;

  SELECT COALESCE(SUM(COALESCE(ps.points, 0)), 0) INTO player_total
  FROM (
    SELECT goalkeeper AS name FROM public.predictions WHERE id = pred_id AND goalkeeper IS NOT NULL
    UNION ALL SELECT unnest(defenders) FROM public.predictions WHERE id = pred_id
    UNION ALL SELECT unnest(midfielders) FROM public.predictions WHERE id = pred_id
    UNION ALL SELECT unnest(forwards) FROM public.predictions WHERE id = pred_id
  ) players
  LEFT JOIN public.player_scores ps ON ps.name = players.name;

  SELECT COALESCE(SUM(points + CASE WHEN penalty THEN 1 ELSE 0 END), 0) INTO bonus_total
  FROM public.team_bonuses WHERE user_id = uid;

  UPDATE public.predictions SET total_points = player_total + bonus_total WHERE id = pred_id;
END;
$$;

-- Trigger on team_bonuses to recalc the affected user's prediction
CREATE OR REPLACE FUNCTION public.trg_recalc_on_bonus()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE pid uuid; uid uuid;
BEGIN
  uid := COALESCE(NEW.user_id, OLD.user_id);
  FOR pid IN SELECT id FROM public.predictions WHERE user_id = uid LOOP
    PERFORM public.recalc_prediction_points(pid);
  END LOOP;
  RETURN NULL;
END;
$$;

CREATE TRIGGER team_bonuses_recalc
AFTER INSERT OR UPDATE OR DELETE ON public.team_bonuses
FOR EACH ROW EXECUTE FUNCTION public.trg_recalc_on_bonus();
