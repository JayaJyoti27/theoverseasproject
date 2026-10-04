import { useMemo, useState } from "react";

import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useJobs } from "@/lib/candidate/hooks";
import { useCandidateSession } from "@/lib/candidate/useCandidateSession";
import type { CandidateJob } from "@/lib/candidate/types";

import JobFilters from "./JobFilters";
import JobList from "./JobList";
import JobSearch from "./JobSearch";
import RecommendedJobs from "./RecommendedJobs";
import SavedJobsSidebar from "./SavedJobsSidebar";

/**
 * The job board itself. Used by both the public /jobs page (guests) and the
 * candidate portal's /Candidates/jobs page. Candidate-only pieces
 * (recommendations, saved jobs) only appear for logged-in candidates.
 */
export default function JobsBrowser() {
  const { isCandidate } = useCandidateSession();

  const { data: jobsData, isLoading } = useJobs();
  const jobs = jobsData as CandidateJob[] | undefined;

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [minSalary, setMinSalary] = useState("all");

  const countries = useMemo(() => {
    const set = new Set((jobs ?? []).map((job) => job.country).filter(Boolean));
    return Array.from(set).sort();
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    if (!jobs) return jobs;

    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company?.toLowerCase().includes(query) ||
        job.country.toLowerCase().includes(query);

      const matchesCountry = country === "all" || job.country === country;

      const matchesSalary = minSalary === "all" || job.salary >= Number(minSalary);

      return matchesSearch && matchesCountry && matchesSalary;
    });
  }, [jobs, search, country, minSalary]);

  return (
    <div className="grid gap-6 xl:grid-cols-4">
      <div className="space-y-6">
        <JobSearch value={search} onChange={setSearch} />

        <JobFilters
          countries={countries}
          country={country}
          onCountryChange={setCountry}
          minSalary={minSalary}
          onMinSalaryChange={setMinSalary}
        />

        {isCandidate ? (
          <SavedJobsSidebar />
        ) : (
          <Card className="rounded-2xl border-none bg-white p-5 shadow-card">
            <h2 className="font-semibold text-navy">Ready to apply?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Browse freely — you only need an account when you apply for a job.
            </p>
            <Button asChild className="mt-4 w-full">
              <Link to="/candidate" search={{ redirect: "/jobs" }}>
                <LogIn className="mr-2 h-4 w-4" />
                Sign in / Create account
              </Link>
            </Button>
          </Card>
        )}
      </div>

      <div className="space-y-6 xl:col-span-3">
        {isCandidate && <RecommendedJobs />}
        <JobList jobs={filteredJobs} isLoading={isLoading} totalCount={jobs?.length ?? 0} />
      </div>
    </div>
  );
}
