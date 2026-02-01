import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Reveal } from "@/components/ui/Reveal"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServiceCard } from "@/components/sections/ServiceCard"
import { SERVICES, COMPANY } from "@/lib/constants"
import Link from "next/link"
import NextImage from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Reliable Freight. Professional Drivers."
        subtitle="Solving complex logistics problems with a modern fleet and a commitment to safety."
        height="large"

        backgroundImage="/assets/images/header-bg-final-v2.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href={COMPANY.externalLinks.driverApp} size="lg" external>
            Apply as a Driver
          </Button>
          <Button href="/contact" size="lg" variant="outline">
            Request a Freight Quote
          </Button>
        </div>
      </HeroSection>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="mb-12">
            <Reveal direction="up">
              <SectionTitle title="Our Services" subtitle="Comprehensive shipping solutions." />
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1} direction="up">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  iconName={service.icon as any}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* About / CTA Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group img-zoom-container">
                {/* Using standard img for now, migrate to Next/Image later */}
                <NextImage
                  src="/assets/images/home-intro-truck.png"
                  alt="Cool Mountain Truck"
                  fill
                  className="img-zoom object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-bold text-lg">Safety First</p>
                  <p className="opacity-90">Our top priority, every mile.</p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal direction="right" delay={0.2}>
                <SectionTitle title="Why Cool Mountain?" />
                <p className="text-lg text-slate-700 leading-relaxed">
                  We are more than just a trucking company; we are your partners in logistics.
                  With a fleet of modern equipment and a team of dedicated professionals,
                  we ensure your freight arrives safely and on time, every time.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "24/7 Dispatch & Support",
                    "Late-model Equipment (Avg 2.5 years)",
                    "Real-time Freight Tracking",
                    "Safety-focused Culture"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">✓</span>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button href="/about" variant="ghost" size="lg" className="pl-0 hover:pl-4">
                    Learn More About Us →
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action Bar */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/header-bg-final.png')] bg-cover bg-center mix-blend-overlay"></div>
        <Container className="relative z-10 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to move your freight?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Contact our dispatch team today for a competitive quote and detailed logistics plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Get a Quote
              </Button>
              <Button href={`tel:${COMPANY.contact.dispatchPhone.replace(/-/g, "")}`} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Call Dispatch: {COMPANY.contact.dispatchPhoneDisplay}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
