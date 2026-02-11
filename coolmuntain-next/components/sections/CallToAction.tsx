"use client"

import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { COMPANY } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function CallToAction() {
    return (
        <section className="py-20 bg-slate-50">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-white/10"
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
                    <div className="absolute inset-0 bg-dot-grid opacity-[0.07] z-0" />

                    {/* Glowing Orbs */}
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

                    <div className="relative z-10 px-6 py-16 md:py-20 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Ready to Move Your Freight?
                        </h2>

                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Experience the difference of a logistics partner that combines modern technology with old-school reliability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#333333] text-white rounded-[6px] font-bold text-base uppercase tracking-[0.5px] shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-[3px] active:scale-95 overflow-hidden"
                            >
                                <span className="relative z-10">Get a Quote</span>
                                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <a
                                href={`tel:${COMPANY.contact.dispatchPhone.replace(/-/g, "")}`}
                                className="group-hover inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white rounded-xl font-semibold text-base transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600 hover:-translate-y-1 active:scale-95 ring-1 ring-white/5"
                            >
                                <Phone className="w-5 h-5 text-red-500 transition-colors group-hover:text-red-400" />
                                <span>Dispatch: {COMPANY.contact.dispatchPhoneDisplay}</span>
                            </a>
                        </div>

                        {/* Status Indicators */}
                        <div className="mt-12 flex items-center justify-center gap-6 md:gap-12 text-xs md:text-sm font-medium text-slate-400 opacity-80">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>24/7 Dispatch</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span>Real-Time Tracking</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                                <span>Nationwide Coverage</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
