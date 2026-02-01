"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "left" | "right" | "fade"
    duration?: number
    once?: boolean // Trigger only once (default: true)
}

export function Reveal({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.8,
    once = true
}: RevealProps) {
    const ref = useRef(null)
    // useInView hook handles the intersection observer logic
    const isInView = useInView(ref, { once })

    // Define variants for different directions
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
                delay,
                ease: [0.4, 0, 0.2, 1] as const, // cubic-bezier from your CSS
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn("w-full relative", className)}
        >
            {children}
        </motion.div>
    )
}
