"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 500px
            if (window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-8 right-8 z-[50] h-12 w-12 items-center justify-center rounded-full bg-red-500 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-600 lg:h-11 lg:w-11 lg:text-sm",
                isVisible ? "flex opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            )}
            aria-label="Back to top"
        >
            &uarr;
        </button>
    )
}
