import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use | Cool Mountain Transport",
    description: "Terms and conditions governing the use of the Cool Mountain Transport website.",
}

export default function TermsPage() {
    return (
        <div className="bg-white">
            <HeroSection
                title="Terms of Use"
                subtitle="Last Updated: February 1, 2026"
                height="small"
            />

            <section className="py-20 px-[7vw]">
                <div className="max-w-4xl mx-auto space-y-6 text-slate-700">
                    <h2 className="text-3xl font-bold text-slate-900">Terms of Use</h2>
                    <p className="text-sm text-slate-500">Last Updated: February 1, 2026</p>

                    <p>Welcome to the Cool Mountain Transport website. These Terms of Use (&quot;Terms&quot;) govern your access to and use of <strong>coolmountaintransport.com</strong> (the &quot;Site&quot;). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Site.</p>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">1. Use of the Site</h3>
                    <p>You may use the Site for lawful purposes only. You are prohibited from violating or attempting to violate the security of the Site, including, without limitation:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Accessing data not intended for you or logging onto a server or an account which you are not authorized to access;</li>
                        <li>Attempting to probe, scan, or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization;</li>
                        <li>Attempting to interfere with service to any user, host, or network.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">2. Intellectual Property</h3>
                    <p>The Site and its original content, features, and functionality are owned by Cool Mountain Transport and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. The Cool Mountain Transport logo, &quot;Reliable Freight. Modern Fleet.&quot; tagline, and other trademarks are identifying marks of Cool Mountain Transport.</p>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">3. Disclaimer of Warranties</h3>
                    <p>Actual freight availability, transit times, and services may vary. The materials on the Site are provided on an &apos;as is&apos; basis. Cool Mountain Transport makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">4. Limitation of Liability</h3>
                    <p>In no event shall Cool Mountain Transport or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Site, even if Cool Mountain Transport has been notified orally or in writing of the possibility of such damage.</p>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">5. Governing Law</h3>
                    <p>These Terms shall be governed and construed in accordance with the laws of the State of Idaho, United States, without regard to its conflict of law provisions.</p>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">6. Changes to Terms</h3>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.</p>
                </div>
            </section>
        </div>
    );
}
