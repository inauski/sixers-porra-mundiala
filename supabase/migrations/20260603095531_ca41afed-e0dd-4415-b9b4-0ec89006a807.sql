-- Add matchday column to team_bonuses and update primary key
ALTER TABLE public.team_bonuses DROP CONSTRAINT IF EXISTS team_bonuses_pkey;
ALTER TABLE public.team_bonuses ADD COLUMN IF NOT EXISTS matchday integer NOT NULL DEFAULT 1;
ALTER TABLE public.team_bonuses ADD CONSTRAINT team_bonuses_matchday_check CHECK (matchday BETWEEN 1 AND 7);
ALTER TABLE public.team_bonuses ADD CONSTRAINT team_bonuses_pkey PRIMARY KEY (user_id, bombo, matchday);

-- recalc function already sums all rows for user, no change needed, but ensure correctness
CREATE OR REPLACE FUNCTION public.recalc_prediction_points(pred_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
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
$function$;