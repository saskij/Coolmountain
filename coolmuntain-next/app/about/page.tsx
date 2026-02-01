import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Reveal } from "@/components/ui/Reveal"
import { COMPANY } from "@/lib/constants"
import { Button } from "@/components/ui/Button"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Our Story"
                subtitle="Family-owned and operated since 2008. We built our reputation on reliability, honesty, and hard work."
                height="small"
                backgroundImage="/assets/images/header-bg-final-v2.jpg"
            />

            <section className="py-20 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-16">
                        <Reveal direction="up" priority>
                            <div>
                                <SectionTitle title="A Decade of Dedication" className="mb-6" />
                                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                                    <p>
                                        Cool Mountain Transport started with a single truck and a clear vision: to provide a higher standard of service in the refrigerated transport industry.
                                        Over the years, we have grown into a fleet of over 70 trucks, but our core values remain the same.
                                    </p>
                                    <p>
                                        We believe that treating our drivers with respect transfers directly to how they treat our customers' freight.
                                        Safety is not just a checkbox for us; it is a culture that starts from the top down.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.2}>
                            <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                                    <p className="text-slate-700">
                                        To deliver excellence in transportation through safety, integrity, and reliable service,
                                        while providing a supportive and rewarding environment for our team.
                                    </p>
                                </div>
                                <div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 font-medium text-slate-800">
                                            <span className="w-2 h-2 rounded-full bg-red-600" />
                                            Family Owned & Operated
                                        </li>
                                        <li className="flex items-center gap-3 font-medium text-slate-800">
                                            <span className="w-2 h-2 rounded-full bg-red-600" />
                                            Based in Nampa, Idaho
                                        </li>
                                        <li className="flex items-center gap-3 font-medium text-slate-800">
                                            <span className="w-2 h-2 rounded-full bg-red-600" />
                                            Serving Lower 48 States
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.3}>
                            <div className="text-center bg-slate-900 text-white rounded-2xl p-12 overflow-hidden relative">
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
                                    <p className="text-slate-300 max-w-xl mx-auto mb-8">
                                        We are always looking for professional drivers who take pride in their work.
                                        Experience the Cool Mountain difference.
                                    </p>
                                    <Button href={COMPANY.externalLinks.driverApp} external size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none">
                                        Apply Now
                                    </Button>
                                </div>
                                {/* Background element */}
                                <div className="absolute top-0 right-0 p-32 bg-red-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </div>
    )
}
