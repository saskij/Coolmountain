"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame, wrap } from "framer-motion"
import NextImage from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BASE_PATH } from "@/lib/constants"

// Duplicate logos to ensure we have enough content for the marquee
const LOGOS = [
    { name: "Franz", src: `${BASE_PATH}/assets/images/franz-logo.png`, width: 150, height: 60 },
    { name: "Simplot", src: `${BASE_PATH}/assets/images/simplot-logo.png`, width: 120, height: 60 },
    { name: "Franz", src: `${BASE_PATH}/assets/images/franz-logo.png`, width: 150, height: 60 },
    { name: "Simplot", src: `${BASE_PATH}/assets/images/simplot-logo.png`, width: 120, height: 60 },
    { name: "Franz", src: `${BASE_PATH}/assets/images/franz-logo.png`, width: 150, height: 60 },
    { name: "Simplot", src: `${BASE_PATH}/assets/images/simplot-logo.png`, width: 120, height: 60 },
    { name: "Franz", src: `${BASE_PATH}/assets/images/franz-logo.png`, width: 150, height: 60 },
    { name: "Simplot", src: `${BASE_PATH}/assets/images/simplot-logo.png`, width: 120, height: 60 },
]

export function PartnersSection() {
    return (
        <section className="py-16 bg-slate-50 border-b border-slate-100 overflow-hidden">
            <Container>
                <div className="mb-10 text-center">
                    <SectionTitle
                        title="Trusted by Industry Leaders"
                        align="center"
                        className="mb-8"
                    />
                </div>

                {/* Marquee Container */}
                <div className="relative flex w-full overflow-hidden mask-fade-sides group">
                    {/* 
             We need two sets of logos for seamless looping.
             We'll animate the x position from 0% to -100% (or similar).
             Using a simple CSS animation or Framer Motion loop for this.
          */}
                    <MarqueeContent />
                </div>
            </Container>
        </section>
    )
}

function MarqueeContent() {
    return (
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* First Copy */}
            <div className="flex items-center gap-16 px-8">
                {LOGOS.map((logo, i) => (
                    <LogoItem key={`logo-1-${i}`} logo={logo} />
                ))}
            </div>
            {/* Second Copy for seamless loop */}
            <div className="flex items-center gap-16 px-8">
                {LOGOS.map((logo, i) => (
                    <LogoItem key={`logo-2-${i}`} logo={logo} />
                ))}
            </div>
        </div>
    )
}

function LogoItem({ logo }: { logo: typeof LOGOS[0] }) {
    return (
        <div className="relative h-16 w-auto min-w-[100px] flex items-center justify-center grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer">
            <NextImage
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-auto h-full max-h-12 object-contain"
            />
        </div>
    )
}
