/* eslint-disable @typescript-eslint/no-explicit-any */
import JobFilters from "@/app/layouts/JobFilter/JobFilter";
import { getAllJobs } from "@/app/service/jobs/jobs.service";
import { MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Jobs({
  searchParams,
}: {
  searchParams: {
    search?: string;
    employment_type?: string;
    workplace_type?: string;
    experience_level?: string;
  };
}) {

  // unwrap the searchParams Promise
  const params = await searchParams;

  // Fetch data 
  const data = await getAllJobs(params, {
    cache: "no-store"
  })

  const jobs = data?.data?.data;

  return (
    <div>
      <JobFilters />
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
        {jobs.map((job: any) => (
          <div
            key={job.id}
            className="border border-gray-200 card rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Company */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={job.company_logo}
                width={30}
                height={20}
                alt="logo">
              </Image>

              <div>
                <h3 className="font-semibold">{job.company_name}</h3>
                <p className="text-sm text-gray-500">{job.category}</p>
              </div>

            </div>

            {/* Job Title */}
            <h2 className="text-lg font-bold mb-3">
              {job.title}
            </h2>

            {/* Job Info */}
            <div className="space-y-2 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {job.location}
              </div>

              <div className="flex items-center gap-2">
                <Briefcase size={16} />
                {job.employment_type}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={16} />
                {job.experience_level}
              </div>

              <div className="flex items-center gap-2">
                <DollarSign size={16} />
                {job.salary_min} - {job.salary_max} {job.currency}
              </div>

            </div>
            
            <div className="mt-auto pt-5 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href={`/find-jobs/${job.slug}`}
                  className="text-sm font-medium bg-blue-600 px-4 py-2 rounded-full text-white hover:underline"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

        ))}

      </div>

    </div>
  );
}