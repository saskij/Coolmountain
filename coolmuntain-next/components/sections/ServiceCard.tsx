"use client"

import Link from "next/link"
import { ArrowRight, Truck, Thermometer, Zap } from "lucide-react" // Importing icons mapping
import { cn } from "@/lib/utils"

// Map icon string names to Lucide components
const IconMap = {
    Truck: Truck,
    Thermometer: Thermometer,
    Zap: Zap,
}

export interface ServiceCardProps {
    title: string
    description: string
    href: string
    iconName?: keyof typeof IconMap
    className?: string
}

export function ServiceCard({ title, description, href, iconName = "Truck", className }: ServiceCardProps) {
    const Icon = IconMap[iconName] || Truck

    return (
        <Link
            href={href}
            className={cn(
                "group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-red-600 hover:shadow-xl hover:-translate-y-1 h-full",
                className
            )}
        >
            <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-700 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                    {description}
                </p>
            </div>

            <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-widest text-red-700">
                <span className="group-hover:mr-2 transition-all duration-300">Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </div>
        </Link>
    )
}
