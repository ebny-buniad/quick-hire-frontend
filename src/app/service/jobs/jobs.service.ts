"use server"

const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

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