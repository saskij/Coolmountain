import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/Button"
import { COMPANY, BASE_PATH } from "@/lib/constants"
import { HeroButtons } from "@/components/sections/HeroButtons"
import { CheckCircle2 } from "lucide-react"
import NextImage from "next/image"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Careers & Truck Driving Jobs | Cool Mountain Transport",
    description: "Join our team of professional drivers. Competitive pay, great benefits, and a family-oriented atmosphere. Apply to move with Cool Mountain.",
    openGraph: {
        title: "Join the Cool Mountain Team",
        description: "We are hiring professional drivers and owner-operators. Experience a family culture and great benefits.",
        url: "https://coolmountaintransport.com/join-our-team",
    },
}

export default function JoinTeamPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Join Our Team"
                subtitle="Explore opportunities for company drivers and owner operators, plus the benefits of working with a team that prioritizes safety and professionalism."
                height="medium"
                backgroundImage="/assets/images/join-our-team-hero.jpg"
                backgroundVideo=""
            >
                <HeroButtons className="mt-8" />
                <div className="mt-8 text-xs font-semibold text-white/80 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <span>USDOT #28965</span>
                        <span className="opacity-60">•</span>
                        <span>MC #654322</span>
                    </div>

                </div>
            </HeroSection>

            {/* Company Drivers Section */}
            <section className="bg-white py-20">
                <Container>
                    <div className="space-y-10">
                        <Reveal direction="up">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                    Company Drivers
                                </h2>
                                <p className="mt-3 text-base leading-relaxed text-slate-700">
                                    If you’re a professional driver looking for opportunities that work
                                    for YOU, with a purpose to change the transportation environment,
                                    you’ve come to the right place.
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
                            <Reveal direction="up" delay={0.1}>
                                <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                                    <p>
                                        At Cool Mountain Transport, we work as a family-oriented team,
                                        demonstrating the most professional attitude in the industry. Team
                                        members hold each other to higher standards than our competitors
                                        and strive to help each other improve every aspect of our
                                        workplace; we encourage each other daily, hold each other
                                        accountable at all times, and always treat our customers with
                                        dignity and respect.
                                    </p>
                                    <p>
                                        At Cool Mountain Transport, driving isn’t just a job – it’s our
                                        passion. It’s a chance to make a difference in every person we
                                        meet.
                                    </p>
                                    <p>
                                        Cool Mountain Transport is a known leader in the industry. Its
                                        Driving Associates develop one-on-one relationships with managers,
                                        trainers, and staff. They know each other by name, are there when
                                        they’re needed, and provide support for long-term success. Cool
                                        Mountain Transport offers employees the financial stability needed
                                        for continued professional growth. But driving with Cool Mountain
                                        Transport isn’t merely about steady income; it’s about enjoying
                                        your work. Cool Mountain Transport values each employee and has
                                        built a strong culture of loyal and successful truck drivers. With
                                        Cool Mountain Transport, you are part of a winning, growing team.
                                    </p>
                                    <div className="pt-4">
                                        <Button href={COMPANY.externalLinks.driverApp} external size="lg">
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal direction="left" delay={0.2}>
                                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                                            <CheckCircle2 className="w-5 h-5 text-slate-700" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            Safety Commitment
                                        </h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-slate-600 mb-4">
                                        At Cool Mountain Transport safety comes first. Safety means
                                        customers’ freight is delivered undamaged and each driving
                                        associate goes home to their family uninjured.
                                    </p>
                                    <p className="text-sm font-semibold text-slate-900 mb-2">
                                        Safety initiatives include:
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-600 list-disc pl-4">
                                        <li>Collision-avoidance technology installed on the fleet.</li>
                                        <li>Tire pressure warning system with temperature readings.</li>
                                        <li>The newest fleet around with updated safety technology.</li>
                                    </ul>
                                    <p className="mt-4 text-sm text-slate-600">
                                        Our commitment to safety starts with all of us working as a team to
                                        keep improving.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Owner Operators Section */}
            <section className="bg-slate-50 py-20">
                <Container>
                    <div className="max-w-7xl space-y-8">
                        <Reveal direction="up">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                    Owner Operators
                                </h2>
                                <p className="mt-3 text-base leading-relaxed text-slate-700">
                                    Great company, great clientele, and regular runs for qualified owner
                                    operators.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.1}>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                                        Regions
                                    </p>
                                    <p className="mt-3 text-base font-semibold text-slate-900">
                                        ID, OR, WA, MT, ND, CA
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                                        Compensation
                                    </p>
                                    <p className="mt-3 text-base font-semibold text-slate-900">
                                        Up to 85% of gross revenue
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                                        Contact
                                    </p>
                                    <p className="mt-3 text-base font-semibold text-slate-900">
                                        Call Joan at {COMPANY.contact.careersPhone}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* Benefits Section */}
            <section className="bg-white py-20">
                <Container>
                    <div className="space-y-8">
                        <Reveal direction="up">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Benefits of Working With Us
                            </h2>
                        </Reveal>

                        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
                            <Reveal direction="up" delay={0.1}>
                                <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                                    <p>
                                        Cool Mountain Transport is looking for qualified individuals to
                                        join its growing team. Talented individuals who strive to improve,
                                        work with passion, are dedicated to doing a great job, and perform
                                        each task to the best of their ability are ideal for our company.
                                    </p>
                                    <p>
                                        Cool Mountain Transport is expanding and is committed to becoming
                                        the best trucking company in America. Drivers receive consistent
                                        support from a dedicated staff while earning a compensation package
                                        that recognizes their value and contribution.
                                    </p>
                                    <p>
                                        If you are honest, dedicated, and have passion for the job, come
                                        work at Cool Mountain Transport and help us grow!
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal direction="right" delay={0.2}>
                                <div className="rounded-2xl border border-blue-100 bg-slate-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6">
                                        Why Drive for Cool Mountain?
                                    </h3>
                                    <ul className="space-y-4 mb-8">
                                        {[
                                            "Competitive Pay & Sign-on Bonuses",
                                            "New Equipment (2023-2025 models)",
                                            "Flexible Home Time",
                                            "Comprehensive Health & Dental Insurance"
                                        ].map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 mt-1">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <span className="text-slate-700 font-medium">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-slate-200">
                                        <Button href={COMPANY.externalLinks.driverApp} external size="lg" fullWidth className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25">
                                            Apply Today
                                        </Button>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
