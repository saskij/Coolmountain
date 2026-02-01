"use client"

import Link from "next/link"
import { Truck, Thermometer, Zap } from "lucide-react" // Importing icons mapping
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
                "group flex flex-col justify-between rounded-[2rem] bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1 h-full",
                className
            )}
        >
            <div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-900">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm lg:text-base font-medium">
                    {description}
                </p>
            </div>

            <div className="mt-8">
                <span className="inline-block rounded-full bg-[#0F172A] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                    Regional & OTR
                </span>
            </div>
        </Link>
    )
}
