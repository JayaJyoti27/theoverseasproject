import { createFileRoute } from "@tanstack/react-router";

import JobsBrowser from "@/components/Candidate/Jobs/JobsBrowser";
import PublicJobsLayout from "@/components/Candidate/Jobs/PublicJobsLayout";

export const Route = createFileRoute("/jobs/")({
  head: () => ({
    meta: [{ title: "Browse Jobs — Ozone Overseas Consultants" }],
  }),
  component: PublicJobsPage,
});

function PublicJobsPage() {
  return (
    <PublicJobsLayout
      title="Browse Jobs"
      subtitle="Explore open roles across the Gulf. No account needed to browse — sign in when you're ready to apply."
    >
      <JobsBrowser />
    </PublicJobsLayout>
  );
}
