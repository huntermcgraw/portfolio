export default function About() {
  return (
    <section className="px-6 py-20 bg-black text-green-400 font-mono border-t border-green-900">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg">$ cat about.txt</p>

        <div className="mt-4 bg-zinc-900 border border-green-800 p-6 rounded">
          <pre className="whitespace-pre-wrap">
{`{
  "name": "Hunter",
  "title": "Full-Stack Developer",
  "interests": ["Linux", "C#", "Next.js", "IoT", "Machine Learning"],
  "currently_building": "Gesture-controlled smart home with Raspberry Pi",
  "experience": {
    "backend": ["C#", ".NET", "APIs", "PostgreSQL"],
    "frontend": ["React", "Next.js", "Tailwind"],
    "embedded": ["Raspberry Pi", "Sensors", "MediaPipe"]
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}