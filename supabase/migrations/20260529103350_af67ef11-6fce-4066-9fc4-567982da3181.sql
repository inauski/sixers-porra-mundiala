
-- Revoke EXECUTE from PUBLIC (which grants anon + authenticated by default)
-- on all internal SECURITY DEFINER functions. These are only called by
-- triggers or by trusted server code; clients should never invoke them via RPC.

REVOKE EXECUTE ON FUNCTION public.recalc_prediction_points(uuid) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.recalc_all_predictions() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.trg_recalc_prediction() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.trg_recalc_on_score() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.touch_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- has_role is invoked from RLS policies (as the calling role) and from the
-- admin check in the app. Keep it callable by signed-in users only.
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
