"use client";

import Link from "next/link";
import Button from "./Button"; // Keeping your button for the CTA
import { motion } from "framer-motion";

export default function Header() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
    ];

    return (
        // Fixed position to float over the Hero, with z-50 to stay on top
        // bg-gray-950/80 + backdrop-blur-md creates the "frosted glass" effect
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 sm:px-12 bg-gray-950/80 backdrop-blur-md border-b border-white/10"
        >
            {/* Logo Area */}
            <Link href="/" className="text-2xl font-bold tracking-tight hover:text-indigo-400 transition-colors">
                Hunter<span className="text-indigo-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link 
                        key={link.name}
                        href={link.href} 
                        className="text-sm font-medium text-gray-300 hover:text-white hover:underline decoration-indigo-500 decoration-2 underline-offset-4 transition-all"
                    >
                        {link.name}
                    </Link>
                ))}
                
                {/* Call to Action Button */}
                <div className="ml-2">
                    {/* Assuming your Button accepts custom classes to override defaults if needed, 
                        otherwise just use it as is. I made it slightly smaller/sleeker here. */}
                    <Button 
                        link="/contact" 
                        name="Contact" 
                        // If your Button component supports a className prop to override styles:
                        className="px-5 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all shadow-lg shadow-indigo-500/20"
                    />
                </div>
            </nav>

            {/* Mobile Menu Button Placeholder (Simple Hamburger) */}
            <div className="md:hidden text-gray-300">
               {/* You can add a mobile menu toggle logic here later */}
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </motion.header>
    );
}