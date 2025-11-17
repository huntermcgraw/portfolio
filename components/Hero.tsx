"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 bg-black text-green-400 font-mono">
      <div className="max-w-3xl">
        <p className="text-lg">$ whoami</p>

        <h1 className="text-5xl sm:text-6xl font-bold mt-2">
          <span className="text-green-300">Hunter McGraw</span>
        </h1>

        <p className="mt-4 text-xl text-green-200">
          Full-Stack Developer • Linux Enthusiast • C# / React / Next.js
        </p>

        <div className="mt-8 space-x-4">
          <a
            href="#projects"
            className="border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition-colors"
          >
            ./projects
          </a>

          <a
            href="https://github.com/huntermcgraw"
            className="border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition-colors"
          >
            ./github
          </a>
        </div>

        <div className="mt-12 text-green-500">
          <span className="opacity-70"># portfolio root directory</span>
        </div>
      </div>
    </section>
  );
}
