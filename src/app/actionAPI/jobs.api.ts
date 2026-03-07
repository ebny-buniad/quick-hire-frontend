"use server"

import { cookies } from "next/headers";
import { ICreateJob } from "../interface/job.interface";

const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

// Create job
export async function createJob(payload: ICreateJob) {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${NEXT_PUBLIC}/create-job`);
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                cookie: cookieStore.toString(),
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const result = await res.json();
        return {
            data: result,
            success: true,
            error: null
        };
    }
    catch (err) {
        console.error(err);
        return { data: null, error: { message: "Something Went Wrong" } };
    }
}

