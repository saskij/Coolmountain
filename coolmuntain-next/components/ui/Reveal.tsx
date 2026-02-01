"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "left" | "right" | "fade"
    duration?: number
    once?: boolean
    width?: "fit-content" | "100%"
}

export function Reveal({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.8,
    once = true,
    width = "100%"
}: RevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, amount: 0, margin: "0px 0px -50px 0px" })
    const mainControls = useAnimation()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        // If mobile, or if desktop comes into view: trigger animation
        // Mobile trigger is instant/forced to avoid "hidden" bug
        if (isMobile || isInView) {
            mainControls.start("visible")
        }
    }, [isInView, isMobile, mainControls])

    // Mobile: force 0 delay. Desktop: use provided delay.
    const activeDelay = isMobile ? 0 : delay

    const variants = {
        hidden: {
            opacity: 0,
            y: isMobile ? 0 : (direction === "up" ? 30 : 0),
            x: isMobile ? 0 : (direction === "left" ? -30 : direction === "right" ? 30 : 0),
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay: activeDelay,
                ease: [0.4, 0, 0.2, 1] as const,
            },
        },
    }

    return (
        <div style={{ width, position: "relative" }} className={className}>
            <motion.div
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={mainControls}
                className="w-full"
            >
                {children}
            </motion.div>
        </div>
    )
}
