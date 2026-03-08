import React from 'react'
import { getUser } from '../service/user/get.user';
import { redirect } from 'next/navigation';
import Sidebar from '../components/Sidebar/Sidebar';
import { Roles } from '@/constant/role';
import { Menu } from 'lucide-react';

export default async function DashboardLayout(
    {
        user,
        admin
    }: {
        user: React.ReactNode;
        admin: React.ReactNode
    }
) {

    const currentUser = await getUser();
    if (!currentUser) {
        redirect("/auth/login");
    }

    const userInfo = {
        role: currentUser?.role
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* Drawer Content */}
            <div className="drawer-content flex flex-col min-h-screen p-4 bg-base-100">
                <label
                    htmlFor="dashboard-drawer"
                    className="mb-4 lg:hidden"
                >
                    <Menu />
                </label>

                <main className="flex-1">
                    {userInfo.role === Roles.ADMIN ? admin : user}
                </main>
            </div>

            <div className="drawer-side border-r border-gray-200">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <Sidebar role={userInfo?.role} />
            </div>
        </div>
    );
}