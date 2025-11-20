"use client";

import { motion } from "framer-motion";
import Button from "./Button";

// --- Main Component: Hero ---
export default function Hero() {
  return (
    <section className="flex-1 flex flex-col justify-center items-center py-20 px-4 sm:px-6 bg-gray-950 text-white relative overflow-hidden">
      
      {/* Inline styles for the animation to ensure it works without global CSS */}
      <style>{`
        @keyframes move-blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>

      {/* Animated Blob 1 - Indigo */}
      <div className="blob" style={{
        animation: 'move-blob 20s infinite alternate',
        backgroundColor: 'rgba(79, 70, 229, 0.15)', // Increased opacity slightly
        width: '500px',
        height: '500px',
        filter: 'blur(120px)',
        borderRadius: '50%',
        position: 'absolute',
        top: '-10%', 
        left: '-10%',
        zIndex: 0,
      }} />

      {/* Animated Blob 2 - Subtle Red/Warmth for contrast */}
      <div className="blob" style={{
        animation: 'move-blob 25s infinite alternate-reverse', 
        backgroundColor: 'rgba(220, 38, 38, 0.1)', 
        width: '450px',
        height: '450px',
        filter: 'blur(120px)',
        borderRadius: '50%',
        position: 'absolute',
        bottom: '-10%', 
        right: '-5%', 
        zIndex: 0,
      }} />

      {/* Content Wrapper - Added z-10 to sit ABOVE blobs */}
      <div className="max-w-4xl text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] font-semibold text-indigo-400 mb-4" 
        >
          Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400"
        >
          Hunter McGraw
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
        >
          Dedicated to engineering innovative software across the entire stack, bridging the gap between rigorous embedded system design and creative, user-centric web development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {/* Primary Action: About Me (High Visibility) */}
          <Button 
            link="/about" 
            name="About Me" 
            className="px-8 py-3.5 text-lg font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 inline-block"
          />
          
          {/* Secondary Actions: Socials (Subtle/Glass effect) */}
          <Button 
            link="https://github.com/huntermcgraw" 
            name="GitHub" 
            className="px-8 py-3.5 text-lg font-medium bg-gray-900/50 border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white rounded-full backdrop-blur-sm transition-all hover:scale-105 inline-block"
          />
          <Button 
            link="https://www.linkedin.com/in/hunter-mcgraw1" 
            name="LinkedIn" 
            className="px-8 py-3.5 text-lg font-medium bg-gray-900/50 border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white rounded-full backdrop-blur-sm transition-all hover:scale-105 inline-block"
          />
        </motion.div>

      </div>
    </section>
  );
}