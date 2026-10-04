import { createFileRoute } from "@tanstack/react-router";

import JobDetailsView from "@/components/Candidate/Jobs/details/JobDetailsView";

export const Route = createFileRoute("/Candidates/jobs/$id")({
  component: JobDetailsPage,
});

function JobDetailsPage() {
  const { id } = Route.useParams();

  return <JobDetailsView id={id} />;
}
