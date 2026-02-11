"use client"

import NextImage from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BASE_PATH } from "@/lib/constants"
import { cn } from "@/lib/utils"

// Unique source of truth for logos
const UNIQUE_LOGOS = [
    { name: "Franz", src: `${BASE_PATH}/assets/images/franz-logo.png`, width: 140, height: 50 },
    { name: "Simplot", src: `${BASE_PATH}/assets/images/simplot-logo.png`, width: 110, height: 50 },
    { name: "SmartWay", src: `${BASE_PATH}/assets/images/smartway-logo.png`, width: 100, height: 50 },
]

export function PartnersSection() {
    // Generate a long enough list to fill the screen width comfortably.
    // 3 logos is very short, so we repeat them a few times to create a substantial strip.
    const REPEAT_COUNT = 6
    const seamlessLogos = Array(REPEAT_COUNT).fill(UNIQUE_LOGOS).flat()

    return (
        <section className="py-28 bg-slate-50 border-b border-slate-100 overflow-hidden">
            <Container>
                <div className="mb-12">
                    <SectionTitle
                        title="Trusted by Industry Leaders"
                        subtitle="Partnering for mutual success."
                        align="center"
                    />
                </div>

                {/* 
                  CSS-based Seamless Infinite Marquee 
                  - We have a wrapper that masks the edges (fade effect).
                  - Inside, a track moves left forever.
                  - We have TWO identical sets of logos. 
                  - Animation moves -50% (the width of one set).
                  - When it hits -50%, it snaps back to 0% linearly (instant), creating the loop.
                */}
                <div className="relative w-full max-w-5xl mx-auto overflow-hidden mask-fade-sides group">
                    <div className="flex w-max animate-marquee items-center">
                        {/* First Set */}
                        <div className="flex items-center gap-16 pr-16">
                            {seamlessLogos.map((logo, i) => (
                                <LogoItem key={`set1-${i}`} logo={logo} />
                            ))}
                        </div>
                        {/* Second Set (Duplicate for seamless loop) */}
                        <div className="flex items-center gap-16 pr-16" aria-hidden="true">
                            {seamlessLogos.map((logo, i) => (
                                <LogoItem key={`set2-${i}`} logo={logo} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 80s linear infinite;
                }
                .animate-marquee:has(.logo-item:hover) {
                    animation-play-state: paused;
                }
                .mask-fade-sides {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    )
}

function LogoItem({ logo }: { logo: typeof UNIQUE_LOGOS[0] }) {
    return (
        <div className="logo-item relative h-20 w-auto min-w-[120px] flex items-center justify-center grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer">
            <NextImage
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-auto h-full max-h-14 object-contain"
            />
        </div>
    )
}
