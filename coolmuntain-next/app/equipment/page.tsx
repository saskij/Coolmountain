import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/Button"
import { CheckCircle } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export default function EquipmentPage() {
    const features = [
        "Heated and cooled seats (ELITE SEATS!) — comfort in any weather",
        "APU with Arctic package — climate control without idling",
        "Refrigerator — fresh meals on the road",
        "Extra windows — improved visibility and natural light",
        "Foldable double bunks — rest comfortably between runs",
        "Premier mattress — quality sleep for safer driving",
        "Cab curtain — privacy when you need it",
        "TV holder — relax during downtime",
        "1800-watt inverter — power electronics and appliances",
        "Extra work lights — better visibility during night operations",
        "Chrome brush guard — added front-end protection",
        "Advanced dashboard gauges and in-cab tire pressure monitoring"
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Equipment"
                subtitle="Modern, reliable equipment built for performance and safety."
                height="small"
                backgroundImage="/assets/images/header-bg-final-v2.jpg"
            />

            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <Reveal direction="up">
                            <div>
                                <SectionTitle title="Fleet & Technology" />
                                <p className="mt-6 text-lg text-slate-700 leading-relaxed">
                                    We operate a fleet of well-maintained 2020 and 2025 Freightliners, giving drivers reliable,
                                    modern trucks equipped for comfort, safety, and long-haul efficiency.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.1}>
                            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">
                                    Premium Driver Amenities
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                            <span className="text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.2}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                                <Button href={COMPANY.externalLinks.driverApp} external size="lg">
                                    Apply as a Driver
                                </Button>
                                <Button href="/contact" variant="outline" size="lg">
                                    Contact Maintenance
                                </Button>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </div>
    )
}
