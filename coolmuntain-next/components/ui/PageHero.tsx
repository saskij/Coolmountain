"use client"

import { Container } from "@/components/ui/Container"
import NextImage, { StaticImageData } from "next/image"
import { Reveal } from "@/components/ui/Reveal"
import { cn, getAssetPath } from "@/lib/utils"

interface PageHeroProps {
    title: string
    subtitle?: string
    backgroundImage: string | StaticImageData
    children?: React.ReactNode
    className?: string
}

export function PageHero({
    title,
    subtitle,
    backgroundImage,
    children,
    className
}: PageHeroProps) {
    const bgImageSrc = typeof backgroundImage === 'string' ? getAssetPath(backgroundImage) : backgroundImage

    return (
        <section
            className={cn(
                "relative flex flex-col justify-center overflow-hidden isolate",
                "min-h-[40vh] lg:min-h-[500px]", // Check if this matches desire
                "pt-32 pb-16", // Spacing for fixed header
                className
            )}
        >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <NextImage
                    src={bgImageSrc}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-center"
                    quality={85}
                />
                {/* Standard Overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <Container className="relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <Reveal direction="up" delay={0.1}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-xl mb-6">
                            {title}
                        </h1>
                    </Reveal>

                    {/* Decorative Line */}
                    <Reveal direction="up" delay={0.2} className="w-full flex justify-center">
                        <div className="h-1.5 w-24 bg-brand-red rounded-full mb-6" />
                    </Reveal>

                    {subtitle && (
                        <Reveal direction="up" delay={0.3}>
                            <p className="text-lg md:text-xl text-zinc-100 font-medium max-w-2xl leading-relaxed drop-shadow-md">
                                {subtitle}
                            </p>
                        </Reveal>
                    )}

                    {children && (
                        <Reveal direction="up" delay={0.4} className="mt-8">
                            {children}
                        </Reveal>
                    )}
                </div>
            </Container>
        </section>
    )
}
