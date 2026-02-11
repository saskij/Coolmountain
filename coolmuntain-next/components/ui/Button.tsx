import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    variant?: "primary" | "outline" | "ghost" | "link"
    size?: "sm" | "md" | "lg"
    fullWidth?: boolean
    external?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", fullWidth, href, external, children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-[6px] font-bold uppercase tracking-[0.5px] transition-all duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none"

        const variants = {
            primary: "bg-[#b91c1c] text-white hover:bg-[#991b1b] shadow-lg hover:-translate-y-0.5",
            outline: "border-2 border-slate-900 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white",
            ghost: "bg-transparent text-slate-700 hover:text-red-700 hover:bg-slate-50",
            link: "text-red-700 hover:underline p-0 h-auto bg-transparent shadow-none tracking-normal normal-case font-medium",
        }

        const sizes = {
            sm: "h-10 px-4 text-[11px]",
            md: "h-12 px-6 text-[12px]",
            lg: "h-10 px-5 text-[11px] md:h-14 md:px-8 md:text-[13px]",
        }

        // Override size for link variant
        const sizeStyle = variant === 'link' ? '' : sizes[size]

        const classes = cn(
            baseStyles,
            variants[variant],
            sizeStyle,
            fullWidth && "w-full",
            className
        )

        if (href) {
            if (external) {
                return (
                    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                        {children}
                    </a>
                )
            }
            return (
                <Link href={href} className={classes}>
                    {children}
                </Link>
            )
        }

        return (
            <button
                ref={ref}
                className={classes}
                {...props}
            >
                {children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button }
