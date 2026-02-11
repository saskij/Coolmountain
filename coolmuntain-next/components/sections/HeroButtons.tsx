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
                size="md"
                external
                className="w-[250px] sm:w-[260px] bg-blue-600 hover:bg-blue-700 text-white border-none shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
                Apply as a Driver
            </Button>
            <Button
                href="/contact"
                size="md"
                variant="outline"
                className="w-[250px] sm:w-[260px] border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
                Request a Freight Quote
            </Button>
        </div>
    )
}
