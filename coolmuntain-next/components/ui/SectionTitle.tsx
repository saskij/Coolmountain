import { cn } from "@/lib/utils"

interface SectionTitleProps {
    title: React.ReactNode
    subtitle?: string
    className?: string
    align?: "left" | "center"
}

export function SectionTitle({ title, subtitle, className, align = "left" }: SectionTitleProps) {
    return (
        <div className={cn("space-y-2", align === "center" && "text-center", className)}>
            <h2 className="text-3xl font-bold text-slate-900">
                {title}
                {subtitle && <span className="block text-slate-500 font-light mt-1">{subtitle}</span>}
            </h2>
            <div className={cn(
                "mt-2 h-1 w-20 bg-gradient-to-r from-slate-900 to-transparent",
                align === "center" && "mx-auto bg-gradient-to-r from-transparent via-slate-900 to-transparent"
            )} />
        </div>
    )
}
