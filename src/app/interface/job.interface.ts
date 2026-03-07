import { EmploymentType, ExperienceLevel, WorkplaceType } from "@/enums/enums";

    export interface ICreateJob {
    title: string;
    company_name: string;
    company_logo: string ;
    location: string;
    workplace_type: WorkplaceType;
    employment_type: EmploymentType;
    category: string;
    experience_level: ExperienceLevel;
    salary_min: number ;
    salary_max: number ;
    currency: string ;
    description: string;
    requirements: string ;
    benefits: string ;
    vacancies: number;
    deadline: Date ;
}