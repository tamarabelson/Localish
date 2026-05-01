import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About — Localish",
  description: "Localish is a travel planning tool designed to make exploring a city feel intuitive.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors mb-12"
          >
            ← Back
          </Link>

          <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-5">About</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-16">
            Built by someone who walked the city
          </h1>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              Localish is a travel planning tool designed to make exploring a city feel intuitive.
            </p>

            <p>
              After 10 years of living in New York, I developed a deep familiarity with the city by walking it — discovering neighborhoods, finding new places, and understanding how different areas connect in real life. What started as sharing recommendations with friends evolved into a larger idea: most travel tools don&apos;t reflect how people actually move through a city.
            </p>

            <p className="font-semibold text-slate-900">
              Localish was built to change that.
            </p>

            <p>
              Combining local insight with a background in computer science, the platform generates itineraries that are structured, walkable, and time-aware — helping users explore adjacent neighborhoods with a natural flow.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200">
            <p className="text-sm text-slate-500">— Tamar Abelson</p>
          </div>

        </div>
      </section>
    </main>
  );
}
