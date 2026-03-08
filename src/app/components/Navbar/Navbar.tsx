"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import { User } from "@/app/service/user/user.interface";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

interface NavbarProps {
    user?: User | null;
}

export default function Navbar({ user }: NavbarProps) {
    const router = useRouter();

    const handleLogout = async () => {
        const result = await authClient.signOut();

        if (result.data?.success) {
            router.push("/auth/login");
            router.refresh();
        }
    };

    return (
        <div className="navbar container mx-auto">
            {/* Logo */}
            <div className="navbar-start w-80">
                <Logo />
            </div>

            {/* Desktop Nav */}
            <div className="navbar-center hidden lg:flex">
                <NavLinks />
            </div>

            {/* Right Section */}
            <div className="navbar-end gap-4 w-full">
                {/* Desktop Auth */}
                <div className="hidden lg:flex items-center">
                    {user ? (
                        <UserMenu onLogout={handleLogout} />
                    ) : (
                        <AuthButtons />
                    )}
                </div>

                {/* Mobile Menu */}
                <MobileMenu user={user} onLogout={handleLogout} />
            </div>
        </div>
    );
}

function NavLinks() {
    return (
        <ul className="menu menu-horizontal px-1">
            <li>
                <Link href="/find-jobs">Find Jobs</Link>
            </li>
            <li>
                <Link href="/companies">Browse Companies</Link>
            </li>
        </ul>
    );
}

function AuthButtons() {
    return (
        <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-blue-700 font-semibold">
                Login
            </Link>

            <div className="h-5 w-px bg-gray-300"></div>

            <Link
                href="/auth/sign-up"
                className="btn bg-blue-700 text-white px-6 py-2 rounded-none"
            >
                Sign Up
            </Link>
        </div>
    );
}

function UserMenu({ onLogout }: { onLogout: () => void }) {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="User avatar"
                    />
                </div>
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <button onClick={onLogout}>Logout</button>
                </li>
            </ul>
        </div>
    );
}

function MobileMenu({
    user,
    onLogout,
}: {
    user?: User | null;
    onLogout: () => void;
}) {
    return (
        <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                <li>
                    <Link href="/find-jobs">Find Jobs</Link>
                </li>
                <li>
                    <Link href="/companies">Browse Companies</Link>
                </li>

                {user ? (
                    <>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li>
                            <button onClick={onLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/auth/login">Login</Link>
                        </li>
                        <li>
                            <Link
                                href="/auth/sign-up"
                                className="btn bg-blue-700 text-white rounded-none"
                            >
                                Sign Up
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}