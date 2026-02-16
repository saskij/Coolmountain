import { Container } from "@/components/ui/Container"
import { PageHero } from "@/components/ui/PageHero"
import { Reveal } from "@/components/ui/Reveal"
import { BASE_PATH } from "@/lib/constants"
import { HeroButtons } from "@/components/sections/HeroButtons"
import NextImage from "next/image"
import { Check } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Cool Mountain Transport - a Nampa, Idaho based trucking company providing reliable nationwide freight services. Family-owned logistics company with modern fleet and safety commitment. MC# 879475 | USDOT 2414797.",
    openGraph: {
        title: "About Cool Mountain Transport | Our Story",
        description: "Family-owned logistics company based in Nampa, Idaho with modern fleet and safety commitment.",
        images: [`${BASE_PATH}/assets/images/about-hero.jpg`],
    },
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="About Us"
                subtitle="A team built on safety, trust, and long-term partnerships."
                backgroundImage="/assets/images/about-hero.jpg"
            >
                <HeroButtons className="mt-8" />
                <div className="mt-8 text-xs font-semibold text-white/80 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <span>USDOT #28965</span>
                        <span className="opacity-60">•</span>
                        <span>MC #654322</span>
                    </div>
                </div>
            </PageHero>

            <section className="relative overflow-hidden bg-slate-50 py-20">
                {/* Background Elements */}
                <div className="pointer-events-none absolute inset-0 opacity-5">
                    <div className="absolute -right-24 top-10 h-64 w-64 rotate-12 rounded-full bg-slate-900"></div>
                    <div className="absolute left-12 top-24 h-32 w-32 rotate-12 border border-slate-900"></div>
                </div>

                <Container>
                    <div className="grid xl:grid-cols-12 gap-10 items-start">
                        {/* Content Column: col-span-5 */}
                        <div className="xl:col-span-5 space-y-8">
                            <Reveal direction="up">
                                <div>
                                    <h2 className="text-3xl font-black uppercase text-slate-900">
                                        COOL MOUNTAIN
                                        <span className="font-light text-slate-700 block sm:inline sm:ml-2">TRANSPORT</span>
                                    </h2>
                                    <div className="mt-2 h-1 w-40 bg-gradient-to-r from-slate-900 to-transparent"></div>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={0.1}>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <span className="text-sm font-semibold">Nampa, Idaho</span>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <span className="text-sm font-semibold">MC#879475</span>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <span className="text-sm font-semibold">USDOT 2414797</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={0.2}>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                                        The Cool Mountain Transport Way
                                    </h3>
                                    <p className="text-base leading-relaxed text-slate-700 mb-6">
                                        Since its inception, Cool Mountain Transport has focused on safe,
                                        sensible growth, founded on financial stability and customer
                                        collaboration to achieve the highest transportation standards.
                                    </p>

                                    <h4 className="text-lg font-bold text-slate-800 mb-4">Our Core Commitments:</h4>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "Maximize Efficiency:", text: "We utilize an attentive management style to improve operations and reduce costs." },
                                            { title: "Safety First:", text: "Rigorous safety standards and highly efficient trucks and trailers are our priority." },
                                            { title: "Care & Precision:", text: "Each load is handled with great care to ensure it arrives safely, on time, and per specifications." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" strokeWidth={2} />
                                                <span className="text-slate-700 leading-relaxed">
                                                    <strong>{item.title}</strong> {item.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>

                        {/* Visual Column: col-span-7 */}
                        <div className="xl:col-span-7 space-y-6 lg:translate-y-8">
                            <Reveal direction="left" delay={0.3}>
                                <div className="relative rounded-2xl border-l-4 border-red-500 bg-white p-8 shadow-sm">
                                    <div className="absolute left-6 top-4 text-5xl text-slate-100 font-serif">“</div>
                                    <p className="text-sm font-semibold text-orange-600 relative z-10">Mission Statement</p>
                                    <p className="mt-4 text-slate-600 leading-relaxed italic font-light relative z-10">
                                        to deliver outstanding transportation services, provide
                                        exceptional customer service, improve technology, and create
                                        business efficiencies that promote long-term customer stability,
                                        longevity and prosperity.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal direction="right" delay={0.4}>
                                <div className="relative rounded-2xl shadow-lg overflow-hidden group">
                                    <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border border-slate-200 bg-slate-50 -z-10"></div>
                                    <NextImage
                                        src={`${BASE_PATH}/assets/images/home-intro-truck.png`}
                                        alt="Cool Mountain truck"
                                        width={600}
                                        height={400}
                                        className="relative w-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

