"use client";

export default function Footer() { // min-h-screen = 100% of viewport. h-[50vh] = 50% of viewport height
  return (
    <section className="h-[6vh] flex flex-col justify-center items-center px-6 bg-gray text-green-400 font-mono">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold">Footer</h1>
      </div>
    </section>
  );
}
