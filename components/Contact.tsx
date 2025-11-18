"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

// Inside your handleSubmit function in Contact.tsx

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });

    const data = await response.json();

    if (response.ok) {
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } else {
      console.error("Error:", data.error);
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-gray-950 text-white relative overflow-hidden">
      
      {/* Background Elements matching Hero */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >

          {/* LEFT COLUMN: Text & Info */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Connect</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                Have a project in mind or just want to chat about the latest tech? 
                I'm currently open to new opportunities and collaborations.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <InfoItem icon={<MailIcon />} label="Email" value="huntercmcgraw@gmail.com" href="mailto:huntercmcgraw@gmail.com" />
              <InfoItem icon={<LinkedinIcon />} label="LinkedIn" value="linkedin.com/in/hunter-mcgraw1" href="https://www.linkedin.com/in/hunter-mcgraw1" />
              <InfoItem icon={<GithubIcon />} label="GitHub" value="github.com/huntermcgraw" href="https://github.com/huntermcgraw" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div variants={itemVariants}>
            <form 
              onSubmit={handleSubmit} 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/20 rounded-2xl transition duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 text-gray-100 placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 text-gray-100 placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 text-gray-100 placeholder-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2
                    ${isSubmitted 
                      ? "bg-green-600 hover:bg-green-700 cursor-default" 
                      : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/25 hover:shadow-indigo-500/40"
                    }
                    ${isSubmitting ? "opacity-80 cursor-wait" : ""}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner /> Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckIcon /> Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRightIcon />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

/* --- Helper Components & Icons (Inline for copy-paste ease) --- */

function InfoItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 hover:bg-gray-800 transition duration-300 group"
    >
      <div className="p-3 bg-gray-800 rounded-lg text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition duration-300">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-gray-200 font-medium group-hover:text-white transition">{value}</div>
      </div>
    </a>
  );
}

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
)