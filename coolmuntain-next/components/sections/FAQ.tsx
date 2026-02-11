"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
    question: string
    answer: string
}

interface FAQProps {
    className?: string
}

const driversQuestions: FAQItem[] = [
    {
        question: "What are the requirements to become a driver?",
        answer: "We require a valid CDL Class A license, at least 2 years of verifiable driving experience, a clean driving record, and the ability to pass a DOT physical and drug screening."
    },
    {
        question: "What type of freight do you haul?",
        answer: "We specialize in refrigerated freight, dry van shipments, and expedited deliveries across the continental United States. Our modern fleet is equipped to handle temperature-sensitive cargo and standard freight."
    },
    {
        question: "Do you offer home time?",
        answer: "Yes! We understand the importance of work-life balance. We work with our drivers to provide regular home time based on route assignments and individual needs."
    },
    {
        question: "What is your pay structure?",
        answer: "We offer competitive pay packages including mileage-based compensation, performance bonuses, and benefits. Contact our recruiting team for specific details about current pay rates and incentives."
    }
]

const shippersQuestions: FAQItem[] = [
    {
        question: "What areas do you serve?",
        answer: "We provide nationwide freight services across all 48 continental states, with our headquarters based in Nampa, Idaho, strategically positioned in the Pacific Northwest."
    },
    {
        question: "Do you offer real-time tracking?",
        answer: "Yes, we provide full visibility of your shipment from pickup to delivery through our advanced tracking system. You'll have access to real-time updates on your freight's location and estimated delivery time."
    },
    {
        question: "What types of cargo can you transport?",
        answer: "We handle refrigerated logistics, standard dry van freight, and expedited shipments. Our fleet includes late-model equipment suitable for temperature-controlled cargo and general freight."
    },
    {
        question: "How do I request a quote?",
        answer: "You can request a quote by contacting our dispatch team at (208) 475-2500, using our online contact form, or emailing us directly. We'll respond promptly with competitive pricing for your shipping needs."
    }
]

export function FAQ({ className }: FAQProps) {
    const [activeTab, setActiveTab] = useState<'drivers' | 'shippers'>('drivers')
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const currentQuestions = activeTab === 'drivers' ? driversQuestions : shippersQuestions

    return (
        <div className={className}>
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
                <button
                    onClick={() => {
                        setActiveTab('drivers')
                        setOpenIndex(null)
                    }}
                    className={`px-6 py-3 font-semibold rounded-lg transition-all ${activeTab === 'drivers'
                            ? 'bg-brand-blue text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-slate-100'
                        }`}
                >
                    FOR DRIVERS
                </button>
                <button
                    onClick={() => {
                        setActiveTab('shippers')
                        setOpenIndex(null)
                    }}
                    className={`px-6 py-3 font-semibold rounded-lg transition-all ${activeTab === 'shippers'
                            ? 'bg-brand-blue text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-slate-100'
                        }`}
                >
                    FOR SHIPPERS
                </button>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
                {currentQuestions.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                        >
                            <span className="font-semibold text-slate-900 text-lg pr-4">
                                {item.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}
