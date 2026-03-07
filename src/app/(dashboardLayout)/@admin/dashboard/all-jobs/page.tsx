import JobsList from '@/app/models/admin/JobsList';
import { getAllJobs } from '@/app/service/jobs/jobs.service'
import React from 'react'

export default async function AllJobs() {
    const res = await getAllJobs();
    const allJobs = res.data.data;

    if (!allJobs || allJobs.length === 0) {
        return <div>No jobs found.</div>;
    }

    return (
        <div>
            <JobsList allJobs={allJobs}></JobsList>
        </div>
    )
}
