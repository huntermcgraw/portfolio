"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col justify-center items-center px-6 bg-white text-gray-900">
      <div className="max-w-3xl text-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-wider text-gray-600"
        >
          Software Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl sm:text-6xl font-extrabold mt-3"
        >
          Hunter McGraw
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 text-lg text-gray-600 leading-relaxed"
        >
          Building clean, modern web experiences with C#, React, and Next.js —
          and experimenting with machine learning and IoT on the Raspberry Pi.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button link="/about" name="About Me" />
          <Button link="https://github.com/huntermcgraw" name="GitHub" />
          <Button link="https://www.linkedin.com/in/hunter-mcgraw1" name="LinkedIn" />
        </motion.div>

      </div>
    </section>
  );
}
