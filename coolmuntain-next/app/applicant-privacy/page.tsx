import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";

export default function ApplicantPrivacyPage() {
    return (
        <div className="bg-white">
            <HeroSection
                title="Applicant Privacy Notice"
                subtitle="Last Updated: February 1, 2026"
                height="small"
            />

            <section className="py-20 px-[7vw]">
                <div className="max-w-4xl mx-auto space-y-6 text-slate-700">
                    <h2 className="text-3xl font-bold text-slate-900">Applicant Privacy Notice</h2>
                    <p className="text-sm text-slate-500">Last Updated: February 1, 2026</p>

                    <p><strong>Cool Mountain Transport</strong> values your trust and is committed to carefully soliciting, processing, and maintaining the privacy of your personal data during the recruiting and hiring process. This Applicant Privacy Notice explains how we collect, use, and share your personal information when you apply for employment or a contractor position with us.</p>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">1. Data Collection</h3>
                    <p>We collect personal data directly from you when you submit a job application, resume, or contact us regarding employment. This data may include:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Contact Information:</strong> Name, address, email, phone number.</li>
                        <li><strong>Professional History:</strong> Resume, CV, employment history, education, and certifications.</li>
                        <li><strong>Driver Qualifications:</strong> CDL details, driving record (MVR), accident history, and drug/alcohol testing history (as required by FMCSA).</li>
                        <li><strong>Government ID:</strong> Social Security Number (SSN) or other tax identification numbers for background checks and tax purposes.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">2. Use of Data</h3>
                    <p>Your data is used strictly for recruitment and hiring purposes, including:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Assessing your qualifications and suitability for the position.</li>
                        <li>Verifying your information and conducting reference checks.</li>
                        <li>Performing background checks and drug screenings as required by applicable law (e.g., DOT regulations).</li>
                        <li>Communicating with you about the recruitment process.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">3. Data Sharing</h3>
                    <p>We do not sell your applicant data. We may share your data with:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as background check providers (e.g., HireRight, PSP), drug testing facilities, and applicant tracking systems (e.g., Tenstreet/IntelliApp).</li>
                        <li><strong>Legal Authorities:</strong> Regulatory bodies (e.g., FMCSA, DOT) as required by federal law for transportation industry employment.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">4. Data Retention</h3>
                    <p>We retain applicant data in accordance with our record retention policies and applicable laws. If you are hired, your applicant data will become part of your employee record.</p>

                    <h3 className="text-xl font-bold text-slate-900 pt-4">5. Contact Information</h3>
                    <p>If you have any questions about this Notice, please contact our HR department at:</p>
                    <p className="font-semibold">
                        Cool Mountain Transport - HR<br />
                        Email: <a href="mailto:info@coolmountaintransport.com" className="text-slate-900 hover:text-red-700 transition">info@coolmountaintransport.com</a><br />
                        Phone: <a href="tel:2084752500" className="text-slate-900 hover:text-red-700 transition">(208) 475-2500</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
