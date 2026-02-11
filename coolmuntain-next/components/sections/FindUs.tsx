"use client"

import { Container } from "@/components/ui/Container"
import { Reveal } from "@/components/ui/Reveal"
import { SectionTitle } from "@/components/ui/SectionTitle"

export function FindUs() {
    return (
        <section className="py-16 lg:py-28 bg-slate-50">
            <Container>
                {/* Headers - Left Aligned */}
                <div className="mb-16">
                    <Reveal direction="up">
                        <SectionTitle title="Find Us" subtitle="Visit our headquarters in the heart of Idaho." />
                    </Reveal>
                </div>

                {/* Content Grid */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] items-center gap-10">
                        {/* Left Column - Address & Directions */}
                        <Reveal direction="up" delay={0.1}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Headquarters</h3>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        1428 Madison Avenue<br />
                                        Nampa, Idaho 83687
                                    </p>
                                </div>

                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=1428+Madison+Avenue+Nampa+Idaho+83687"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg shadow-md hover:bg-brand-red-hover transition-all hover:-translate-y-0.5"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    GET DIRECTIONS
                                </a>
                            </div>
                        </Reveal>

                        {/* Right Column - Google Maps Embed (Wide View) */}
                        <Reveal direction="up" delay={0.2}>
                            <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.0446!2d-116.5638!3d43.5808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae554e8b00000%3A0x0!2s1428%20Madison%20Ave%2C%20Nampa%2C%20ID%2083686!5e0!3m2!1sen!2sus!4v1234567890&z=15"
                                    width="100%"
                                    height="100%"
                                    className="w-full h-full block"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Cool Mountain Transport Location"
                                ></iframe>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </section>
    )
}
