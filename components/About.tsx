"use client";

import { motion } from "framer-motion";

export default function About() {
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

  const skills = [
    "Python", "C", "C# / .NET", "React", "Next.js", "TypeScript",
    "Machine Learning", "Git"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-950 text-gray-200 relative overflow-hidden">

      {/* Optional: Subtle background glow matching Hero */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT COLUMN: The Narrative (Human Side) */}
          <div className="space-y-8">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
              About <span className="text-indigo-500">Me</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                I'm a Software Engineer dedicated to building software that is both fast and beautiful.
              </p>
              <p>
                My work is defined by a love for innovative problem-solving, whether I am crafting creative web applications or diving deep into low-level code.
                I hold a minor in Computer Engineering and find a unique synergy between these two worlds.
              </p>
              <h3 className="text-xl font-bold text-white mb-4">
                Technical Focus
              </h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong className="text-indigo-500">Web Development:</strong> I thrive on projects that challenge my creativity, focusing on system design that results in a user-friendly final product.
                </li>
                <li>
                  <strong className="text-indigo-500">Application Development:</strong> Whether it's C# for robust desktop apps or Python for rapid automation, I enjoy the versatility of building software that solves real-world problems efficiently.
                </li>
                <li>
                  <strong className="text-indigo-500">Embedded Systems:</strong> From microcontrollers to SolidWorks CAD, I love the tangible nature of engineering.
                  I find the rigorous system design required for embedded projects mirrors the architecture needed for great full-stack web development.
                </li>
                <li>
                  <strong className="text-indigo-500">The Workspace:</strong> I am a Linux enthusiast currently running Manjaro with KDE Plasma.
                </li>
              </ul>
              <p>
                When I'm not coding or tinkering with hardware, you can find me running,
                cycling, or <del>dominating</del>
                <span> losing</span> at local trivia nights.
              </p>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Code (Machine Side) */}
          <motion.div variants={itemVariants} className="relative group">
            {/* Decorative backdrop behind terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            {/* Terminal Window */}
            <div className="relative bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden">

              {/* Terminal Header / Title Bar */}
              <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono">hunter-portfolio — developer.json</div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="block">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-gray-400">=</span> <span className="text-yellow-300">{`{`}</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-red-400">name</span>: <span className="text-green-400">"Hunter McGraw"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-red-400">roles</span>: <span className="text-yellow-300">[</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Full-Stack Engineer"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Python Developer"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Embedded Systems Engineer"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-yellow-300">]</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-red-400">traits</span>: <span className="text-yellow-300">[</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Problem Solver"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"IoT Enthusiast"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Clean Code Advocate"</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-yellow-300">]</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-red-400">status</span>: <span className="text-green-400">"Open to opportunities"</span>
                    <br />
                    <span className="text-yellow-300">{`}`}</span>;
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div >
    </section >
  );
}