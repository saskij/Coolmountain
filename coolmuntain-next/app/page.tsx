import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Reveal } from "@/components/ui/Reveal"
import { HeroSection } from "@/components/sections/HeroSection"
import { PartnersSection } from "@/components/sections/PartnersSection"
import { CallToAction } from "@/components/sections/CallToAction"
import { HeroButtons } from "@/components/sections/HeroButtons"
import { ServiceCard } from "@/components/sections/ServiceCard"
import { SERVICES, COMPANY, BASE_PATH } from "@/lib/constants"
import Link from "next/link"
import NextImage from "next/image"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cool Mountain Transport | Reliable Freight & Professional Drivers",
  description: "Solving complex logistics problems with modern fleet and safety commitment. Dry van, refrigerated, and expedited freight services across the US.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Reliable Freight. Professional Drivers."
        subtitle="Solving complex logistics problems with a modern fleet and a commitment to safety."
        height="large"


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

      {/* Partners Section */}
      <PartnersSection />

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
                  title={service.shortTitle}
                  description={service.description}
                  href={service.href}
                  backgroundImage={service.backgroundImage}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  iconName={service.icon as any}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* About / Mission Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-5">
          <div className="absolute -right-24 top-10 h-64 w-64 rotate-12 rounded-full bg-slate-900"></div>
          <div className="absolute left-12 top-24 h-32 w-32 rotate-12 border border-slate-900"></div>
        </div>

        <Container>
          <div className="grid xl:grid-cols-12 gap-10 items-start">
            {/* Text Column: col-span-5 */}
            <div className="xl:col-span-5 space-y-6">
              <Reveal direction="up">
                <div>
                  <h2 className="text-3xl font-black uppercase text-slate-900">
                    COOL MOUNTAIN
                    <span className="font-light text-slate-700 block sm:inline sm:ml-2">TRANSPORT</span>
                  </h2>
                  <div className="mt-2 h-1 w-40 bg-gradient-to-r from-slate-900 to-transparent"></div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <p className="text-base leading-relaxed text-slate-700">
                  Cool Mountain Transport offers competitive and innovative national
                  freight services, specialized freight, expedited freight, and
                  dedicated services.
                </p>

                <div className="grid gap-4 sm:grid-cols-3 pt-4">
                  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="text-sm font-semibold">Nampa, Idaho</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="text-sm font-semibold">MC#879475</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="text-sm font-semibold">USDOT 2414797</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p className="text-base leading-relaxed text-slate-700">
                  Cool Mountain Transport values customer relationships and seeks
                  every opportunity to provide professional, well planned and worry-free
                  service. We provide exceptional, consistent and reliable
                  transportation services that meet complex and evolving business
                  needs. Local runs, long distance or even in caves, your unique
                  requirements are our priority. An extensive network of leasing
                  partners provides exceptional flexibility and quick expansion,
                  allowing Cool Mountain Transport to meet demanding schedules and
                  every customer’s high expectations. Devoted, well-trained Cool
                  Mountain Transport drivers are prepared to undertake the most
                  difficult loads. Find out today how Cool Mountain Transport can be a
                  strategic partner in your success!
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="pt-2">
                  <Button href="/contact" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                    Contact Us for More Information
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Image & Mission Column: col-span-7 */}
            <div className="xl:col-span-7 flex flex-col justify-center lg:justify-end space-y-6 lg:-translate-y-6">
              <Reveal direction="left" delay={0.2}>
                <div className="relative rounded-2xl border-l-4 border-red-500 bg-slate-50 p-6">
                  <div className="absolute left-6 top-2 text-5xl text-slate-200">“</div>
                  <p className="text-sm font-semibold text-orange-600">
                    Mission Statement:
                  </p>
                  <p className="mt-2 text-slate-600 leading-relaxed italic font-light">
                    to deliver outstanding transportation services, provide
                    exceptional customer service, improve technology, and create
                    business efficiencies that promote long-term customer stability,
                    longevity and prosperity.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.4}>
                <div className="relative rounded-2xl shadow-lg overflow-hidden group">
                  <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border border-slate-200 bg-slate-50 -z-10"></div>
                  <NextImage
                    src={`${BASE_PATH}/assets/images/home-intro-truck.png`}
                    alt="Cool Mountain truck"
                    width={600}
                    height={400}
                    className="relative w-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action Bar */}
      <CallToAction />
    </div>
  );
}
