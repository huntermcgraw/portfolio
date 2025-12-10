"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import ThemeChanger from "./LightDarkToggle";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
    ];

    // Helper to close menu when a link is clicked
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Header: z-[100] ensures it sits above Hero blobs (which are z-0 or z-10) */}
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-[100] flex h-20 items-center justify-between px-6 sm:px-12 bg-[var(--background)]/80 text-[var(--foreground)] backdrop-blur-md border-b border-gray-900/10 dark:order-white/10"
            >
                {/* Logo Area */}
                <Link 
                    href="/" 
                    className="text-2xl font-bold tracking-tight hover:text-[var(--special)] transition-colors relative z-[110]"
                    onClick={handleLinkClick}
                >
                    Hunter<span className="text-[var(--special)]">.</span>
                </Link>

                {/* Desktop Navigation (Hidden on Mobile) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.href} 
                            className="text-sm font-medium  hover:text-[var(--foreground)] hover:underline decoration-[var(--special)] decoration-2 underline-offset-4 transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                    <div className="ml-2">
                        <Button 
                            link="/contact" 
                            name="Contact" 
                            className="px-5 py-2 text-sm bg-[var(--special)] hover:bg-[var(--special-hover)] text-white rounded-full transition-all shadow-lg shadow-[var(--special-hover)]/20 block"
                        />
                    </div>
                    <div className="ml-2">
                        <ThemeChanger />
                    </div>
                </nav>

                {/* Mobile Menu Toggle Button */}
                {/* z-[110] ensures the button is on top of the header background and overlay */}
                <button 
                    className="md:hidden text-gray-300 focus:outline-none z-[110] p-2 cursor-pointer relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        // X Icon (Close) - pointer-events-none ensures the click hits the button, not the SVG
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 pointer-events-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger Icon (Open)
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 pointer-events-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            {/* z-[90] sits JUST below the header but above page content */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[90] bg-gray-950/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col space-y-8 h-screen"
                    >
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="text-2xl font-medium text-gray-300 hover:text-indigo-400 transition-colors border-b border-gray-800 pb-4 block"
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <div onClick={handleLinkClick}>
                             <Button 
                                link="/contact" 
                                name="Contact Me" 
                                className="w-full text-center text-lg px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/20 transition-all block"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}