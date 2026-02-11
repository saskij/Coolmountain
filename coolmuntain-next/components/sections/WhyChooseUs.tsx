"use client"

import { Clock, MapPin, ShieldCheck, Truck } from "lucide-react"
import { motion } from "framer-motion"

interface WhyChooseUsProps {
    className?: string;
}

export function WhyChooseUs({ className }: WhyChooseUsProps) {
    const features = [
        {
            icon: Clock,
            title: "24/7 Dispatch",
            description: "Always available to keep your freight moving.",
        },
        {
            icon: MapPin,
            title: "Real-Time Tracking",
            description: "Full visibility of your shipment from pickup to delivery.",
        },
        {
            icon: ShieldCheck,
            title: "Safety First",
            description: "Expert drivers and a commitment to the highest safety standards.",
        },
        {
            icon: Truck,
            title: "Modern Fleet",
            description: "Reliable equipment for temperature-sensitive and standard freight. We invest in the latest equipment to reduce breakdowns and improve fuel efficiency.",
        }
    ]

    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 transform-gpu ${className}`}
        >
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }}
                    className="flex flex-col gap-4 bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.2,
                            type: "tween",
                            ease: "easeInOut"
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
    )
}
