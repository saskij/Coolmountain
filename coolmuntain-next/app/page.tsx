import { Metadata } from "next"
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
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { FAQ } from "@/components/sections/FAQ"
import Link from "next/link"
import NextImage from "next/image"

export const metadata: Metadata = {
  title: "Home",
  description: "Cool Mountain Transport is your strategic partner in logistics. Based in Nampa, Idaho, we provide nationwide dry van, refrigerated, and expedited freight services with modern equipment and professional drivers. MC# 879475 | USDOT 2414797.",
  openGraph: {
    title: "Cool Mountain Transport | Strategic Logistics Partner",
    description: "Nationwide freight services from Nampa, Idaho. Modern fleet, professional drivers, on-time delivery.",
    images: [`${BASE_PATH}/assets/images/homepage-hero.jpg`],
  },
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
      <section className="py-28 bg-slate-50">
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
                  overlayOpacity={service.overlayOpacity}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 bg-white">
        <Container>
          <div className="mb-12">
            <Reveal direction="up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-slate-900">
                  Why Choose Cool Mountain
                </h2>
                <div className="mt-2 h-1 w-20 bg-brand-blue rounded-full" />
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.1}>
            <WhyChooseUs />
          </Reveal>
        </Container>
      </section>

      {/* About / Mission Section */}
      <section className="relative overflow-hidden bg-white pt-28 pb-28">
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

                  {/* Trust Bar - Professional Certification Display */}
                  <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-lg">
                    <span className="text-[0.9rem] font-medium text-slate-700">Nampa, Idaho</span>
                    <span className="text-slate-400">|</span>
                    <span className="text-[0.9rem] font-medium text-slate-700">MC# 879475</span>
                    <span className="text-slate-400">|</span>
                    <span className="text-[0.9rem] font-medium text-slate-700">USDOT 2414797</span>
                  </div>

                  <div className="mt-4 h-1 w-40 bg-gradient-to-r from-slate-900 to-transparent"></div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <h3 className="text-2xl font-extrabold uppercase text-slate-900 mb-6">
                  Strategic Logistics. Modern Fleet. Uncompromising Reliability.
                </h3>

                <div className="text-base text-slate-700 space-y-4" style={{ lineHeight: '1.8' }}>
                  <p>
                    Cool Mountain Transport is more than just a carrier; we are your <span className="font-semibold text-brand-blue">strategic partner</span> in the heart of the Pacific Northwest. Based in <span className="font-semibold text-brand-blue">Nampa, Idaho</span>, we combine the reach of a national logistics provider with the personalized service of a dedicated local team.
                  </p>

                  <p>
                    Our success is built on a commitment to safety, an elite fleet of late-model equipment, and a team of professional drivers who treat every load with the care it deserves. From refrigerated logistics to standard nationwide freight, we leverage cutting-edge technology to ensure your business stays moving forward—<span className="font-semibold text-brand-blue">on time, every time</span>.
                  </p>
                </div>
              </Reveal>


              <Reveal direction="up" delay={0.3}>
                <div className="pt-2">
                  <Button href="/contact" variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    Contact Us for More Information
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Image & Mission Column: col-span-7 */}
            <div className="xl:col-span-7 flex flex-col justify-center lg:justify-end space-y-6 lg:-translate-y-6">
              <Reveal direction="left" delay={0.2}>
                <blockquote className="relative rounded-lg border-l-4 border-brand-red bg-slate-50 p-6 pl-8">
                  <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
                    Mission Statement
                  </p>
                  <p className="text-slate-700 leading-relaxed italic">
                    To deliver outstanding transportation services, provide
                    exceptional customer service, improve technology, and create
                    business efficiencies that promote long-term customer stability,
                    longevity and prosperity.
                  </p>
                </blockquote>
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

      {/* FAQ Section */}
      <section className="py-28 bg-white">
        <Container>
          <div className="mb-12">
            <Reveal direction="up">
              <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know about working with us." />
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.1}>
            <FAQ />
          </Reveal>
        </Container>
      </section>

      {/* Find Us Section */}
      <section className="py-28 bg-slate-50">
        <Container>
          {/* Headers - Left Aligned */}
          <div className="mb-16">
            <Reveal direction="up">
              <SectionTitle title="Find Us" subtitle="Visit our headquarters in the heart of Idaho." />
            </Reveal>
          </div>

          {/* Content Grid */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] items-stretch gap-8">
              {/* Left Column - Address & Directions */}
              <Reveal direction="up" delay={0.1}>
                <div className="flex flex-col justify-center space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Headquarters</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      1428 Madison Avenue<br />
                      Nampa, Idaho 83687
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1428+Madison+Avenue+Nampa+Idaho+83687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg shadow-md hover:bg-brand-red-hover transition-all hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    GET DIRECTIONS
                  </a>
                </div>
              </Reveal>

              {/* Right Column - Google Maps Embed (Full Width, Height Matched) */}
              <Reveal direction="up" delay={0.2}>
                <div className="h-full min-h-[350px] lg:min-h-0">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.0446!2d-116.5638!3d43.5808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae554e8b00000%3A0x0!2s1428%20Madison%20Ave%2C%20Nampa%2C%20ID%2083686!5e0!3m2!1sen!2sus!4v1234567890"
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Cool Mountain Transport Location"
                    ></iframe>
                  </div>
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
