import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/Button"
import { COMPANY } from "@/lib/constants"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Expedited Freight Services | Cool Mountain Transport",
    description: "Time-critical shipping solutions with team drivers and 24/7 tracking. Get your urgent freight delivered faster and safer.",
}

export default function ExpeditedPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Expedited & Team Service"
                subtitle="When 'on time' isn't enough, and you need it there yesterday."
                height="medium"
                backgroundImage="/assets/images/header-bg-final-v2.jpg"
            >
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button href={COMPANY.externalLinks.driverApp} size="lg" external>
                        Apply as a Driver
                    </Button>
                    <Button href="/contact" size="lg" variant="outline" className="border-white/80 bg-black/40 text-white hover:bg-white hover:text-slate-900">
                        Request a Freight Quote
                    </Button>
                </div>
                <div className="mt-8 text-xs font-semibold text-white/80 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <span>USDOT #28965</span>
                        <span className="opacity-60">•</span>
                        <span>MC #654322</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-12 w-auto relative">
                            <img src="/assets/images/smartway-logo.png" alt="SmartWay Partner" className="h-full w-auto object-contain" />
                        </div>
                        <span>SmartWay Partner</span>
                    </div>
                </div>
            </HeroSection>

            <section className="relative overflow-hidden bg-slate-50 py-20">
                {/* Background Elements */}
                <div className="pointer-events-none absolute inset-0 opacity-5">
                    <div className="absolute -right-24 top-10 h-64 w-64 rotate-12 rounded-full bg-slate-100/70"></div>
                    <div className="absolute left-12 top-24 h-32 w-32 rotate-12 border border-slate-200/70"></div>
                    <div className="absolute bottom-10 left-1/3 h-40 w-1 rotate-12 bg-red-500/10"></div>
                </div>

                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <Reveal direction="up">
                                <div>
                                    <h2 className="text-3xl font-black uppercase text-slate-900">
                                        Expedited & Team Service
                                    </h2>
                                    <div className="mt-2 h-1 w-28 bg-gradient-to-r from-slate-900 to-transparent"></div>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={0.1}>
                                <p className="text-lg leading-relaxed text-slate-700">
                                    For your most critical shipments, we offer Expedited Team Service. By utilizing two drivers in one truck, we
                                    keep your freight moving non-stop, stopping only for fuel. This significantly reduces transit time compared to
                                    solo drivers, ensuring your Just-In-Time (JIT) manufacturing parts or emergency inventory arrives asap.
                                </p>
                            </Reveal>
                        </div>

                        <div className="space-y-8">
                            <Reveal direction="up" delay={0.2}>
                                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                        Key Features
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Non-stop transit (rolling 22+ hours/day)",
                                            "High-priority dispatch and routing",
                                            "Ideal for automotive parts, medical supplies, and retail launches"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <svg className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className="text-base text-slate-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
