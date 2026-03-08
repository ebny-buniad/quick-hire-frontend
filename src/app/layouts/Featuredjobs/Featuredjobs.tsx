/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllJobs } from '@/app/service/jobs/jobs.service';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default async function FeaturedJobs() {
    const response = await getAllJobs();
    const jobs = response.data.data;

    // Sort jobs by creation date (latest first) and take the first 6
    const latestJobs = jobs.slice(0, 8);

    return (
        <div className="container mx-auto py-8">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-5xl font-bold">
                    Featured <span className="text-blue-600">jobs</span>
                </h2>
                <button className="flex items-center gap-2 text-primary font-medium">
                    Show all jobs
                    <ArrowRight size={18} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {latestJobs.map((job: any) => (
                    <Link
                        key={job.id}
                        href={`/find-jobs/${job.slug}`}
                        className="border border-gray-200 p-4 hover:shadow-lg transition bg-white"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src={job.company_logo}
                                width={30}
                                height={30}
                                alt="Logo"
                            />
                            <div>
                                <h3 className="font-semibold">{job.title}</h3>
                                <p className="text-gray-500 text-sm">{job.company_name}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{job.location}</p>
                        <div className="flex gap-2 flex-wrap text-xs">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                {job.workplace_type}
                            </span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                {job.employment_type}
                            </span>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                {job.experience_level}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}