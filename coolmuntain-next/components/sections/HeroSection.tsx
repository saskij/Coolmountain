import { Container } from "@/components/ui/Container"
import NextImage from "next/image"
import { Reveal } from "@/components/ui/Reveal"
import { BASE_PATH } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
    title: string
    subtitle?: string
    backgroundImage?: string
    backgroundVideo?: string
    overlay?: boolean
    className?: string
    children?: React.ReactNode // For Grid layout or specific content
    align?: "left" | "center"
    height?: "full" | "large" | "medium" | "small"
}

export function HeroSection({
    title,
    subtitle,
    backgroundImage = "/assets/images/homepage-hero.jpg",
    backgroundVideo = "/assets/videos/hero-video.mp4",
    overlay = true,
    className,
    children,
    // align = "left", // Force left align visually even if passed center, but keeping prop for compatibility
    height = "large"
}: HeroSectionProps) {

    const heightClasses = {
        full: "min-h-screen",
        large: "min-h-[80vh] lg:min-h-[90vh]", // Homepage style
        medium: "min-h-[50vh] lg:min-h-[60vh]", // Inner page style
        small: "min-h-[30vh] lg:min-h-[40vh]", // Standard Inner page
    }

    // For NextImage, we pass the raw path (without BASE_PATH) because Next.js handles basePath automatically
    // when configured in next.config.js
    // const bgImageForNext = backgroundImage

    // For standard HTML tags (video poster, manual img), we MUST manually prepend BASE_PATH
    // because they don't know about next.config.js configuration
    const bgImageAbs = backgroundImage.startsWith("/")
        ? `${BASE_PATH}${backgroundImage}`
        : backgroundImage

    const bgVideo = backgroundVideo && backgroundVideo.startsWith("/")
        ? `${BASE_PATH}${backgroundVideo}`
        : backgroundVideo

    // Video is disabled on mobile (hidden) and only plays once (no loop)
    // We remove the JS loop logic entirely as requested.

    return (
        <section
            className={cn(
                "relative flex flex-col overflow-hidden isolate transform-gpu backface-hidden",
                "justify-center pb-16", // Vertically center content
                // Home (large) gets standard pt-32. Inner pages get pt-48 to push content down from logo.
                height === 'large' ? "pt-32" : "pt-48",
                heightClasses[height],
                className
            )}
        >
            {/* Background Assets */}
            <div className="absolute inset-0 w-full h-full -z-10">
                {/*
                  1. Static Image (Poster/Fallback)
                  Visible on Mobile (because video is hidden)
                  Visible while video loads
                  Visible after video ends (if it ends on a transparent frame, though usually video stays on last frame)
                */}
                <NextImage
                    src={bgImageAbs}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-[65%_center] xl:object-center"
                    quality={80}
                />

                {bgVideo && (
                    <video
                        autoPlay
                        muted
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover hidden md:block" // Hidden on mobile (<768px)
                        poster={bgImageAbs}
                        aria-label={`Background video: ${title}`}
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                )}

                {/* Overlay - Darker gradient for better text contrast */}
                {overlay && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-900/60" />
                )}
            </div>

            <Container className="relative z-10 w-full flex flex-col justify-center h-full">
                {/* 
                   Variant A Grid Architecture:
                   - Mobile/Tablet: Single column (flex col)
                   - Desktop (xl+): 12-column grid
                */}
                <div className="xl:grid xl:grid-cols-12 xl:gap-10 items-center w-full">

                    {/* Left Content: col-span-5 */}
                    <div className="xl:col-span-5 flex flex-col items-start text-left w-full max-w-[520px]">
                        <Reveal delay={0.1} direction="up" className="reveal-immediately w-full">
                            <h1 className="text-[clamp(36px,3.5vw,72px)] font-extrabold text-white leading-[1.05] tracking-tight">
                                {title}
                            </h1>
                        </Reveal>

                        {subtitle && (
                            <Reveal delay={0.2} direction="up" className="w-full">
                                <p className="mt-6 text-[clamp(15px,1.1vw,18px)] font-medium leading-relaxed text-white/85 max-w-[42ch]">
                                    {subtitle}
                                </p>
                            </Reveal>
                        )}

                        {children && (
                            <Reveal delay={0.3} direction="up" className="w-full">
                                <div className="mt-8">
                                    {children}
                                </div>
                            </Reveal>
                        )}
                    </div>

                    {/* Right Side / Visual Zone: col-span-7 */}
                    <div className="hidden xl:block xl:col-span-7 pointer-events-none" />
                </div>
            </Container>
        </section>
    )
}
