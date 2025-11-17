"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col justify-center items-center px-6 bg-black text-green-400 font-mono">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg"
        >
          $ whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-6xl font-bold mt-2"
        >
          <span className="text-green-300">Hunter McGraw</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-xl text-green-200"
        >
          Full-Stack Developer • Linux Enthusiast • C# / React / Next.js
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 space-x-4"
        >
          <Button link="/about" name="./about_me" />
          <Button link="https://github.com/huntermcgraw" name="./github" />
          <Button link="https://www.linkedin.com/in/hunter-mcgraw1" name="./linkedin" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-green-500"
        >
          <span className="opacity-70"># portfolio root directory</span>
        </motion.div>
      </div>
    </section>
  );
}
