import { HeroSection } from "@/components/sections/HeroSection"
import { BASE_PATH } from "@/lib/constants"
import { HeroButtons } from "@/components/sections/HeroButtons"
import { ContactFormSection } from "@/components/contact/ContactFormSection"
import NextImage from "next/image"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Cool Mountain Transport",
    description: "Get in touch with Cool Mountain Transport. Call our dispatch, safety, or recruiting departments, or request a freight quote online.",
    openGraph: {
        title: "Contact Cool Mountain Transport",
        description: "Reach out to our team for freight quotes, employment opportunities, and general inquiries.",
        url: "https://coolmountaintransport.com/contact",
    },
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TransportCompany",
                        name: "Cool Mountain Transport",
                        image: "https://coolmountaintransport.com/Coolmountain/assets/images/logo-transparent.png",
                        telephone: "+1-208-475-2500",
                        url: "https://coolmountaintransport.com/contact",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "1428 Madison Avenue",
                            addressLocality: "Nampa",
                            addressRegion: "ID",
                            postalCode: "83687",
                            addressCountry: "US",
                        },
                        openingHoursSpecification: {
                            "@type": "OpeningHoursSpecification",
                            dayOfWeek: [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                            ],
                            opens: "08:00",
                            closes: "17:00",
                        },
                    }),
                }}
            />
            <HeroSection
                title="Contact"
                subtitle="Let us know how we can support your freight needs."
                height="medium"
                backgroundImage="/assets/images/Contact-hero.jpg"
                backgroundVideo=""
            >
                <HeroButtons className="mt-8" />
                <div className="mt-8 text-xs font-semibold text-white/80 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <span>USDOT #28965</span>
                        <span className="opacity-60">•</span>
                        <span>MC #654322</span>
                    </div>

                </div>
            </HeroSection>

            <ContactFormSection />
        </div>
    )
}
