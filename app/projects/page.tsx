import { Metadata } from 'next';
import Projects from "@/components/Projects";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background and skills.',
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Projects />
    </main>
  );
}