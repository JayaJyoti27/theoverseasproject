import JobHero from "@/components/Candidate/Jobs/details/JobHero";
import JobOverviewCard from "@/components/Candidate/Jobs/details/JobOverviewCard";
import JobDescription from "@/components/Candidate/Jobs/details/JobDescription";
import JobRequirements from "@/components/Candidate/Jobs/details/JobRequirements";
import EmployerCard from "@/components/Candidate/Jobs/details/EmployerCard";
import JobActions from "@/components/Candidate/Jobs/details/JobActions";
import SimilarJobs from "@/components/Candidate/Jobs/details/SimilarJobs";

import { useJob } from "@/lib/candidate/hooks";

/** Job detail body, shared by the public /jobs/$id page and the portal's /Candidates/jobs/$id. */
export default function JobDetailsView({ id }: { id: string }) {
  const { data: job, isLoading, isError } = useJob(id);

  if (isLoading) return <div className="p-10">Loading...</div>;

  if (isError || !job) return <div className="p-10">Job not found.</div>;

  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <div className="space-y-6 xl:col-span-2">
        <JobHero job={job} />

        <JobOverviewCard job={job} />

        <JobDescription job={job} />

        <JobRequirements job={job} />

        <SimilarJobs />
      </div>

      <div className="space-y-6">
        <JobActions job={job} />

        <EmployerCard job={job} />
      </div>
    </div>
  );
}
