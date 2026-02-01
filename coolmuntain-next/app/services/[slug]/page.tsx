import { notFound } from "next/navigation"
import { SERVICES } from "@/lib/constants"
import { HeroSection } from "@/components/sections/HeroSection"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/Button"
import { CheckCircle } from "lucide-react"

// Generate static params for all services to enable static export if needed and better performance
export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.id,
    }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps) {
    const { slug } = await params
    const service = SERVICES.find((s) => s.id === slug)

    if (!service) {
        return {
            title: "Service Not Found",
        }
    }

    return {
        title: service.title,
        description: service.description,
        openGraph: {
            title: service.title,
            description: service.description,
            // Could add specific service images here if added to constants
        },
    }
}

interface ServicePageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params
    const service = SERVICES.find((s) => s.id === slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title={service.title}
                subtitle={service.description}
                height="medium"

                backgroundImage="/assets/images/header-bg-final-v2.jpg" // Could make this dynamic per service if images available
            />

            <section className="py-20 bg-slate-50 overflow-hidden relative">
                {/* Decorative elements ported from CSS */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-24 top-10 h-64 w-64 rotate-12 rounded-full bg-slate-100/70" />
                    <div className="absolute left-12 top-24 h-32 w-32 rotate-12 border border-slate-200/70" />
                    <div className="absolute bottom-10 left-1/3 h-40 w-1 rotate-12 bg-red-500/10" />
                </div>

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <Reveal direction="up" priority>
                                <SectionTitle title={service.title} />
                            </Reveal>
                            <Reveal direction="up" delay={0.1}>
                                <p className="text-lg leading-relaxed text-slate-700">
                                    {service.details}
                                </p>
                            </Reveal>
                            <Reveal direction="up" delay={0.2}>
                                <div className="flex gap-4 pt-4">
                                    <Button href="/contact" size="lg">Request a Quote</Button>
                                    <Button href="/contact" variant="outline" size="lg">Talk to Sales</Button>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal direction="left" delay={0.3}>
                            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                    <span className="h-8 w-1 bg-red-600 rounded-full" />
                                    Key Features
                                </h3>
                                <ul className="space-y-4">
                                    {service.features?.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                                            <span className="text-base text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* Common CTA for all services */}
            <section className="py-20 bg-white text-center">
                <Container>
                    <Reveal direction="up">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900">Need specific requirements?</h2>
                            <p className="text-lg text-slate-600">
                                We handle specialized freight projects daily. Contact our dedicated dispatch team to discuss your unique logistics challenges.
                            </p>
                            <Button href="/contact" size="lg" variant="outline">
                                Contact Dispatch
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </section>
        </div>
    )
}
