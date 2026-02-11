import { Button } from "@/components/ui/Button"
import { COMPANY } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface HeroButtonsProps {
    className?: string
}

export function HeroButtons({ className }: HeroButtonsProps) {
    return (
        <div className={cn("flex flex-col sm:flex-row gap-3 items-start w-fit", className)}>
            <Button
                href={COMPANY.externalLinks.driverApp}
                size="lg"
                external
                className="w-fit sm:w-auto px-8 bg-brand-red hover:bg-brand-red-hover text-white border-none shadow-lg hover:shadow-blue-900/40"
            >
                Apply as a Driver
            </Button>
            <Button
                href="/contact"
                size="lg"
                variant="outline"
                className="w-fit sm:w-auto px-8 border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
                Request a Freight Quote
            </Button>
        </div>
    )
}
