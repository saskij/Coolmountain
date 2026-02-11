import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { Reveal } from "@/components/ui/Reveal"
import { BASE_PATH } from "@/lib/constants"
import { HeroButtons } from "@/components/sections/HeroButtons"
import NextImage from "next/image"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Equipment & Fleet | Cool Mountain Transport",
    description: "Explore our modern fleet of Kenworth & Peterbilt trucks and utility trailers. We maintain high standards for safety and efficiency.",
}

export default function EquipmentPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Equipment"
                subtitle="Modern, reliable equipment built for performance and safety."
                height="medium"
                backgroundImage="/assets/images/equipment-hero.jpg"
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

            <section className="relative overflow-hidden bg-slate-50 py-20">
                {/* Background Elements */}
                <div className="pointer-events-none absolute inset-0 opacity-5">
                    <div className="absolute -right-24 top-10 h-64 w-64 rotate-12 rounded-full bg-slate-100/70"></div>
                    <div className="absolute left-12 top-24 h-32 w-32 rotate-12 border border-slate-200/70"></div>
                    <div className="absolute bottom-10 left-1/3 h-40 w-1 rotate-12 bg-red-500/10"></div>
                </div>

                <Container>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <Reveal direction="up">
                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900">
                                    Fleet & Technology
                                </h2>
                                <div className="mt-2 h-1 w-28 bg-gradient-to-r from-slate-900 to-transparent"></div>
                                <p className="mt-6 text-base leading-relaxed text-gray-700">
                                    We operate a fleet of well-maintained 2020 and 2025 Freightliners, giving drivers reliable,
                                    modern trucks equipped for comfort, safety, and long-haul efficiency.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.1}>
                            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                                <div className="space-y-4">
                                    <h2 className="text-lg font-semibold text-slate-900">
                                        Every unit is spec’d with premium features that make life on the road easier:
                                    </h2>
                                    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                                        {[
                                            { title: "Heated and cooled seats (ELITE SEATS!)", desc: "comfort in any weather" },
                                            { title: "APU with Arctic package", desc: "climate control without idling, even in extreme cold" },
                                            { title: "Refrigerator", desc: "fresh meals on the road" },
                                            { title: "Extra windows", desc: "improved visibility and natural light" },
                                            { title: "Foldable double bunks", desc: "rest comfortably between runs" },
                                            { title: "Premier mattress", desc: "quality sleep for safer driving" },
                                            { title: "Cab curtain", desc: "privacy when you need it" },
                                            { title: "TV holder", desc: "relax during downtime" },
                                            { title: "1800-watt inverter", desc: "power electronics and appliances" },
                                            { title: "Extra work lights", desc: "better visibility during night operations" },
                                            { title: "Chrome brush guard", desc: "added front-end protection" },
                                            { title: "Advanced dashboard gauges & TPMS", desc: "stay informed and reduce breakdowns" },
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-base leading-relaxed text-gray-700">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                                                <span>
                                                    <strong>{item.title}</strong> — {item.desc}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </div>
    )
}
