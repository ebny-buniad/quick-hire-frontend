import { getJob } from '@/app/service/jobs/jobs.service';
import Image from 'next/image';
import React from 'react'

export default async function JobDetails({ params }: { params: { slug: string } }) {

    const { slug } = await params;
    // Fetch data

    const data = await getJob(slug);
    console.log(data.data.data)
    const job = data.data.data

    return (
        <div className="max-w-4xl mx-auto p-6 shadow rounded-2xl border border-gray-200">
            {/* Job Header */}
            <div className="flex items-center gap-4 mb-6">
                <div className='border w-20 h-20 flex items-center justify-center rounded-xl'>
                    <Image
                    src={job.company_logo}
                    width={30}
                    height={20}
                    alt="logo"
                    >
                </Image>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{job.title}</h1>
                    <p className="text-gray-600">{job.company_name} • {job.location}</p>
                </div>
            </div>

            {/* Job Meta */}
            <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.workplace_type}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.employment_type}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.experience_level}
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.category}
                </span>
            </div>

            {/* Salary */}
            <p className="text-lg font-semibold mb-4">
                Salary: {job.currency} {job.salary_min.toLocaleString()} - {job.salary_max.toLocaleString()}
            </p>

            {/* Description */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                <p className="text-gray-700">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                <p className="text-gray-700">{job.requirements}</p>
            </div>

            {/* Benefits */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Benefits</h2>
                <p className="text-gray-700">{job.benefits}</p>
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap gap-6 mt-6 text-gray-600">
                <p>Vacancies: {job.vacancies}</p>
                <p>Application Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                <p>Status: {job.status}</p>
            </div>

            {/* Apply Button */}
            <div className="mt-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                    Apply Now
                </button>
            </div>
        </div>
    );
}