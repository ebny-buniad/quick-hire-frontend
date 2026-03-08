"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { createApplication } from "@/app/actionAPI/application.api";
import { toast } from "sonner";
export default function ApplyPage() {
    const searchParams = useSearchParams();
    const job_id = searchParams.get("jobId");
    const form = useForm({
        defaultValues: {
            cover_note: "",
            resume_link: "",
        },
        onSubmit: async ({ value }) => {
            const payload = {
                job_id,
                ...value,
            };
            const result = await createApplication(payload);

            if(result.success === true){
                toast.success("Application successful")
            }else{
                toast.error("Already applied")
            }
            form.reset();
        },
    });

    return (
        <div className="max-w-xl mx-auto p-6">

            <h2 className="text-2xl font-bold mb-6">Apply for this Job</h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                }}
                className="space-y-5"
            >

                {/* Cover Letter */}
                <form.Field
                    name="cover_note"
                    validators={{
                        onChange: ({ value }) =>
                            !value ? "Cover letter is required" : undefined,
                    }}
                >
                    {(field) => (
                        <div>
                            <label className="block mb-2 font-medium">
                                Cover Letter
                            </label>

                            <textarea
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                className="w-full border rounded-md p-3"
                                rows={6}
                                placeholder="Write your cover letter..."
                            />

                            {field.state.meta.errors ? (
                                <p className="text-red-500 text-sm mt-1">
                                    {field.state.meta.errors[0]}
                                </p>
                            ) : null}
                        </div>
                    )}
                </form.Field>

                {/* Portfolio */}
                <form.Field
                    name="resume_link"
                    validators={{
                        onChange: ({ value }) =>
                            !value ? "Resume drive link" : undefined,
                    }}
                >
                    {(field) => (
                        <div>
                            <label className="block mb-2 font-medium">
                                Portfolio / GitHub Link
                            </label>

                            <input
                                type="text"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                className="w-full border rounded-md p-3"
                                placeholder="https://github.com/yourname"
                            />

                            {field.state.meta.errors ? (
                                <p className="text-red-500 text-sm mt-1">
                                    {field.state.meta.errors[0]}
                                </p>
                            ) : null}
                        </div>
                    )}
                </form.Field>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Submit Application
                </button>

            </form>
        </div>
    );
}