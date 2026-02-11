"use client"

import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { BASE_PATH } from "@/lib/constants";
import { Facebook, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    // Handle logo click behavior
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Check if we are on the homepage (accounting for potential BASE_PATH)
        const isHomePage = pathname === "/" || pathname === BASE_PATH || pathname === `${BASE_PATH}/`;

        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-slate-100">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-8 py-16 lg:grid-cols-2 lg:px-[7vw]">
                {/* Links Column */}
                <div className="grid grid-cols-1 gap-8 text-sm text-slate-600 sm:grid-cols-2 sm:text-left text-center">
                    <div className="space-y-3">
                        <Link href="/" className="block hover:text-red-700 transition duration-300">
                            Homepage
                        </Link>
                        <Link href="/about" className="block hover:text-red-700 transition duration-300">
                            About
                        </Link>
                        <Link href="/join-our-team" className="block hover:text-red-700 transition duration-300">
                            Join Our Team
                        </Link>
                    </div>
                    <div className="space-y-3">
                        <Link href="/equipment" className="block hover:text-red-700 transition duration-300">
                            Equipment
                        </Link>
                        <Link href="/join-our-team" className="block hover:text-red-700 transition duration-300">
                            Careers
                        </Link>
                        <Link href="/news" className="block hover:text-red-700 transition duration-300">
                            News
                        </Link>
                        <Link href="/contact" className="block hover:text-red-700 transition duration-300">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Logo & Socials Column */}
                <div className="flex flex-col items-center gap-6 lg:items-end">
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10 sm:items-center">
                        <Link href="/" onClick={handleLogoClick} className="transition-transform duration-300 hover:scale-105 inline-block">
                            <NextImage
                                src={`${BASE_PATH}/assets/images/logo-transparent.png`}
                                alt="Cool Mountain"
                                width={180}
                                height={96}
                                className="h-24 w-auto object-contain"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-slate-400 sm:justify-end">
                        <a className="transition hover:text-red-700 hover:scale-110 transform duration-300" href="https://www.facebook.com/coolmtntransport" target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-6 w-6" strokeWidth={1.5} />
                        </a>
                        <a className="transition hover:text-red-700 hover:scale-110 transform duration-300" href="https://www.linkedin.com/company/cool-mountain-transport/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-6 w-6" strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Legal */}
            <div className="border-t border-slate-300">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-8 py-6 text-xs text-slate-500 lg:px-[7vw] md:flex-row">
                    <p className="text-center md:text-left">
                        &copy; {currentYear} Cool Mountain Transport. All Rights Reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacy" className="hover:text-red-700 transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-red-700 transition">Terms of Use</Link>
                        <Link href="/applicant-privacy" className="hover:text-red-700 transition">Applicant Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
