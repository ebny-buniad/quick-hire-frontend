import UserApplications from '@/app/models/user/UserApplications';
import { getUserApplications } from '@/app/service/jobs/jobs.service'

export default async function MyApplications() {
    const result = await getUserApplications();
    const userApplications = result?.data?.data;
    return (
        <div>
            <UserApplications applications={userApplications} />
        </div>
    )
}
