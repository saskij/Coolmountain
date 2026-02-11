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
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: MapPin,
            title: "Real-Time Tracking",
            description: "Full visibility of your shipment from pickup to delivery.",
            color: "text-red-600",
            bg: "bg-red-50"
        },
        {
            icon: ShieldCheck,
            title: "Safety First",
            description: "Expert drivers and a commitment to the highest safety standards.",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            icon: Truck,
            title: "Modern Fleet",
            description: "Reliable equipment for temperature-sensitive and standard freight.",
            color: "text-orange-600",
            bg: "bg-orange-50"
        }
    ]

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 ${className}`}>
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3">
                    <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center`}>
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                        <p className="text-sm text-slate-600 leading-snug mt-1">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
