"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Facebook, Linkedin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn, getAssetPath } from "@/lib/utils"

import { NAV_LINKS, COMPANY, BASE_PATH } from "@/lib/constants"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    const pathname = usePathname()

    // Normalize pathname by removing BASE_PATH prefix and trailing slashes
    const normalizedPathname = (() => {
        let path = pathname?.startsWith(BASE_PATH)
            ? pathname.slice(BASE_PATH.length)
            : pathname
        // Remove trailing slash unless it's the root path
        if (path && path !== "/" && path.endsWith("/")) {
            path = path.slice(0, -1)
        }
        return path || "/"
    })()

    // Helper function to check if a page is active
    const isActivePage = (href: string) => {
        if (href === "/") {
            return normalizedPathname === "/"
        }
        return normalizedPathname === href
    }

    // Handle logo click behavior
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (normalizedPathname === "/") {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        // Check initial scroll
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setTimeout(() => {
            setIsOpen(false)
            setMobileServicesOpen(false)
        }, 0)
    }, [pathname])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    // Filter links for split navigation
    const leftNavLinks = NAV_LINKS.filter(link => ["Home", "About", "Services", "Join Our Team"].includes(link.label))
    const rightNavLinks = NAV_LINKS.filter(link => ["Equipment", "News", "Contact"].includes(link.label))

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 glass-header items-center flex h-20",
                    scrolled ? "scrolled shadow-sm bg-white/90 backdrop-blur-md" : ""
                )}
            >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between w-full relative">

                    {/* Left Column - Nav Links (Desktop) */}
                    <div className="flex-1 flex justify-start items-center">

                        <nav className="hidden lg:flex items-center gap-x-6">
                            {leftNavLinks.map((link) => {
                                if (link.children) {
                                    return (
                                        <div key={link.label} className="relative group">
                                            <button className={cn(
                                                "text-sm font-medium transition-all duration-300 flex items-center gap-1",
                                                normalizedPathname?.startsWith(link.href) ? "text-[#cc2016]" : "text-slate-700 hover:text-[#cc2016]"
                                            )}>
                                                {link.label}
                                            </button>
                                            <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 bg-white shadow-xl rounded-xl p-2 border border-slate-100 min-w-[200px] z-[1000]">
                                                {link.children?.map(child => (
                                                    <Link key={child.href} href={child.href} className={cn(
                                                        "block px-4 py-3 hover:bg-slate-50 rounded-lg hover:text-[#cc2016] transition-all duration-300 font-semibold text-[13px] border-l-4",
                                                        isActivePage(child.href) ? "text-[#cc2016] bg-red-50 border-[#cc2016] pl-6" : "text-slate-600 border-transparent hover:pl-6"
                                                    )}>
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
                                            "text-sm font-medium transition-all duration-300 relative py-1",
                                            isActivePage(link.href)
                                                ? "text-[#cc2016]"
                                                : "text-slate-700 hover:text-[#cc2016]"
                                        )}
                                    >
                                        {link.label}
                                        {isActivePage(link.href) && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#cc2016]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    {/* Center Column - Logo */}
                    <div
                        className="flex-none flex flex-col items-center justify-center absolute left-1/2 bg-transparent top-3 transition-all duration-500 ease-in-out z-50 pointer-events-none"
                        style={{
                            transform: isMobile
                                ? "translateX(-50%) scale(1) translateY(0)"
                                : (scrolled ? "translateX(-50%) scale(0.7) translateY(-48px)" : "translateX(-50%) scale(1) translateY(0)")
                        }}
                    >
                        <span className={cn(
                            "text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 whitespace-nowrap hidden lg:block relative z-50 transition-all duration-300",
                            scrolled ? "opacity-0 scale-75" : "opacity-100 scale-100"
                        )}>
                            Visit Logistics Portal
                        </span>
                        <a
                            href={COMPANY.externalLinks.brokerPortal}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center relative pointer-events-auto"
                        >
                            <div className="relative">
                                <NextImage
                                    src={getAssetPath("/assets/images/Cool Mountain Logistics.png")}
                                    alt={COMPANY.name}
                                    width={240}
                                    height={240}
                                    priority
                                    className="w-auto h-[85px] sm:h-[100px] lg:w-[240px] lg:h-auto drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Right Column - Nav Links (Desktop) / Hamburger (Mobile) */}
                    <div className="flex-1 flex justify-end items-center">
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-red-700 shadow-sm hover:scale-95 transition-transform"
                            >
                                <div className="relative w-5 h-5">
                                    <Menu className="w-5 h-5" strokeWidth={2.5} />
                                </div>
                            </button>
                        </div>

                        <nav className="hidden lg:flex items-center gap-x-6">
                            {rightNavLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-all duration-300 relative py-1",
                                        isActivePage(link.href)
                                            ? "text-[#cc2016]"
                                            : "text-slate-700 hover:text-[#cc2016]"
                                    )}
                                >
                                    {link.label}
                                    {isActivePage(link.href) && (
                                        <motion.div
                                            layoutId="activeTabRight"
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#cc2016]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>
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
                            className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed inset-y-0 left-0 z-[200] w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col h-full border-r border-slate-100"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-slate-100">
                                <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 -mr-2 text-slate-400 hover:text-red-600 transition hover:rotate-90 duration-300 rounded-full hover:bg-slate-50"
                                >
                                    <X className="w-8 h-8" strokeWidth={2} />
                                </button>
                            </div>

                            <div className="flex-grow overflow-y-auto px-6 py-6">
                                <nav className="flex flex-col space-y-2">
                                    {NAV_LINKS.map((link) => {
                                        if (link.children) {
                                            const isChildActive = normalizedPathname?.startsWith(link.href)
                                            return (
                                                <div key={link.label} className="border-b border-slate-50">
                                                    <button
                                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                        className={cn(
                                                            "flex items-center justify-between w-full text-xl font-bold py-3 transition-colors duration-300",
                                                            isChildActive ? "text-[#cc2016] bg-red-50 pl-2" : "text-slate-800 hover:text-[#cc2016]"
                                                        )}
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
                                                                <div className="pl-4 pb-3 space-y-1">
                                                                    {link.children.map(child => (
                                                                        <Link
                                                                            key={child.href}
                                                                            href={child.href}
                                                                            onClick={() => setIsOpen(false)}
                                                                            className={cn(
                                                                                "block text-lg font-semibold py-2 border-l-2 pl-4 transition-all duration-300",
                                                                                isActivePage(child.href)
                                                                                    ? "text-[#cc2016] border-[#cc2016] bg-red-50"
                                                                                    : "text-slate-600 border-slate-200 hover:text-[#cc2016] hover:border-[#cc2016]"
                                                                            )}
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
                                                className={cn(
                                                    "text-xl font-bold transition-colors duration-300 py-3 border-b border-slate-50 block",
                                                    isActivePage(link.href)
                                                        ? "text-[#cc2016] bg-red-50 pl-2"
                                                        : "text-slate-800 hover:text-[#cc2016]"
                                                )}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        )
                                    })}
                                </nav>

                                <div className="mt-10 flex flex-col gap-4">
                                    <a
                                        href={COMPANY.externalLinks.driverApp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-auto px-8 h-12 rounded-full bg-brand-red text-sm font-bold uppercase tracking-widest text-white hover:bg-brand-red-hover transition shadow-lg active:scale-95"
                                    >
                                        Apply as a Driver
                                    </a>
                                </div>

                                <div className="mt-10 pt-6 border-t border-slate-100">
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Connect With Us</p>
                                    <div className="flex gap-6">
                                        <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition transform hover:scale-110">
                                            <Facebook className="h-8 w-8" strokeWidth={1.5} />
                                        </a>
                                        <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition transform hover:scale-110">
                                            <Linkedin className="h-8 w-8" strokeWidth={1.5} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
