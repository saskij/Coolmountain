import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/Button"
import { COMPANY } from "@/lib/constants"
import { ShieldCheck, Map, DollarSign, Phone } from "lucide-react"

export default function JoinTeamPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Join Our Team"
                subtitle="Explore opportunities for company drivers and owner operators."
                height="medium"
                backgroundImage="/assets/images/header-bg-final-v2.jpg"
            >
                <Button href={COMPANY.externalLinks.driverApp} external size="lg" className="mt-8">
                    Apply Now
                </Button>
            </HeroSection>

            {/* Company Drivers */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <Reveal direction="up">
                            <div className="space-y-6">
                                <SectionTitle title="Company Drivers" subtitle="Drive with passion. Drive with us." />
                                <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                                    <p>
                                        at Cool Mountain Transport, working as a family-oriented team is our standard.
                                        We value each employee and have built a strong culture of loyal and successful truck drivers.
                                    </p>
                                    <p>
                                        Our drivers develop one-on-one relationships with managers and staff.
                                        We know each other by name, are there when needed, and provide support for long-term success.
                                    </p>
                                </div>
                                <Button href={COMPANY.externalLinks.driverApp} external>
                                    Start Application
                                </Button>
                            </div>
                        </Reveal>

                        <Reveal direction="left" delay={0.2}>
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Safety Commitment</h3>
                                </div>
                                <ul className="space-y-3 text-slate-700">
                                    <li>Collision-avoidance technology installed</li>
                                    <li>Tire pressure warning systems</li>
                                    <li>Newest fleet with updated safety tech</li>
                                    <li>Strict maintenance schedules</li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* Owner Operators */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="mb-12">
                        <Reveal direction="up">
                            <SectionTitle title="Owner Operators" subtitle="Great partnerships for qualified operators." />
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Reveal delay={0.1} direction="up">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-full">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                    <Map className="w-5 h-5" />
                                </div>
                                <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-2">Regions</h4>
                                <p className="text-xl font-bold text-slate-900">ID, OR, WA, MT, ND, CA</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2} direction="up">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-full">
                                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-2">Compensation</h4>
                                <p className="text-xl font-bold text-slate-900">Up to 85% of Gross</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3} direction="up">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-full">
                                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-2">Contact</h4>
                                <p className="text-xl font-bold text-slate-900">
                                    Call {COMPANY.contact.careersContactName}<br />
                                    <span className="text-base font-normal text-slate-600">{COMPANY.contact.careersPhone}</span>
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* Benefits / Conclusion */}
            <section className="py-24 bg-white">
                <Container>
                    <Reveal direction="up">
                        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Drive with the Best?</h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                                If you are honest, dedicated, and have passion for the job, come work at Cool Mountain Transport and help us grow.
                            </p>
                            <Button href={COMPANY.externalLinks.driverApp} external size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                                Apply Today
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </section>
        </div>
    )
}
