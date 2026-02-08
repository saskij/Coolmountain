import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/Button"
import { COMPANY, BASE_PATH } from "@/lib/constants"
import { HeroButtons } from "@/components/sections/HeroButtons"
import NextImage from "next/image"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dry Van & General Freight Services | Cool Mountain Transport",
    description: "Reliable nationwide dry van capacity for your standard shipping needs. Modern fleet, real-time tracking, and 48-state coverage.",
}

export default function DryVanPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Dry Van & General Freight"
                subtitle="Reliable, nationwide transport for all your general freight needs."
                height="medium"
                backgroundImage="/assets/images/services-hero.jpg"
                backgroundVideo=""
            >
                <HeroButtons className="mt-8" />
                <div className="mt-8 text-xs font-semibold text-white/80 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <span>USDOT #28965</span>
                        <span className="opacity-60">•</span>
                        <span>MC #654322</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-12 w-auto relative">
                            <NextImage
                                src={`${BASE_PATH}/assets/images/smartway-logo.png`}
                                alt="SmartWay Partner"
                                width={150}
                                height={80}
                                className="h-full w-auto object-contain"
                            />
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
                                        Dry Van & General Freight
                                    </h2>
                                    <div className="mt-2 h-1 w-28 bg-gradient-to-r from-slate-900 to-transparent"></div>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={0.1}>
                                <p className="text-lg leading-relaxed text-slate-700">
                                    Our fleet of modern 53-foot dry vans provides secure and weather-proof transportation for a wide range of
                                    goods—from consumer electronics and retail merchandise to non-perishable food and building materials. We offer
                                    both drop-trailer programs and live loading to fit your schedule.
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
                                            "Real-time GPS tracking on all trailers",
                                            "Air-ride suspension to reduce cargo damage",
                                            "Nationwide coverage (48 states)"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <svg className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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
