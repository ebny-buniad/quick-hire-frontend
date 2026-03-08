"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function JobFilters() {

    const router = useRouter()
    const searchParams = useSearchParams()

    const [search, setSearch] = useState(searchParams.get("search") || "")
    const [employmentType, setEmploymentType] = useState(searchParams.get("employment_type") || "")
    const [workplaceType, setWorkplaceType] = useState(searchParams.get("workplace_type") || "")
    const [experienceLevel, setExperienceLevel] = useState(searchParams.get("experience_level") || "")

    const applyFilters = () => {
        const params = new URLSearchParams()
        if (search) params.set("search", search)
        if (employmentType) params.set("employment_type", employmentType)
        if (workplaceType) params.set("workplace_type", workplaceType)
        if (experienceLevel) params.set("experience_level", experienceLevel)
        router.push(`/find-jobs?${params.toString()}`)
    }
    const resetFilters = () => {
        router.push("/find-jobs")
    }

    return (
        <div className="bg-white  rounded-xl shadow-sm  border border-gray-200 p-3">

            {/* Filters */}
            <div className="grid gap-4">

                {/* Search */}
                <div>
                    <label className="input w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            required placeholder="Search" />
                    </label>
                </div>

                {/* Employment Type */}
                <div>
                    <select
                        value={employmentType}
                        onChange={(e) => setEmploymentType(e.target.value)}
                        className=" select rounded-lg p-2 w-full"
                    >
                        <option value="">Employment Type</option>
                        <option value="FULL_TIME">Full Time</option>
                        <option value="PART_TIME">Part Time</option>
                        <option value="CONTRACT">Contract</option>
                        <option value="INTERNSHIP">Internship</option>
                    </select>
                </div>

                {/* Workplace */}
                <div>
                    <select
                        value={workplaceType}
                        onChange={(e) => setWorkplaceType(e.target.value)}
                        className="border select rounded-lg p-2 w-full"
                    >
                        <option value="">Workplace Type</option>
                        <option value="REMOTE">Remote</option>
                        <option value="ONSITE">Onsite</option>
                        <option value="HYBRID">Hybrid</option>
                    </select>
                </div>

                {/* Experience */}
                <div>
                    <select
                        value={experienceLevel}
                        onChange={(e) => setExperienceLevel(e.target.value)}
                        className="border select rounded-lg p-2 w-full"
                    >
                        <option value="">Experience Level</option>
                        <option value="JUNIOR">Junior</option>
                        <option value="MID">Mid</option>
                        <option value="SENIOR">Senior</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex  gap-2">
                    <button
                        onClick={applyFilters}
                        className="bg-indigo-600 text-white btn px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Apply
                    </button>
                    <button
                        onClick={resetFilters}
                        className="border btn px-6 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}