import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { ContactForm } from "@/components/sections/ContactForm"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Reveal } from "@/components/ui/Reveal"
import { COMPANY } from "@/lib/constants"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Contact Us"
                subtitle="Get in touch for rates, dispatch, or career opportunities."
                height="medium"
                backgroundImage="/assets/images/header-bg-final-v2.jpg"
            />

            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Info Column */}
                        <div className="space-y-12">
                            <Reveal direction="up">
                                <div>
                                    <SectionTitle title="Get In Touch" subtitle="We are here to help 24/7." />
                                    <p className="mt-6 text-slate-600 leading-relaxed">
                                        Whether you have a load that needs moving or you are a driver looking for a new home,
                                        our team represents the best in the industry. Reach out to us today.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={0.1}>
                                <div className="grid gap-8">
                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">Headquarters</h4>
                                            <p className="text-slate-600 mt-1">
                                                {COMPANY.contact.address.street}<br />
                                                {COMPANY.contact.address.city}, {COMPANY.contact.address.state} {COMPANY.contact.address.zip}
                                            </p>
                                            <p className="text-slate-500 text-sm mt-2">Mailing: {COMPANY.contact.mailingAddress.poBox}, {COMPANY.contact.mailingAddress.city}, {COMPANY.contact.mailingAddress.state} {COMPANY.contact.mailingAddress.zip}</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">Phone & Fax</h4>
                                            <p className="text-slate-600 mt-1">
                                                <span className="font-semibold text-slate-800">Dispatch:</span> {COMPANY.contact.dispatchPhoneDisplay}
                                            </p>
                                            <p className="text-slate-600">
                                                <span className="font-semibold text-slate-800">Recruiting:</span> {COMPANY.contact.careersPhone}
                                            </p>
                                            <p className="text-slate-600">
                                                <span className="font-semibold text-slate-800">Fax:</span> {COMPANY.contact.fax}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                                            <p className="text-slate-600 mt-1">
                                                <a href={`mailto:${COMPANY.contact.email}`} className="text-red-700 hover:underline">
                                                    {COMPANY.contact.email}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Form Column */}
                        <Reveal direction="left" delay={0.2} className="relative z-10">
                            <ContactForm />
                        </Reveal>
                    </div>
                </Container>
            </section>
        </div>
    )
}
