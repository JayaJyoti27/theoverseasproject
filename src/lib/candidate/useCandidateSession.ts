import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import { getCurrentProfile, supabase } from "@/lib/supabase";

/** Is the current visitor a logged-in candidate? Updates on login/logout. */
export function useCandidateSession() {
  const [state, setState] = useState({ loading: true, isCandidate: false });

  useEffect(() => {
    let active = true;

    const check = () =>
      getCurrentProfile().then((profile) => {
        if (active) setState({ loading: false, isCandidate: profile?.role === "candidate" });
      });

    check();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      check();
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  return state;
}

/**
 * Gate for actions that need a candidate account (Apply, Save).
 *
 *   const requireCandidate = useRequireCandidate();
 *   if (!(await requireCandidate())) return;   // guest was sent to login
 *
 * Guests are sent to /candidate with `redirect` set to the page they're on, so
 * they land back here after signing in.
 */
export function useRequireCandidate() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(async (): Promise<boolean> => {
    const profile = await getCurrentProfile();

    if (profile?.role === "candidate") return true;

    if (profile) {
      toast.info("Please sign in with a candidate account to apply for jobs.");
    }

    navigate({ to: "/candidate", search: { redirect: pathname } });

    return false;
  }, [navigate, pathname]);
}
