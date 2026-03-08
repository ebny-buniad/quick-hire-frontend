import { cookies } from "next/headers";

const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

// Get all jobs
export async function getAllJobs() {
    try {
        const url = new URL(`${NEXT_PUBLIC}/jobs`);
        const res = await fetch(url.toString(), {
            method: "GET",
            credentials: "include"
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

// Get user applications
export async function getUserApplications() {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${NEXT_PUBLIC}/my-applications`);
        const res = await fetch(url.toString(), {
            method: "GET",
            headers: {
                cookie: cookieStore.toString(),
            },
            cache: "no-store",
            credentials: "include"
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