/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { cookies } from "next/headers";
const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

// Create job
export async function createApplication(payload: any) {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${NEXT_PUBLIC}/create-job-application`);
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
        if (!res.ok) {
            return {
                data: null,
                success: false,
                error: result?.message || "Something went wrong"
            };
        }
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