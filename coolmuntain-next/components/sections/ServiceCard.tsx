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
                "group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                className
            )}
        >
            {/* Background Image Overlay - Initially hidden/subtle, becomes visible/clearer on hover */}
            <div className="absolute inset-0 z-0">
                {bgImageAbs && (
                    <NextImage
                        src={bgImageAbs}
                        alt=""
                        fill
                        className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                    />
                )}
                {/* Gradient overlay to ensure text readability when image appears */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90 group-hover:from-white/95 group-hover:via-white/90 group-hover:to-white/80 transition-all duration-500" />
            </div>

            {/* Content Container - z-10 to stay above background */}
            <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="mb-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-slate-900 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-600 group-hover:border-blue-100">
                        <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                </div>

                <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-medium transition-colors group-hover:text-slate-800">
                        {description}
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-slate-200/50 transition-colors">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                        Explore Service
                    </span>
                    <div className="rounded-full bg-slate-50 p-2 text-slate-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
