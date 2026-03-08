import { Facebook, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";
import Logo from "../Logo/Logo";

export default function Footer() {
    return (
        <footer className="bg-[#1f2637] text-gray-300 pt-20 pb-10">
            <div className="container mx-auto">

                {/* TOP GRID */}
                <div className="grid md:grid-cols-4 gap-10">

                    {/* LOGO + TEXT */}
                    <div>
                        <Logo></Logo>

                        <p className="text-sm leading-relaxed text-gray-400">
                            Great platform for the job seeker that passionate about startups.
                            Find your dream job easier.
                        </p>
                    </div>

                    {/* ABOUT */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">About</h3>

                        <ul className="space-y-2 text-sm">
                            <li>Companies</li>
                            <li>Pricing</li>
                            <li>Terms</li>
                            <li>Advice</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>

                        <ul className="space-y-2 text-sm">
                            <li>Help Docs</li>
                            <li>Guide</li>
                            <li>Updates</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Get job notifications
                        </h3>

                        <p className="text-sm text-gray-400 mb-4">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>

                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="px-4 py-2 w-full text-sm bg-gray-200 text-black outline-none"
                            />

                            <button className="bg-indigo-600 px-4 text-white text-sm">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-gray-600 my-10"></div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <p className="text-sm text-gray-400">
                        2021 @ QuickHire. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <SocialIcon><Facebook size={16} /></SocialIcon>
                        <SocialIcon><Instagram size={16} /></SocialIcon>
                        <SocialIcon><Dribbble size={16} /></SocialIcon>
                        <SocialIcon><Linkedin size={16} /></SocialIcon>
                        <SocialIcon><Twitter size={16} /></SocialIcon>
                    </div>

                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2b3245] hover:bg-indigo-600 cursor-pointer transition">
            {children}
        </div>
    );
}