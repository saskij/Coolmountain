"use client"

import { Clock, MapPin, ShieldCheck, Truck } from "lucide-react"

interface WhyChooseUsProps {
    className?: string;
}

export function WhyChooseUs({ className }: WhyChooseUsProps) {
    const features = [
        {
            icon: Clock,
            title: "24/7 Dispatch",
            description: "Our dedicated dispatch team operates around the clock to ensure seamless coordination and immediate response. We maintain constant communication between drivers and clients to handle any logistical challenges in real-time.",
        },
        {
            icon: MapPin,
            title: "Real-Time Tracking",
            description: "Stay informed with our advanced GPS monitoring systems providing 100% transparency for your cargo. Receive automated status updates and track your shipment’s exact location from pickup to final delivery.",
        },
        {
            icon: ShieldCheck,
            title: "Safety First",
            description: "We maintain a rigorous safety culture through continuous driver training and strict adherence to FMCSA regulations. Your freight is protected by our uncompromising commitment to industry-leading safety standards and cargo security.",
        },
        {
            icon: Truck,
            title: "Modern Fleet",
            description: "Our fleet consists of late-model, fuel-efficient tractors and trailers equipped with the latest technology to minimize breakdown risks. Regular preventative maintenance ensures our equipment is always road-ready for long-haul reliability.",
        }
    ]

    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 transform-gpu ${className}`}
        >
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-4 bg-white rounded-xl p-6 shadow-md h-full"
                >
                    <div className="relative w-16 h-16 flex-shrink-0">
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
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-bold text-brand-blue text-lg mb-3">{feature.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
