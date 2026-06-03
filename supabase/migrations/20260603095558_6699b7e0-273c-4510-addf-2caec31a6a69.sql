ALTER TABLE public.team_bonuses DROP CONSTRAINT IF EXISTS team_bonuses_matchday_check;
ALTER TABLE public.team_bonuses ADD CONSTRAINT team_bonuses_matchday_check CHECK (matchday BETWEEN 1 AND 8);