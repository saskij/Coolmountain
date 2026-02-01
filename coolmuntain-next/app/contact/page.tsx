import { HeroSection } from "@/components/sections/HeroSection"
import { Button } from "@/components/ui/Button"
import { COMPANY } from "@/lib/constants"
import { ContactFormSection } from "@/components/contact/ContactFormSection"
import NextImage from "next/image"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Cool Mountain Transport",
    description: "Get in touch with Cool Mountain Transport. Call our dispatch, safety, or recruiting departments, or request a freight quote online.",
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Contact"
                subtitle="Let us know how we can support your freight needs."
                height="medium"
                backgroundImage="/assets/images/header-bg-final-v2.jpg"
            >
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button href={COMPANY.externalLinks.driverApp} size="lg" external>
                        Apply as a Driver
                    </Button>
                    <Button href="/contact" size="lg" variant="outline" className="border-white/80 bg-black/40 text-white hover:bg-white hover:text-slate-900">
                        Request a Freight Quote
                    </Button>
                </div>
                <div className="mt-8 text-xs font-semibold text-white/80 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <span>USDOT #28965</span>
                        <span className="opacity-60">•</span>
                        <span>MC #654322</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-12 w-auto relative">
                            <NextImage
                                src="/assets/images/smartway-logo.png"
                                alt="SmartWay Partner"
                                width={150}
                                height={80}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <span>SmartWay Partner</span>
                    </div>
                </div>
            </HeroSection>

            <ContactFormSection />
        </div>
    )
}
