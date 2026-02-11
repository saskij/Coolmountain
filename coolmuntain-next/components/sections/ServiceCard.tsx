import Link from "next/link"
import NextImage from "next/image"
import { Truck, Thermometer, Zap, ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { BASE_PATH } from "@/lib/constants"

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
    backgroundImage?: string
}

export function ServiceCard({ title, description, href, iconName = "Truck", className, backgroundImage }: ServiceCardProps) {
    const Icon = IconMap[iconName] || Truck

    const bgImageAbs = backgroundImage && backgroundImage.startsWith("/")
        ? `${BASE_PATH}${backgroundImage}`
        : backgroundImage

    return (
        <Link
            href={href}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full",
                className
            )}
        >
            {/* Top Image Section - 16/9 Aspect Ratio */}
            <div className="relative w-full aspect-video overflow-hidden">
                {bgImageAbs ? (
                    <NextImage
                        src={bgImageAbs}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                        <Icon className="h-12 w-12 text-slate-300" />
                    </div>
                )}
                {/* Overlay gradient for better text visibility if we put text over image, but here we separate them */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow p-6">
                <div className="mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                </div>

                <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center justify-center px-6 py-3 rounded-[6px] bg-[#333333] text-white text-[12px] font-bold uppercase tracking-[0.5px] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-[3px]">
                        Explore Service
                    </span>
                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <ArrowRight className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
