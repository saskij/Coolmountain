import { Container } from "@/components/ui/Container"
import { useEffect, useRef } from "react"
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
    backgroundImage = "/assets/images/new-hero1.png",
    backgroundVideo = "/assets/videos/hero-video.mp4",
    overlay = true,
    className,
    children,
    align = "left", // Force left align visually even if passed center, but keeping prop for compatibility
    height = "large"
}: HeroSectionProps) {

    const heightClasses = {
        full: "min-h-screen",
        large: "min-h-[80vh] lg:min-h-[90vh]", // Homepage style
        medium: "min-h-[50vh] lg:min-h-[60vh]", // Inner page style
        small: "min-h-[30vh] lg:min-h-[40vh]", // Standard Inner page
    }

    // Fix path for GitHub Pages if it's a relative asset path
    const bgImage = backgroundImage.startsWith("/")
        ? `${BASE_PATH}${backgroundImage}`
        : backgroundImage

    const bgVideo = backgroundVideo && backgroundVideo.startsWith("/")
        ? `${BASE_PATH}${backgroundVideo}`
        : backgroundVideo

    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        // Ensure video plays when component mounts/updates
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error)
            })
        }
    }, [backgroundVideo])

    return (
        <section
            className={cn(
                "relative flex flex-col overflow-hidden isolate",
                "justify-center pb-16", // Vertically center content
                // Home (large) gets standard pt-32. Inner pages get pt-48 to push content down from logo.
                height === 'large' ? "pt-32" : "pt-48",
                heightClasses[height],
                className
            )}
        >
            {/* Background Assets */}
            <div className="absolute inset-0 w-full h-full -z-10">
                {/* Background Assets */}
                <div className="absolute inset-0 w-full h-full -z-10">
                    {/* Always render the static image as a base layer to prevent flashes during video loop */}
                    <NextImage
                        src={bgImage}
                        alt={title}
                        fill
                        priority
                        className="object-cover object-[65%_center] xl:object-center"
                        quality={90}
                    />

                    {bgVideo && (
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full object-cover"
                            // poster is redundant if we have the image behind, but kept for compatibility
                            poster={bgImage}
                        >
                            <source src={bgVideo} type="video/mp4" />
                        </video>
                    )}

                    {/* Overlay - Variant A uses bg-black/40 */}
                    {overlay && (
                        <div className="absolute inset-0 bg-black/40" />
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
