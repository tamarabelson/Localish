import Link from "next/link";
import PlannerForm from "@/components/PlannerForm";

const sampleUrl = `/itinerary?city=New+York&neighborhood=East+Village+%26+Lower+East+Side&secondNeighborhood=West+Village%2C+SoHo+%26+Tribeca`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-slate-900">Localish</span>
          <a
            href="#plan"
            className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white hover:bg-forest/90 transition"
          >
            Plan my day
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-7">
            Spend a day in the city
            <br />
            like a local — not a tourist
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Localish creates smart, walkable itineraries across nearby neighborhoods so your day actually flows — from morning coffee to evening drinks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#plan"
              className="rounded-full bg-forest px-8 py-4 text-base font-semibold text-white hover:bg-forest/90 transition shadow-lg hover:shadow-xl"
            >
              Plan my day
            </a>
            <Link
              href={sampleUrl}
              className="rounded-full border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 hover:border-forest hover:text-forest transition"
            >
              See a sample itinerary
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-28 px-6 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-7 leading-tight">
            Planning a trip shouldn&apos;t feel like work
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Most travel tools give you either a long list of places with no structure, or a packed itinerary that doesn&apos;t make sense geographically. You end up jumping across the city, wasting time figuring out logistics, and missing the places locals actually love.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-5">The Localish way</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-7 leading-tight">
            We build you a day that actually makes sense
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Localish creates complete, realistic itineraries — not just recommendations. Each plan flows through adjacent neighborhoods, is walkable and time-aware, balances food, exploring, and downtime, and focuses on local spots — not tourist traps.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-16 text-center">How it works</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Choose your city, vibe, and how much time you have",
              },
              {
                step: "02",
                title: "We generate a smart itinerary across nearby neighborhoods",
              },
              {
                step: "03",
                title: "Follow your day — no overthinking needed",
              },
            ].map(({ step, title }) => (
              <div key={step} className="text-center">
                <div className="font-display text-6xl font-bold text-forest/15 mb-5">{step}</div>
                <p className="text-slate-700 font-medium text-lg leading-snug">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example — prominent */}
      <section className="py-28 px-6 bg-forest text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Sample day</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
            A day in NYC, done right
          </h2>
          <div className="space-y-6 text-xl leading-relaxed text-white/75">
            <p>
              Start your morning in the{" "}
              <strong className="text-white font-semibold">East Village</strong> with a quiet coffee spot locals love. Walk into the{" "}
              <strong className="text-white font-semibold">Lower East Side</strong> for vintage shops and a casual lunch.
            </p>
            <p>
              Spend the afternoon exploring hidden galleries in{" "}
              <strong className="text-white font-semibold">SoHo</strong>, and end with drinks nearby.
            </p>
          </div>
          <div className="mt-12">
            <Link
              href={sampleUrl}
              className="inline-block rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-forest transition"
            >
              See this itinerary →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "→",
                title: "Smart routing",
                desc: "No zig-zagging across the city, just a natural flow through connected neighborhoods.",
              },
              {
                icon: "◷",
                title: "Realistic timing",
                desc: "Plans that fit your day, not overwhelm it — with time built in to just wander.",
              },
              {
                icon: "◎",
                title: "Local-first spots",
                desc: 'Less "Top 10 attractions," more places locals actually go on a Saturday.',
              },
              {
                icon: "✦",
                title: "Vibe-based planning",
                desc: "Chill, food-focused, date night, explore — your day, your style.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 p-8 hover:border-forest/20 hover:shadow-md transition"
              >
                <div className="text-2xl text-forest mb-4 font-bold">{icon}</div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planner */}
      <section id="plan" className="py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-4">Get started</p>
            <h2 className="font-display text-4xl font-bold text-slate-900">Plan your day</h2>
          </div>
          <PlannerForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-7 leading-tight">
            Travel like you didn&apos;t Google anything
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-12">
            The best days in a city aren&apos;t planned step-by-step — they just flow. Localish helps you get that feeling, instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#plan"
              className="rounded-full bg-white text-slate-900 px-8 py-4 text-base font-semibold hover:bg-slate-100 transition shadow-lg"
            >
              Plan my day
            </a>
            <Link
              href={sampleUrl}
              className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition"
            >
              Generate itinerary
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-center">
        <p className="text-xs text-slate-600">
          Powered by Claude · 10 cities · 50 neighborhoods
        </p>
      </footer>
    </main>
  );
}
