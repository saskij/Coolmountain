import { Clock, MapPin, ShieldCheck, Truck } from "lucide-react"

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
            description: "Reliable equipment for temperature-sensitive and standard freight.",
        }
    ]

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 ${className}`}>
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-brand-blue" />
                    </div>
                    <div>
                        <h3 className="font-bold text-brand-blue text-lg mb-2">{feature.title}</h3>
                        <p className="text-[13px] text-[#666666] leading-relaxed">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
