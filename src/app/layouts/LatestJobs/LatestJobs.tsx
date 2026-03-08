/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllJobs } from '@/app/service/jobs/jobs.service';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default async function LatestJobs() {
    const response = await getAllJobs();
    const jobs = response.data.data;

    // Sort jobs by creation date (latest first) and take the first 6
    const latestJobs = jobs
        .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 8);

    return (
        <div className="bg-[url('../assets/hero-bg.png')] bg-no-repeat bg-bottom-left md:bg-top-right bg-contain">
            <div className='container mx-auto py-8 '>
                <h2 className="text-5xl font-bold my-7">
                    Latest <span className="text-blue-600">jobs open</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-7xl mx-auto">
                    {latestJobs.map((job: any) => (
                        <Link
                            key={job.id}
                            href={`/find-jobs/${job.slug}`}
                            className="p-4 hover:shadow-lg transition bg-white"
                        >
                            <div className="flex items-center gap-3 p-2 rounded-md">
                                <div>
                                    <div className='w-20 h-20 border border-gray-200 rounded-3xl flex items-center justify-center'>
                                        <Image
                                            src={job.company_logo}
                                            width={40}
                                            height={30}
                                            alt="Logo"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold">{job.title}</h3>
                                    <p className="text-gray-500 text-sm">{job.company_name}</p>

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
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}