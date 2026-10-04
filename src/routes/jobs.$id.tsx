import { createFileRoute } from "@tanstack/react-router";

import JobDetailsView from "@/components/Candidate/Jobs/details/JobDetailsView";
import PublicJobsLayout from "@/components/Candidate/Jobs/PublicJobsLayout";

export const Route = createFileRoute("/jobs/$id")({
  component: PublicJobDetailsPage,
});

function PublicJobDetailsPage() {
  const { id } = Route.useParams();

  return (
    <PublicJobsLayout>
      <JobDetailsView id={id} />
    </PublicJobsLayout>
  );
}
