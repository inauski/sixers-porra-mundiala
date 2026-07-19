ALTER TABLE public.player_scores DROP CONSTRAINT player_scores_matchday_check;
ALTER TABLE public.player_scores ADD CONSTRAINT player_scores_matchday_check CHECK (matchday >= 1 AND matchday <= 9);
ALTER TABLE public.team_bonuses DROP CONSTRAINT team_bonuses_matchday_check;
ALTER TABLE public.team_bonuses ADD CONSTRAINT team_bonuses_matchday_check CHECK (matchday >= 1 AND matchday <= 9);