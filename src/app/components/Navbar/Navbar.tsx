import Link from 'next/link'
import Logo from '../Logo/Logo'

export default function Navbar() {
    const navLinks = <>
        <li><Link href={``}>Find Jobs</Link></li>
        <li><Link href={``}>Browse Companies</Link></li>
    </>

    return (
        <div className="navbar container mx-auto">

            {/* Logo */}
            <div className="navbar-start w-80">
                <Logo />
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            {/* Right Side */}
            <div className="navbar-end gap-4 w-full">

                {/* Desktop Auth Buttons */}
                <div className="hidden lg:flex items-center">
                    <Link href="/auth/login" className="text-blue-700 font-semibold">
                        Login
                    </Link>
                    <div className="divider lg:divider-horizontal"></div>
                    <Link
                        href="/auth/sign-up"
                        className="btn bg-blue-700 text-white px-6 py-2 rounded-none"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Dropdown */}
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

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {navLinks}

                        <li>
                            <Link href="/auth/login" className="text-blue-700 font-semibold">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/auth/sign-up" className="btn bg-blue-700 text-white rounded-none">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
