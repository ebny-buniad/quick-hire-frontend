/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { deleteJob } from "@/app/actionAPI/jobs.api";
import { useState } from "react";
import { toast } from "sonner";

export default function JobsList({ allJobs }: { allJobs: any[] }) {
    const [jobs, setJobs] = useState(allJobs);
    const handleDelete = async (id: string) => {
        try {
            const result = await deleteJob(id);
            // Optimistic UI update
            setJobs(jobs.filter((job) => job.id !== id));
            toast.success("Job deleted successfully");
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete job");
        }
    };

    if (!jobs || jobs.length === 0) {
        return <div className="p-4">No jobs found.</div>;
    }

    return (
        <div className="overflow-x-auto p-4">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Workplace</th>
                        <th>Employment</th>
                        <th>Experience</th>
                        <th>Salary</th>
                        <th>Vacancies</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {jobs.map((job, index) => (
                        <tr key={job.id}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.company_name}</td>
                            <td>{job.location}</td>
                            <td>{job.workplace_type}</td>
                            <td>{job.employment_type}</td>
                            <td>{job.experience_level}</td>
                            <td>
                                {job.salary_min} - {job.salary_max} {job.currency}
                            </td>
                            <td>{job.vacancies}</td>
                            <td>{new Date(job.deadline).toLocaleDateString()}</td>
                            <td>
                                <span
                                    className={`badge ${job.status === "ACTIVE"
                                        ? "badge-success"
                                        : "badge-error"
                                        }`}
                                >
                                    {job.status}
                                </span>
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-error"
                                    onClick={() => handleDelete(job.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}