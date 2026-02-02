import { Button } from "@/components/ui/Button"
import { COMPANY } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface HeroButtonsProps {
    className?: string
}

export function HeroButtons({ className }: HeroButtonsProps) {
    return (
        <div className={cn("flex flex-col sm:flex-row gap-4 items-start w-fit", className)}>
            <Button
                href={COMPANY.externalLinks.driverApp}
                size="lg"
                external
                className="w-[260px] sm:w-[260px] sm:!justify-center"
            >
                Apply as a Driver
            </Button>
            <Button
                href="/contact"
                size="lg"
                variant="outline"
                className="w-[260px] sm:w-[260px] sm:!justify-center border-white/80 bg-black/40 text-white hover:bg-white hover:text-slate-900"
            >
                Request a Freight Quote
            </Button>
        </div>
    )
}
