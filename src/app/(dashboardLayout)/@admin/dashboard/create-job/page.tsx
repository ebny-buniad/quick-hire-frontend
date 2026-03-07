"use client";

import { createJob } from "@/app/actionAPI/jobs.api";
import { EmploymentType, ExperienceLevel, JobCategory, JobLocation, WorkplaceType, Currency } from "@/enums/enums";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";


/* ---------------- ZOD SCHEMA ---------------- */

const jobSchema = z.object({
  title: z.string().min(3, "Title is required"),
  company_name: z.string().min(2, "Company name is required"),
  company_logo: z.string().url("Invalid logo URL"),

  location: z.nativeEnum(JobLocation),
  workplace_type: z.nativeEnum(WorkplaceType),
  employment_type: z.nativeEnum(EmploymentType),
  category: z.nativeEnum(JobCategory),
  experience_level: z.nativeEnum(ExperienceLevel),

  salary_min: z.coerce.number().min(0),
  salary_max: z.coerce.number().min(0),

  currency: z.nativeEnum(Currency),

  description: z.string().min(5),
  requirements: z.string().min(3),
  benefits: z.string().min(3),

  vacancies: z.coerce.number().min(1),

  deadline: z
    .string()
    .transform((val) => new Date(val))
});


export default function CreateJobForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      company_name: "",
      company_logo: "",
      location: JobLocation.DHAKA,
      workplace_type: WorkplaceType.REMOTE,
      employment_type: EmploymentType.FULL_TIME,
      category: JobCategory.SOFTWARE_DEVELOPMENT,
      experience_level: ExperienceLevel.JUNIOR,
      salary_min: "",
      salary_max: "",
      currency: Currency.BDT,
      description: "",
      requirements: "",
      benefits: "",
      vacancies: 1,
      deadline: "",
    },

    onSubmit: async ({ value }) => {
      const result = jobSchema.safeParse(value);

      if (!result.success) {
        return;
      }

      const payload = result.data

      try {
        const { data, success, error } = await createJob(payload);
        if (success) {
          toast.success("Job created successfully!");
          form.reset();
        } else {
          toast.error(error?.message || "Failed to create job");
        }

      }
      catch (err) {

      }
    }
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create Job</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        {/* title */}
        <form.Field name="title"
          validators={{
            onChange: jobSchema.shape.title,
          }}
        >
          {(field) => (
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="Job Title"
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

        {/* company name */}
        <form.Field name="company_name"
          validators={{
            onChange: jobSchema.shape.company_name,
          }}>
          {(field) => (
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="Company Name"
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

        {/* logo */}
        <form.Field name="company_logo"
          validators={{
            onChange: jobSchema.shape.company_logo,
          }}
        >
          {(field) => (
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="Company Logo URL"
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

        {/* location */}
        <form.Field name="location">
          {(field) => (
            <select
              className="select select-bordered w-full"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value as JobLocation)}
            >
              {Object.values(JobLocation).map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>
          )}
        </form.Field>

        {/* workplace */}
        <form.Field name="workplace_type">
          {(field) => (
            <select
              className="select select-bordered w-full"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value as WorkplaceType)}
            >
              {Object.values(WorkplaceType).map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          )}
        </form.Field>

        {/* employment */}
        <form.Field name="employment_type">
          {(field) => (
            <select
              className="select select-bordered w-full"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value as EmploymentType)}
            >
              {Object.values(EmploymentType).map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          )}
        </form.Field>

        {/* category */}
        <form.Field name="category">
          {(field) => (
            <select
              className="select select-bordered w-full"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value as JobCategory)}
            >
              {Object.values(JobCategory).map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          )}
        </form.Field>

        {/* experience */}
        <form.Field name="experience_level">
          {(field) => (
            <select
              className="select select-bordered w-full"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value as ExperienceLevel)}
            >
              {Object.values(ExperienceLevel).map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          )}
        </form.Field>

        {/* salary */}
        <div className="grid grid-cols-2 gap-4">
          <form.Field name="salary_min">
            {(field) => (
              <input
                type="number"
                placeholder="Min Salary"
                className="input input-bordered w-full"
                value={field.state.value}
                onChange={(e) => field.handleChange((e.target.value))}
              />
            )}
          </form.Field>

          <form.Field name="salary_max">
            {(field) => (
              <input
                type="number"
                placeholder="Max Salary"
                className="input input-bordered w-full"
                value={field.state.value}
                onChange={(e) => field.handleChange((e.target.value))}
              />
            )}
          </form.Field>
        </div>

        {/* currency */}
        <form.Field name="currency">
          {(field) => (
            <select
              className="select select-bordered w-full"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value as Currency)}
            >
              {Object.values(Currency).map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          )}
        </form.Field>

        {/* description */}
        <form.Field name="description"
          validators={{
            onChange: jobSchema.shape.description,
          }}>
          {(field) => (
            <div>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Description"
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

        {/* requirements */}
        <form.Field name="requirements"
          validators={{
            onChange: jobSchema.shape.requirements,
          }}>
          {(field) => (
            <div>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Requirements"
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

        {/* benefits */}
        <form.Field name="benefits"
          validators={{
            onChange: jobSchema.shape.benefits,
          }}>
          {(field) => (
            <div>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Benefits"
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

        {/* vacancies */}
        <form.Field name="vacancies">
          {(field) => (
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="Vacancies"
              value={field.state.value}
              onChange={(e) => field.handleChange(Number(e.target.value))}
            />
          )}
        </form.Field>

        {/* deadline */}
        <form.Field name="deadline"
          validators={{
            onChange: jobSchema.shape.deadline,
          }}>
          {(field) => (
            <div>
              <input
                type="date"
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

        <button className="btn btn-primary w-full">Create Job</button>
      </form>
    </div>
  );
}