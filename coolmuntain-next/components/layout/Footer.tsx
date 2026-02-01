import Link from "next/link"
import NextImage from "next/image"
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants"
import { Container } from "@/components/ui/Container"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-100 border-t border-slate-200">
            <Container className="py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Links Section */}
                    <div className="grid grid-cols-1 gap-8 text-sm text-slate-600 sm:grid-cols-2 text-center sm:text-left">
                        <div className="space-y-3">
                            <Link href="/" className="block hover:text-slate-900 transition font-medium">Homepage</Link>
                            <Link href="/about" className="block hover:text-slate-900 transition font-medium">About Us</Link>
                            <Link href="/join-our-team" className="block hover:text-slate-900 transition font-medium">Join Our Team</Link>
                            {/* Removed "Customers" link as it was broken in original site # */}
                        </div>
                        <div className="space-y-3">
                            <Link href="/equipment" className="block hover:text-slate-900 transition font-medium">Equipment</Link>
                            <Link href="/news" className="block hover:text-slate-900 transition font-medium">News</Link>
                            <Link href="/contact" className="block hover:text-slate-900 transition font-medium">Contact</Link>
                            <div className="pt-2">
                                <p className="font-bold text-slate-900 mb-1">Corporate Office</p>
                                <p>{COMPANY.contact.address.street}</p>
                                <p>{COMPANY.contact.address.city}, {COMPANY.contact.address.state} {COMPANY.contact.address.zip}</p>
                                <p className="mt-2 text-red-700 font-bold">{COMPANY.contact.dispatchPhoneDisplay}</p>
                            </div>
                        </div>
                    </div>

                    {/* Branding Section */}
                    <div className="flex flex-col items-center gap-6 lg:items-end">
                        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10 sm:items-center">
                            {/* Logos */}
                            <NextImage src="/assets/images/logo-transparent.png" alt={COMPANY.name} width={300} height={100} className="h-24 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition" />
                            <NextImage src="/assets/images/smartway-logo.png" alt="SmartWay Partner" width={200} height={80} className="h-20 w-auto object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex gap-4 text-slate-400">
                            <a href={COMPANY.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition hover:scale-110 transform">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 9H15V6.5c0-.7.1-1 .9-1H18V3h-2.5C12.9 3 12 4.5 12 6.7V9H10v2.5h2V21h2.5v-9.5H17L17.5 9h-3z" /></svg>
                            </a>
                            <a href={COMPANY.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition hover:scale-110 transform">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3zM8.3 18H5.7V9.7h2.6V18zm-1.3-9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.5 18h-2.6v-4.1c0-1-.3-1.6-1.2-1.6-.7 0-1 .5-1.2 1-.1.2-.1.5-.1.8V18h-2.6s.1-6.9 0-8.3h2.6v1.2c.3-.5.9-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5V18z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-200 pt-8 text-center">
                    <p className="text-xs text-slate-500">
                        &copy; {currentYear} {COMPANY.name}. All Rights Reserved. USDOT #{COMPANY.meta.usdot} | MC #{COMPANY.meta.mc}
                    </p>
                </div>
            </Container>
        </footer>
    )
}
