/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";
import { Roles } from "@/constant/role";

export default function Sidebar({ role }: { role: string }) {
    const pathname = usePathname();

    let routes: any = [];

    const adminLinks = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Create Jobs", href: "/dashboard/create-job" },
        { name: "All Jobs", href: "/dashboard/all-jobs" },
    ];

    const userLinks = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "My Appliction", href: "/dashboard/my-applications" },
    ]

    // Role wise router
    switch (role) {
        case `${Roles.USER}`:
            routes = userLinks;
            break;
        case `${Roles.ADMIN}`:
            routes = adminLinks;
            break;
        default:
            routes = [];
            break;
    }

    return (
        <aside className="w-64 bg-base-200 min-h-screen p-4">
            <div>
                <Logo></Logo>
            </div>
            <h2 className="text-xl font-semibold my-4 border-t border-gray-300 pt-3">Dashboard</h2>

            <ul className="menu">
                {routes.map((link:any) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={pathname === link.href ? "active font-semibold" : ""}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}