"use client"

import { useEffect, useRef, useState } from "react"
import NextImage from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { BASE_PATH } from "@/lib/constants"
import { motion, useAnimationControls } from "framer-motion"

// Unique source of truth for logos
const UNIQUE_LOGOS = [
    { name: "Franz", src: `${BASE_PATH}/assets/images/franz-logo.png`, width: 140, height: 50 },
    { name: "Simplot", src: `${BASE_PATH}/assets/images/simplot-logo.png`, width: 110, height: 50 },
    { name: "SmartWay", src: `${BASE_PATH}/assets/images/smartway-logo.png`, width: 100, height: 50 },
]

export function PartnersSection() {
    return (
        <section className="py-16 bg-slate-50 border-b border-slate-100 overflow-hidden">
            <Container>
                <div className="mb-12 text-center">
                    <SectionTitle
                        title="Trusted by Industry Leaders"
                        align="center"
                    />
                </div>

                {/* Marquee Container */}
                <div className="relative flex w-full overflow-hidden mask-fade-sides group">
                    <MarqueeContent />
                </div>
            </Container>
        </section>
    )
}

function MarqueeContent() {
    // We create a "virtual" list that is long enough to cover large screens.
    // Repeating the 3 logos 6 times gives us 18 items, which should be plenty for smooth looping on most screens
    // without manual hardcoding.
    const REPEAT_COUNT = 6
    const marqueeItems = Array(REPEAT_COUNT).fill(UNIQUE_LOGOS).flat()

    // Animation controls
    const controls = useAnimationControls()

    useEffect(() => {
        // Start the animation
        controls.start({
            x: "-50%",
            transition: {
                duration: 40, // Adjust speed (seconds to complete half loop)
                ease: "linear",
                repeat: Infinity,
            }
        })
    }, [controls])

    return (
        <motion.div
            className="flex items-center gap-16 min-w-max px-8"
            animate={controls}
            initial={{ x: 0 }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => controls.start({
                x: "-50%",
                transition: {
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                } // Resume with same settings
            })}
        >
            {/* 
               We render the list TWICE in a single flex container.
               We animate from x:0 to x:-50%. 
               Since the two halves are identical, the jump from -50% back to 0 is seamless.
            */}
            {[...marqueeItems, ...marqueeItems].map((logo, i) => (
                <LogoItem key={`logo-${i}`} logo={logo} />
            ))}
        </motion.div>
    )
}

function LogoItem({ logo }: { logo: typeof UNIQUE_LOGOS[0] }) {
    return (
        <div className="relative h-20 w-auto min-w-[120px] flex items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer">
            <NextImage
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-auto h-full max-h-16 object-contain"
            />
        </div>
    )
}
