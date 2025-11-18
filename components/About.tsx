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
    "C# / .NET", "React", "Next.js", "TypeScript", 
    "PostgreSQL", "Tailwind CSS", "IoT / Raspberry Pi", "Git"
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
                I'm a software engineer passionate about the intersection of <strong className="text-gray-200">elegant code</strong> and <strong className="text-gray-200">modern design</strong>. 
              </p>
              <p>
                My journey started with a curiosity for how things work, leading me to explore the world of IoT. 
                Today, I leverage that curiosity to build scalable full-stack applications. 
                While my professional expertise lies in the <span className="text-indigo-400">.NET ecosystem</span> and <span className="text-indigo-400">React</span>, 
                I dedicate my free time to hacking on hardware projects and experimenting with AI.
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
                    &nbsp;&nbsp;<span className="text-red-400">role</span>: <span className="text-green-400">"Full-Stack Engineer"</span>,
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
      </div>
    </section>
  );
}