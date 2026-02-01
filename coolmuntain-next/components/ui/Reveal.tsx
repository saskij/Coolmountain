"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "left" | "right" | "fade"
    duration?: number
    width?: "fit-content" | "100%"
}

export function Reveal({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.8,
    width = "100%"
}: RevealProps) {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const checkMobile = () => {
            // User requested static for mobile AND tablet. 1024px is a safe bet for tablets (iPad Pro portrait is 1024, standard iPad 768).
            setIsMobileOrTablet(window.innerWidth < 1024)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    if (!isMounted) {
        // Prevent hydration mismatch by rendering a static placeholder initially or nothing.
        // Rendering children statically is safest for SEO and LCP.
        return <div className={cn("w-full relative", className)} style={{ width }}>{children}</div>
    }

    // STATIC MODE: Mobile & Tablet
    if (isMobileOrTablet) {
        return (
            <div className={cn("w-full relative", className)} style={{ width }}>
                {children}
            </div>
        )
    }

    // DESKTOP MODE: Immediate Animation (No Scroll Trigger)
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 30 : 0,
            x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay: delay, // User might still want staggered delays on desktop
                ease: [0.4, 0, 0.2, 1] as const,
            },
        },
    }

    return (
        <div style={{ width, position: "relative" }} className={className}>
            <motion.div
                initial="hidden"
                animate="visible" // Immediate animation on mount!
                variants={variants}
                className="w-full"
            >
                {children}
            </motion.div>
        </div>
    )
}
