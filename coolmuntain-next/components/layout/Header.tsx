"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Facebook, Linkedin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

import { NAV_LINKS, COMPANY, BASE_PATH } from "@/lib/constants"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
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
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        // Check initial scroll
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
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

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 glass-header",
                    scrolled ? "scrolled shadow-sm h-[72px]" : "h-[80px] lg:h-[92px]"
                )}
            >
                <div className="mx-auto flex h-full items-center justify-between px-4 lg:px-[7vw]">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <Link href="/" onClick={handleLogoClick} className="relative z-50 group">
                            <div className="w-[110px] sm:w-[130px] lg:w-[160px] h-1" /> {/* Spacer to reserve width */}
                            <NextImage
                                src={`${BASE_PATH}/assets/images/logo-transparent.png`}
                                alt={COMPANY.name}
                                width={180}
                                height={180}
                                className={cn(
                                    "absolute top-[-20px] left-0 w-auto max-w-none transition-all duration-300 drop-shadow-md group-hover:scale-105",
                                    scrolled
                                        ? "h-[90px] lg:h-[110px] top-[-10px]"
                                        : "h-[100px] sm:h-[120px] lg:h-[150px] top-[-10px] lg:top-[-20px]"
                                )}
                            />
                        </Link>
                        <Link href="/" onClick={handleLogoClick} className="flex flex-col items-start gap-[1px] group pl-2">
                            <div className="text-[18px] font-extrabold text-slate-900 uppercase leading-none tracking-[0.02em] group-hover:text-red-700 transition-colors">
                                COOL MOUNTAIN
                            </div>
                            <div className="text-[11px] font-semibold text-slate-500 uppercase leading-none tracking-[0.15em] group-hover:text-red-600 transition-colors">
                                TRANSPORT
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="ml-auto flex items-center gap-2 md:gap-4">
                        {/* Social Icons - Hidden on small screens, visible on XL */}
                        <div className="hidden xl:flex items-center gap-3 mr-6">
                            <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-red-700 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M13.5 9H15V6.5c0-.7.1-1 .9-1H18V3h-2.5C12.9 3 12 4.5 12 6.7V9H10v2.5h2V21h2.5v-9.5H17L17.5 9h-3z" />
                                </svg>
                            </a>
                            <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-red-700 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3zM8.3 18H5.7V9.7h2.6V18zm-1.3-9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.5 18h-2.6v-4.1c0-1-.3-1.6-1.2-1.6-.7 0-1 .5-1.2 1-.1.2-.1.5-.1.8V18h-2.6s.1-6.9 0-8.3h2.6v1.2c.3-.5.9-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5V18z" />
                                </svg>
                            </a>
                        </div>

                        {/* Nav Links */}
                        <nav className="hidden xl:flex items-center gap-4 px-1 py-1 text-[13px] font-medium text-slate-700">
                            {NAV_LINKS.map((link) => {
                                if (link.children) {
                                    return (
                                        <div key={link.label} className="relative group">
                                            <button className={cn(
                                                "px-2 py-2 transition-colors hover:text-red-700 flex items-center gap-1 relative",
                                                normalizedPathname?.startsWith(link.href) && "text-brand-blue font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-blue after:rounded-full"
                                            )}>
                                                {link.label}
                                            </button>
                                            {/* Dropdown */}
                                            <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 bg-white shadow-xl rounded-xl p-2 border border-slate-100 min-w-[200px] z-[1000]">
                                                {link.children.map(child => (
                                                    <Link key={child.href} href={child.href} className={cn(
                                                        "block px-4 py-3 hover:bg-slate-50 rounded-lg hover:text-red-700 transition font-semibold text-[13px] border-l-4 hover:border-red-700 hover:pl-6",
                                                        isActivePage(child.href) ? "text-brand-blue bg-blue-50 border-brand-blue pl-6" : "text-slate-600 border-transparent"
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
                                            "transition-colors hover:text-red-700 relative py-2 px-2",
                                            isActivePage(link.href) && "text-brand-blue font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-blue after:rounded-full"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <div className="xl:hidden">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-red-700 shadow-sm hover:scale-95 transition-transform"
                            >
                                <div className="relative w-5 h-5">
                                    <motion.div
                                        initial={false}
                                        animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0"
                                    >
                                        <Menu className="w-5 h-5" strokeWidth={2.5} />
                                    </motion.div>
                                    <motion.div
                                        initial={false}
                                        animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -180 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0"
                                    >
                                        <X className="w-5 h-5" strokeWidth={2.5} />
                                    </motion.div>
                                </div>
                            </button>
                        </div>
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
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed inset-y-0 right-0 z-[200] w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col h-full border-l border-slate-100"
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
                                            return (
                                                <div key={link.label} className="border-b border-slate-50">
                                                    <button
                                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                        className={cn(
                                                            "flex items-center justify-between w-full text-xl font-bold py-3 hover:text-red-700 transition",
                                                            normalizedPathname?.startsWith(link.href) ? "text-brand-blue bg-blue-50 pl-2" : "text-slate-800"
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
                                                                                "block text-lg font-semibold py-2 border-l-2 pl-4 transition",
                                                                                isActivePage(child.href)
                                                                                    ? "text-brand-blue border-brand-blue bg-blue-50"
                                                                                    : "text-slate-600 border-slate-200 hover:text-red-700 hover:border-red-600"
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
                                                    "text-xl font-bold transition py-3 border-b border-slate-50 block",
                                                    isActivePage(link.href)
                                                        ? "text-brand-blue bg-blue-50 pl-2"
                                                        : "text-slate-800 hover:text-red-700"
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
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center w-auto px-8 h-12 rounded-full border-2 border-slate-900 bg-transparent text-sm font-bold uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition active:scale-95"
                                    >
                                        Freight Quote
                                    </Link>
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
