"use client"

import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { BASE_PATH, COMPANY } from "@/lib/constants";
import { Facebook, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

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
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" onClick={handleLogoClick} className="block w-fit transition-transform hover:scale-105">
                            <NextImage
                                src={`${BASE_PATH}/assets/images/logo-transparent.png`}
                                alt={COMPANY.name}
                                width={180}
                                height={96}
                                className="h-20 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-sm leading-6 text-slate-400 max-w-xs">
                            Reliable Freight. Professional Drivers.
                            <br />
                            Solving complex logistics problems with a modern fleet and safety commitment.
                        </p>
                        <div className="flex gap-4">
                            <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="mt-2">
                        <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider mb-6">Company</h3>
                        <ul role="list" className="space-y-4">
                            <li>
                                <Link href="/about" className="text-sm leading-6 hover:text-white transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-red-500" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/join-our-team" className="text-sm leading-6 hover:text-white transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-red-500" />
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-sm leading-6 hover:text-white transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-red-500" />
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link href="/equipment" className="text-sm leading-6 hover:text-white transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-red-500" />
                                    Equipment
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="mt-2">
                        <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider mb-6">Services</h3>
                        <ul role="list" className="space-y-4">
                            <li>
                                <Link href="/services/dry-van" className="text-sm leading-6 hover:text-white transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-red-500" />
                                    Dry Van
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/refrigerated" className="text-sm leading-6 hover:text-white transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-red-500" />
                                    Refrigerated
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/expedited" className="text-sm leading-6 hover:text-white transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-red-500" />
                                    Expedited
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="mt-2">
                        <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider mb-6">Contact</h3>
                        <ul role="list" className="space-y-6">
                            <li className="flex gap-x-3">
                                <Phone className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                                <div>
                                    <a href={`tel:${COMPANY.contact.dispatchPhone.replace(/-/g, "")}`} className="hover:text-white transition block text-lg font-semibold text-slate-200">
                                        {COMPANY.contact.dispatchPhoneDisplay}
                                    </a>
                                    <span className="text-xs text-slate-500">Dispatch 24/7</span>
                                </div>
                            </li>
                            <li className="flex gap-x-3">
                                <Mail className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                                <a href={`mailto:${COMPANY.contact.email}`} className="text-sm leading-6 hover:text-white transition">
                                    {COMPANY.contact.email}
                                </a>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                                <span className="text-sm leading-6">
                                    {COMPANY.contact.address.street}<br />
                                    {COMPANY.contact.address.city}, {COMPANY.contact.address.state} {COMPANY.contact.address.zip}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-900 bg-slate-950 py-8">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-8 text-xs text-slate-500">
                    <p className="text-center md:text-left">
                        &copy; {currentYear} {COMPANY.name}. All Rights Reserved. Used under license.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition">Terms of Use</Link>
                        <Link href="/applicant-privacy" className="hover:text-white transition">Applicant Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
