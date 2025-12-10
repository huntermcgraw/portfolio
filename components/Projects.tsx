"use client";

import { motion } from "framer-motion";

export default function Projects() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden">
      
      {/* Optional: Subtle background glow matching Hero */}
      <div className="opacity-0 dark:opacity-100 transition-opacity duration-1000 absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      {/* Full width container */}
      <div className="w-full">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // Added 'items-center' and 'text-center'
          className="flex flex-col gap-8 px-6 sm:px-12 md:px-20 lg:px-32 w-full items-center text-center"
        >

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-extrabold text-[var(--special)] tracking-tight"
          >
            Projects
          </motion.h2>

          <motion.div variants={itemVariants} className="text-lg text-[var(--foreground)] leading-relaxed">
            <p>
              Under Development 
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}