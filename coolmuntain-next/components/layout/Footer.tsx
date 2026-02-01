import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-100 border-t border-slate-200 text-slate-700 font-sans">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">

                    {/* Column 1: Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-900">Cool Mountain Transport</h3>
                        <p className="text-slate-600 font-medium">Reliable Freight. Modern Fleet.</p>
                    </div>

                    {/* Column 2: Legal Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-sm hover:text-red-700 hover:underline transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm hover:text-red-700 hover:underline transition-colors duration-200">
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link href="/applicant-privacy" className="text-sm hover:text-red-700 hover:underline transition-colors duration-200">
                                    Applicant Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <span className="font-semibold w-20">Phone:</span>
                                <span>(000) 000-0000</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold w-20">Email:</span>
                                <a href="mailto:info@coolmountaintransport.com" className="hover:text-red-700 transition-colors">
                                    info@coolmountaintransport.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold w-20">Location:</span>
                                <span>Boise, ID</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {currentYear} Cool Mountain Transport. All rights reserved.</p>
                    <p className="text-center md:text-right max-w-md">
                        Website information is provided &lsquo;as is&rsquo; and does not constitute an employment offer.
                    </p>
                </div>
            </div>
        </footer>
    );
}
