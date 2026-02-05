import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";

export default function PrivacyPage() {
    return (
        <div className="bg-white">
            <HeroSection
                title="Privacy Policy"
                subtitle="Last Updated: February 1, 2026"
                height="small"
            />

            <section className="py-20 px-[7vw]">
                <div className="max-w-4xl mx-auto space-y-6 text-slate-700">
                    <h2 className="text-3xl font-bold text-slate-900">Privacy Policy</h2>
                    <p className="text-sm text-slate-500">Last Updated: February 1, 2026</p>

                    <p>Cool Mountain Transport (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>coolmountaintransport.com</strong>, apply for a job, or inquire about our freight services.</p>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h3>
                    <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you request a freight quote or contact us for information.</li>
                        <li><strong>Driver Application Data:</strong> If you apply via our &quot;Join Our Team&quot; or IntelliApp links, we collect sensitive personal data required for employment screening, including CDL number, driving history, social security number, and employment history. This data is processed securely in compliance with DOT and FMCSA regulations.</li>
                        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">2. Use of Your Information</h3>
                    <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Process freight quotes and schedule transportation services.</li>
                        <li>Process job applications and conduct necessary background checks for driver candidates.</li>
                        <li>Email you regarding your account or order.</li>
                        <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                        <li>Respond to product and customer service requests.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">3. Disclosure of Your Information</h3>
                    <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                        <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including background check agencies (for drivers), payment processing, data analysis, email delivery, hosting services, and customer service.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">4. Security of Your Information</h3>
                    <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">5. Contact Us</h3>
                    <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                    <p className="font-semibold">
                        Cool Mountain Transport<br />
                        Boise, ID<br />
                        Email: <a href="mailto:info@coolmountaintransport.com" className="text-slate-900 hover:text-red-700 transition">info@coolmountaintransport.com</a><br />
                        Phone: <a href="tel:2084752500" className="text-slate-900 hover:text-red-700 transition">(208) 475-2500</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
