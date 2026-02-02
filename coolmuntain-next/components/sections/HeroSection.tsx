import { Container } from "@/components/ui/Container"
import NextImage from "next/image"
import { Reveal } from "@/components/ui/Reveal"
import { BASE_PATH } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
    title: string
    subtitle?: string
    backgroundImage?: string
    overlay?: boolean
    className?: string
    children?: React.ReactNode // For Grid layout or specific content
    align?: "left" | "center"
    height?: "full" | "large" | "medium" | "small"
}

export function HeroSection({
    title,
    subtitle,
    backgroundImage = "/assets/images/header-bg-final-v2.jpg",
    overlay = true,
    className,
    children,
    align = "left",
    height = "large"
}: HeroSectionProps) {

    const heightClasses = {
        full: "min-h-screen",
        large: "min-h-[80vh] lg:min-h-[90vh]", // Homepage style
        medium: "min-h-[50vh] lg:min-h-[60vh]", // Inner page style?
        small: "min-h-[30vh] lg:min-h-[40vh]", // Standard Inner page
    }

    // Fix path for GitHub Pages if it's a relative asset path
    const bgImage = backgroundImage.startsWith("/")
        ? `${BASE_PATH}${backgroundImage}`
        : backgroundImage

    return (
        <section
            className={cn(
                "relative flex flex-col justify-end overflow-hidden pb-16 pt-32",
                heightClasses[height],
                className
            )}
        >
            {/* Background Image using Next/Image */}
            <NextImage
                src={bgImage}
                alt={title}
                fill
                priority
                className="object-cover -z-10"
                quality={90}
            />
            {/* Overlay */}
            {overlay && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, rgba(5,15,30,0.5), rgba(5,15,30,0.25), rgba(5,15,30,0))'
                    }}
                />
            )}

            <Container className="relative z-10 w-full">
                <div
                    className={cn("max-w-[800px]", align === "center" && "mx-auto text-center")}
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.55)' }}
                >
                    <Reveal delay={0.1} direction="up" className="reveal-immediately">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                            {title}
                        </h1>
                    </Reveal>

                    {subtitle && (
                        <Reveal delay={0.2} direction="up">
                            <p className="mt-6 text-lg font-medium leading-relaxed text-white/90 sm:text-xl max-w-2xl">
                                {subtitle}
                            </p>
                        </Reveal>
                    )}

                    {children && (
                        <Reveal delay={0.3} direction="up">
                            <div className="mt-10">
                                {children}
                            </div>
                        </Reveal>
                    )}
                </div>
            </Container>
        </section>
    )
}
