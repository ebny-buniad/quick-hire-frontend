import { cookies } from "next/headers";

const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

interface GetJobParams {
    search?: string,
    employment_type?: string;
    workplace_type?: string;
    experience_level?: string;
}

interface ServiceOptions {
    cache?: RequestCache;
    revalidate?: number;
}

// Get all jobs
export async function getAllJobs(
    params?: GetJobParams,
    options?: ServiceOptions
) {
    try {
        const url = new URL(`${NEXT_PUBLIC}/jobs`);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null && value !== "") {
                    url.searchParams.append(key, value);
                }
            });
        }

        const config: RequestInit = {};
        if (options?.cache) {
            config.cache = options.cache;
        }
        if (options?.revalidate) {
            config.next = { revalidate: options.revalidate };
        }

        const res = await fetch(url.toString(), config);
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

// Get single job



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