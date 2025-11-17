"use client";

import Button from "@/components/Button";

export default function Hero() { // min-h-screen = 100% of viewport. h-[50vh] = 50% of viewport height
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-black text-green-400 font-mono">
      <div className="max-w-3xl">
        <p className="text-lg">$ whoami</p>

        <h1 className="text-5xl sm:text-6xl font-bold mt-2">
          <span className="text-green-300">Hunter McGraw</span>
        </h1>

        <p className="mt-4 text-xl text-green-200">
          Full-Stack Developer • Linux Enthusiast • C# / React / Next.js
        </p>

        <div className="mt-8 space-x-4">
          <Button link="/about" name="./about_me" />
          <Button link="https://github.com/huntermcgraw" name="./github" />
          <Button link="https://www.linkedin.com/in/hunter-mcgraw1" name="./linkedin" />
        </div>

        <div className="mt-12 text-green-500">
          <span className="opacity-70"># portfolio root directory</span>
        </div>
      </div>
    </section>
  );
}
