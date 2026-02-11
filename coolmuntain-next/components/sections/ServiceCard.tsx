import Link from "next/link"
import NextImage from "next/image"
import { Truck, Thermometer, Zap, ArrowRight, ChevronRight } from "lucide-react"
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
    backgroundImage?: string
    overlayOpacity?: number // 0-100, default 80
}

export function ServiceCard({ title, description, href, iconName = "Truck", className, backgroundImage, overlayOpacity = 80 }: ServiceCardProps) {
    const Icon = IconMap[iconName] || Truck

    // NextImage handles basePath automatically
    // const bgImageAbs = backgroundImage && backgroundImage.startsWith("/")
    //     ? `${BASE_PATH}${backgroundImage}`
    //     : backgroundImage

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
                {backgroundImage ? (
                    <NextImage
                        src={backgroundImage || ""}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                        <Icon className="h-12 w-12 text-slate-300" />
                    </div>
                )}
                {/* Overlay gradient for better consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/10" style={{ opacity: overlayOpacity / 100 }} />
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow p-6">
                <div className="mb-4">
                    <div className="relative w-14 h-14">
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
                            <Icon className="h-7 w-7 text-brand-red" strokeWidth={2} />
                        </div>
                    </div>
                </div>

                <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center justify-center px-6 py-3 rounded-[6px] border-2 border-brand-blue bg-transparent text-brand-blue text-[12px] font-bold uppercase tracking-[0.5px] transition-all duration-300 hover:bg-brand-blue hover:text-white hover:border-brand-blue">
                        Explore Service
                    </span>
                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                        <ArrowRight className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
