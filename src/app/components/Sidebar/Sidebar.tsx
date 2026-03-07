"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const links = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Create Jobs", href: "/dashboard/create-job" },
        { name: "Applications", href: "/dashboard/applications" },
        { name: "Profile", href: "/dashboard/profile" },
    ];

    return (
        <aside className="w-64 bg-base-200 min-h-screen p-4">
            <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

            <ul className="menu">
                {links.map((link) => (
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