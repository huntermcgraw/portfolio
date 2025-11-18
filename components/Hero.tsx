"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col justify-center items-center py-20 px-4 sm:px-6 bg-gray-950 text-white relative overflow-hidden">

{/* Animated Blob 1 */}
    <div className="blob" style={{
      animation: 'move-blob 20s infinite alternate',
      backgroundColor: 'rgba(79, 70, 229, 0.1)', 
      width: '500px',
      height: '500px',
      filter: 'blur(150px)',
      borderRadius: '50%',
      position: 'absolute',
      // Start the blob mostly OFF the top-left edge
      top: '-20%', 
      left: '-20%',
      zIndex: 0,
    }} />

    {/* Animated Blob 2 */}
    <div className="blob" style={{
      animation: 'move-blob 25s infinite alternate-reverse', 
      backgroundColor: 'rgba(209, 13, 13, 0.08)', 
      width: '400px',
      height: '400px',
      filter: 'blur(120px)',
      borderRadius: '50%',
      position: 'absolute',
      // Start the blob mostly OFF the bottom-right edge
      bottom: '-15%', 
      right: '-15%', 
      zIndex: 0,
    }} />

      <div className="max-w-4xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-md uppercase tracking-[0.3em] font-medium text-indigo-400" 
        >
          Full-Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white"
        >
          Hunter McGraw
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
        >
          Building **clean, modern web experiences** with C#, React, and Next.js — 
          and experimenting with machine learning and IoT on the Raspberry Pi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <Button 
            link="/about" 
            name="About Me" 
            className="text-lg px-8 py-3 bg-indigo-600 hover:bg-indigo-800 text-white shadow-lg shadow-indigo-500/30 transition duration-300"
          />
          <Button 
            link="https://github.com/huntermcgraw" 
            name="GitHub" 
            className="text-lg px-8 py-3 bg-indigo-600 hover:bg-indigo-800 text-white shadow-lg shadow-indigo-500/30 transition duration-300"
          />
          <Button 
            link="https://www.linkedin.com/in/hunter-mcgraw1" 
            name="LinkedIn" 
            className="text-lg px-8 py-3 bg-indigo-600 hover:bg-indigo-800 text-white shadow-lg shadow-indigo-500/30 transition duration-300"
          />
        </motion.div>

      </div>
    </section>
  );
}