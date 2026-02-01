import Link from "next/link";
import NextImage from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

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
                        <Link href="/" className="transition-transform duration-300 hover:scale-105 inline-block">
                            <NextImage
                                src="/assets/images/logo-transparent.png"
                                alt="Cool Mountain"
                                width={180}
                                height={96}
                                className="h-24 w-auto object-contain"
                            />
                        </Link>
                        <NextImage
                            src="/assets/images/smartway-logo.png"
                            alt="SmartWay Transport Partner"
                            width={150}
                            height={80}
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4 text-amber-700 sm:justify-end">
                        <a className="transition hover:text-amber-800" href="https://www.facebook.com/coolmtntransport" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M13.5 9H15V6.5c0-.7.1-1 .9-1H18V3h-2.5C12.9 3 12 4.5 12 6.7V9H10v2.5h2V21h2.5v-9.5H17L17.5 9h-3z" />
                            </svg>
                        </a>
                        <a className="transition hover:text-amber-800" href="https://www.linkedin.com/company/cool-mountain-transport/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3zM8.3 18H5.7V9.7h2.6V18zm-1.3-9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.5 18h-2.6v-4.1c0-1-.3-1.6-1.2-1.6-.7 0-1 .5-1.2 1-.1.2-.1.5-.1.8V18h-2.6s.1-6.9 0-8.3h2.6v1.2c.3-.5.9-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5V18z" />
                            </svg>
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
