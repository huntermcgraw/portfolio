"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    // Updated background and text color to match the Hero section
    <section className="min-h-screen py-20 px-6 bg-gray-900 text-gray-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Title/Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-10 border-b-2 border-indigo-600/50 pb-2 inline-block"
        >
          About Me
        </motion.h2>

        {/* JSON Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // Lighter dark background for card, subtle indigo border
          className="bg-gray-800 border border-indigo-700/50 p-6 rounded-lg shadow-xl"
        >
          <pre className="whitespace-pre-wrap font-mono text-gray-300">
            {`
            I'm passionate about the intersection of elegant code and modern design. 
          While my professional expertise lies in the **C#/.NET and React/Next.js stack**, 
          I dedicate my free time to exploring hardware projects and AI/ML concepts. 
          Let's build something great together.
            `}
          </pre>
        </motion.div>
        
        {/* Adding a brief prose section below the code for context */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-xl text-gray-400 leading-relaxed"
        >
          
        </motion.p>

      </div>
    </section>
  );
}