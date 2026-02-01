"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { NAV_LINKS, COMPANY } from "@/lib/constants"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    const pathname = usePathname()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
        setMobileServicesOpen(false)
    }, [pathname])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
                    scrolled ? "glass-header shadow-sm h-[72px]" : "bg-transparent h-[80px] lg:h-[92px]"
                )}
            >
                <div className="mx-auto flex h-full items-center justify-between px-4 lg:px-[7vw]">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3">
                            {/* Using standard img tag for logo to avoid Next.js Image complexity with local assets initially, 
                  can upgrade to Image component later. */}
                            <NextImage
                                src="/assets/images/logo-transparent.png"
                                alt={COMPANY.name}
                                width={300}
                                height={80}
                                className={cn(
                                    "h-[50px] w-auto transition-all duration-300",
                                    scrolled ? "lg:h-[60px]" : "lg:h-[80px]" // Dynamic resizing
                                )}
                                priority
                            />
                        </Link>
                        <Link href="/" className="group hidden lg:block">
                            <div className="text-xl font-extrabold leading-none tracking-tight text-slate-900 group-hover:text-red-700 transition-colors">
                                COOL MOUNTAIN
                            </div>
                            <div className="text-xs font-bold tracking-[0.15em] text-slate-500 group-hover:text-red-600 transition-colors">
                                TRANSPORT
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <nav className="flex items-center gap-6 text-[13px] font-medium text-slate-700">
                            {NAV_LINKS.map((link) => {
                                if (link.children) {
                                    return (
                                        <div key={link.label} className="relative group p-2">
                                            <button className="flex items-center gap-1 hover:text-red-700 transition">
                                                {link.label}
                                                {/* Chevron could go here */}
                                            </button>
                                            {/* Dropdown */}
                                            <div className="absolute top-full left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 bg-white shadow-xl rounded-xl p-2 border border-slate-100">
                                                {link.children.map(child => (
                                                    <Link key={child.href} href={child.href} className="block px-4 py-3 hover:bg-slate-50 rounded-lg hover:text-red-700 transition font-semibold">
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "transition-colors hover:text-red-700 relative py-2",
                                            pathname === link.href && "text-red-700 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-700 after:rounded-full"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </nav>
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <a href={COMPANY.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#1877F2] transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 9H15V6.5c0-.7.1-1 .9-1H18V3h-2.5C12.9 3 12 4.5 12 6.7V9H10v2.5h2V21h2.5v-9.5H17L17.5 9h-3z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-red-700 shadow-sm"
                        >
                            <Menu className="w-5 h-5" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-[70] w-full max-w-xs bg-white shadow-2xl flex flex-col h-full border-l border-slate-100"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-slate-100">
                                <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 -mr-2 text-slate-400 hover:text-red-600 transition rounded-full hover:bg-slate-50"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-grow overflow-y-auto p-6">
                                <nav className="flex flex-col space-y-1">
                                    {NAV_LINKS.map((link) => {
                                        if (link.children) {
                                            return (
                                                <div key={link.label} className="border-b border-slate-50">
                                                    <button
                                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                        className="flex items-center justify-between w-full text-xl font-bold text-slate-800 py-3"
                                                    >
                                                        <span>{link.label}</span>
                                                        <ChevronDown className={cn("w-5 h-5 transition-transform", mobileServicesOpen && "rotate-180")} />
                                                    </button>
                                                    <AnimatePresence>
                                                        {mobileServicesOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pl-4 pb-3 space-y-2">
                                                                    {link.children.map(child => (
                                                                        <Link
                                                                            key={child.href}
                                                                            href={child.href}
                                                                            className="block text-lg font-medium text-slate-600 hover:text-red-700 py-2 border-l-2 border-slate-100 pl-4 hover:border-red-600 transition"
                                                                        >
                                                                            {child.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            )
                                        }
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="text-xl font-bold text-slate-800 hover:text-red-700 transition py-3 border-b border-slate-50 block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        )
                                    })}
                                </nav>

                                <div className="mt-8 space-y-4">
                                    <Button href={COMPANY.externalLinks.driverApp} fullWidth external>
                                        Apply as a Driver
                                    </Button>
                                    <Button href="/contact" variant="outline" fullWidth>
                                        Freight Quote
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
