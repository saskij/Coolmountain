"use client"

import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/Button"
import { COMPANY } from "@/lib/constants"
import { useState } from "react"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Cool Mountain Transport",
    description: "Get in touch with Cool Mountain Transport. Call our dispatch, safety, or recruiting departments, or request a freight quote online.",
}

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormState("submitting")
        // Simulate submission
        setTimeout(() => {
            setFormState("success")
        }, 1000)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Contact"
                subtitle="Let us know how we can support your freight needs."
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
                                    <h2 className="text-3xl font-semibold text-slate-900">Contact Us</h2>
                                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-slate-900 to-transparent"></div>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={0.1}>
                                <div className="grid gap-8 sm:grid-cols-2 text-sm text-slate-700">
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-slate-900 uppercase tracking-wide">Corporate Office</h3>
                                        <p>{COMPANY.contact.address.street}</p>
                                        <p>{COMPANY.contact.address.city}, {COMPANY.contact.address.state} {COMPANY.contact.address.zip}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="font-bold text-slate-900 uppercase tracking-wide">Mail</h3>
                                        <p>{COMPANY.contact.mailingAddress.poBox}</p>
                                        <p>{COMPANY.contact.mailingAddress.city}, {COMPANY.contact.mailingAddress.state} {COMPANY.contact.mailingAddress.zip}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="font-bold text-slate-900 uppercase tracking-wide">Dispatch Services</h3>
                                        <p><a href={`tel:${COMPANY.contact.dispatchPhone.replace(/-/g, "")}`} className="hover:text-red-700 transition">{COMPANY.contact.dispatchPhone}</a></p>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="font-bold text-slate-900 uppercase tracking-wide">Fax</h3>
                                        <p>{COMPANY.contact.fax}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="font-bold text-slate-900 uppercase tracking-wide">Corporate Offices</h3>
                                        <p><a href={`tel:${COMPANY.contact.dispatchPhone.replace(/-/g, "")}`} className="hover:text-red-700 transition">{COMPANY.contact.dispatchPhone}</a></p>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal direction="up" delay={0.2}>
                                <div className="space-y-4 pt-8 border-t border-slate-200">
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-slate-900 uppercase tracking-wide">Driving Careers</h3>
                                        <p className="font-medium text-slate-800">Company Drivers</p>
                                        <p><a href={`tel:${COMPANY.contact.careersPhone.replace(/-/g, "")}`} className="hover:text-red-700 transition">{COMPANY.contact.careersPhone}</a> ({COMPANY.contact.careersContactName})</p>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="font-bold text-slate-900 uppercase tracking-wide">Careers</h3>
                                        <p className="font-medium text-slate-800">Company Careers</p>
                                        <p><a href={`tel:${COMPANY.contact.careersPhone.replace(/-/g, "")}`} className="hover:text-red-700 transition">{COMPANY.contact.careersPhone}</a> ({COMPANY.contact.careersContactName})</p>
                                        <a href={`mailto:${COMPANY.contact.email}`} className="text-red-700 hover:underline">{COMPANY.contact.email}</a>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal direction="left" delay={0.3}>
                            <div className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                {formState === "success" ? (
                                    <div className="text-center py-12 space-y-4">
                                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                                        <p className="text-slate-600">Thank you for contacting us. We will get back to you shortly.</p>
                                        <button
                                            onClick={() => setFormState("idle")}
                                            className="text-red-600 font-semibold hover:text-red-700"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="grid gap-5">
                                        <div>
                                            <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                                                Full Name
                                            </label>
                                            <input
                                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                                                id="name" name="name" type="text" placeholder="Your name" required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                                                id="email" name="email" type="email" placeholder="you@email.com" required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold text-slate-700" htmlFor="phone">
                                                Phone
                                            </label>
                                            <input
                                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                                                id="phone" name="phone" type="tel" placeholder="(000) 000-0000"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                                                Message
                                            </label>
                                            <textarea
                                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                                                id="message" name="message" rows={5} placeholder="Tell us about your freight needs" required
                                            ></textarea>
                                        </div>
                                        <button
                                            className="rounded-full bg-[#b91c1c] px-6 py-4 text-[11px] font-semibold uppercase tracking-widest text-white min-h-[48px] w-full hover:bg-[#991b1b] transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                            type="submit"
                                            disabled={formState === "submitting"}
                                        >
                                            {formState === "submitting" ? "Sending..." : "Submit Request"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </div>
    )
}
