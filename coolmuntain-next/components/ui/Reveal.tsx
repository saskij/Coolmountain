"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "left" | "right" | "fade"
    duration?: number
    once?: boolean // Trigger only once (default: true)
    priority?: boolean // Force instant reveal on mobile (default: false)
}

export function Reveal({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.8,
    once = true,
    priority = false
}: RevealProps) {
    const ref = useRef(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Mobile optimization: trigger earlier (amount 0) and with a margin offset
    // With whileInView, we pass these directly to the viewport prop.

    // On mobile with priority, force 0 delay. Otherwise use standard delay.
    const activeDelay = (isMobile && priority) ? 0 : delay

    // Define variants for different directions
    const variants = {
        hidden: {
            opacity: 0,
            y: isMobile ? 0 : (direction === "up" ? 30 : 0), // Mobile: Disable Y offset
            x: isMobile ? 0 : (direction === "left" ? -30 : direction === "right" ? 30 : 0), // Mobile: Disable X offset
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay: activeDelay,
                ease: [0.4, 0, 0.2, 1] as const, // cubic-bezier from your CSS
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={variants}
            className={cn("w-full relative", className)}
        >
            {children}
        </motion.div>
    )
}
