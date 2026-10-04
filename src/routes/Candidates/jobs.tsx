import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";

import JobsBrowser from "@/components/Candidate/Jobs/JobsBrowser";

export const Route = createFileRoute("/Candidates/jobs")({
  component: JobsPage,
});

function JobsPage() {
  const { pathname } = useLocation();

  // This route is the parent of /Candidates/jobs/$id. Without this check,
  // clicking "View Details" changes the URL but never renders the detail
  // page, because this component always rendered the list and never
  // rendered the matched child route.
  const isDetailView = pathname !== "/Candidates/jobs" && pathname !== "/Candidates/jobs/";

  if (isDetailView) {
    return <Outlet />;
  }

  return <JobsBrowser />;
}
