/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { jobCategories } from "@/scripts/JobCategories"
import {
    Palette,
    BarChart3,
    Megaphone,
    Wallet,
    Monitor,
    Code,
    Briefcase,
    Users,
    ArrowRight
} from "lucide-react"

const icons: any = {
    Palette,
    BarChart3,
    Megaphone,
    Wallet,
    Monitor,
    Code,
    Briefcase,
    Users
}

export default function ExploreCategories() {

    return (
        <section className="py-16 container mx-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-5xl font-bold">
                    Explore by <span className="text-blue-600">category</span>
                </h2>

                <button className="flex items-center gap-2 text-primary font-medium">
                    Show all jobs
                    <ArrowRight size={18} />
                </button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobCategories.map((cat, i) => {
                    const Icon = icons[cat.icon]
                    return (
                        <div
                            key={i}
                            className="p-8 border border-gray-300 cursor-pointer group hover:bg-indigo-700 hover:text-white transition"
                        >
                            <Icon
                                size={36}
                                className="mb-6 text-indigo-700 group-hover:text-white transition"
                            />

                            <h3 className="text-xl font-bold mb-2">
                                {cat.name}
                            </h3>

                            <div className="flex items-center justify-between text-sm opacity-80">
                                <span>
                                    {cat.jobs} jobs available
                                </span>

                                <ArrowRight size={18} className="group-hover:text-white transition" />
                            </div>
                        </div>
                    )
                })}

            </div>

        </section>
    )
}