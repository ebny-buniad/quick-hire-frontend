/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const signupSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    // Account creating by better auth
    onSubmit: async ({ value }) => {
      const result = signupSchema.safeParse(value);
      if (!result.success) return;
      console.log(result.data)
      setLoading(true);
      try {
        const { data, error } = await authClient.signIn.email(result.data);
        if (error) {
          toast.error(error.message);
          return;
        }
        toast.success("Account Login successfully");
        if (data?.user) {
          router.replace("/");
          router.refresh();
        }
      } catch (err: any) {
        toast.error(err?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <div className="h-[92vh] flex justify-center items-center">
      <div className="w-96 p-6 shadow-lg rounded-2xl bg-white border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Login Account</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* Email */}
          <form.Field
            name="email"
            validators={{
              onChange: signupSchema.shape.email,
            }}
          >
            {(field) => (
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors?.length ? (
                  <p className="text-red-500 text-sm mt-1">
                    {field.state.meta.errors[0]?.message}
                  </p>
                ) : null}
              </div>
            )}
          </form.Field>

          {/* Password */}
          <form.Field
            name="password"
            validators={{
              onChange: signupSchema.shape.password,
            }}
          >
            {(field) => (
              <div>
                <label className="block mb-1 font-medium">Password</label>

                <input
                  type="password"
                  className="input input-bordered w-full"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />

                {field.state.meta.errors?.length ? (
                  <p className="text-red-500 text-sm mt-1">
                    {field.state.meta.errors[0]?.message}
                  </p>
                ) : null}
              </div>
            )}
          </form.Field>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn bg-blue-700 text-white w-full"
          >
            {loading && <span className="loading loading-spinner loading-xs"></span>}
            {loading ? "Login Account..." : "Login"}
          </button>

          <div className="divider">OR</div>

          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5] w-full">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
        </form>
        <p className="mt-6 text-[14px] text-center">Don&apos;t have an account? <Link className="underline text-blue-600" href={`/auth/sign-up`}>Sign Up</Link></p>
      </div>
    </div>
  );
}