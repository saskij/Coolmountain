"use client"

import { Clock, MapPin, ShieldCheck, Truck, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

interface WhyChooseUsProps {
    className?: string;
}

export function WhyChooseUs({ className }: WhyChooseUsProps) {
    const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (selectedFeature !== null) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [selectedFeature])

    const features = [
        {
            icon: Clock,
            title: "24/7 Dispatch",
            description: "Always available to keep your freight moving.",
            detailedDescription: "Our dispatch team works around the clock to ensure your freight is moving efficiently. We provide instant communication between drivers and shippers, 365 days a year, minimizing delays and maximizing reliability."
        },
        {
            icon: MapPin,
            title: "Real-Time Tracking",
            description: "Full visibility of your shipment from pickup to delivery.",
            detailedDescription: "We utilize industry-leading GPS and ELD systems to provide 100% transparency. Shippers receive regular automated updates and can access real-time location data for every mile of the journey."
        },
        {
            icon: ShieldCheck,
            title: "Safety First",
            description: "Expert drivers and a commitment to the highest safety standards.",
            detailedDescription: "Safety is the foundation of our operations. We maintain a strict zero-tolerance policy for safety violations, conduct regular driver training programs, and strictly adhere to all FMCSA and DOT regulations."
        },
        {
            icon: Truck,
            title: "Modern Fleet",
            description: "Reliable equipment for temperature-sensitive and standard freight.",
            detailedDescription: "We invest in the latest equipment to reduce breakdowns and improve fuel efficiency. Our fleet consists of 2023-2025 Kenworth and Peterbilt models, all equipped with advanced collision mitigation and driver comfort suites."
        }
    ]

    return (
        <>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 ${className}`}>
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => setSelectedFeature(index)}
                        className="flex flex-col gap-4 bg-white rounded-xl p-6 shadow-md transition-all duration-300 lg:cursor-pointer lg:hover:shadow-2xl lg:hover:-translate-y-[5px] lg:active:scale-95 pointer-events-none lg:pointer-events-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1 + 0.2,
                                type: "spring",
                                stiffness: 200
                            }}
                            className="relative w-16 h-16"
                        >
                            {/* Rotated rounded square background with soft shadow */}
                            <div
                                className="absolute inset-0 rounded-2xl rotate-[10deg] shadow-lg"
                                style={{
                                    backgroundColor: 'rgba(0, 51, 102, 0.1)',
                                    boxShadow: '0 4px 12px rgba(0, 51, 102, 0.15)'
                                }}
                            />
                            {/* Icon container */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <feature.icon className="w-8 h-8 text-brand-red" strokeWidth={2} />
                            </div>
                        </motion.div>
                        <div>
                            <h3 className="font-bold text-brand-blue text-lg mb-2">{feature.title}</h3>
                            <p className="text-[13px] text-[#666666] leading-relaxed">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedFeature !== null && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedFeature(null)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                            />

                            {/* Modal Content */}
                            <div className="fixed inset-0 z-[51] flex items-center justify-center p-4 pointer-events-none">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                    className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto"
                                >
                                    <div className="relative p-8">
                                        {/* Close Button */}
                                        <button
                                            onClick={() => setSelectedFeature(null)}
                                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-brand-red"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>

                                        {/* Content */}
                                        <div className="flex flex-col items-center text-center space-y-6">
                                            <div className="relative w-20 h-20 flex items-center justify-center">
                                                <div className="absolute inset-0 bg-brand-blue/5 rounded-2xl rotate-[10deg]" />
                                                {(() => {
                                                    const Icon = features[selectedFeature].icon;
                                                    return <Icon className="w-10 h-10 text-brand-red relative z-10" strokeWidth={2} />;
                                                })()}
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-brand-blue mb-4">
                                                    {features[selectedFeature].title}
                                                </h3>
                                                <p className="text-slate-600 leading-relaxed text-lg">
                                                    {features[selectedFeature].detailedDescription}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => setSelectedFeature(null)}
                                                className="mt-4 px-8 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-blue-hover transition-colors shadow-lg active:scale-95"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    )
}
