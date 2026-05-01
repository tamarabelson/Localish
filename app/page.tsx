import Link from "next/link";
import PlannerForm from "@/components/PlannerForm";
import Navbar from "@/components/Navbar";

const sampleUrl = `/itinerary?city=New+York&neighborhood=East+Village+%26+Lower+East+Side&secondNeighborhood=West+Village%2C+SoHo+%26+Tribeca`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-14 px-6 text-center bg-gradient-to-b from-[#EDF4E6] to-[#FAFAF8]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-6">
            Smart city itineraries
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-5 bg-gradient-to-br from-slate-900 to-forest bg-clip-text text-transparent">
            Spend a day in the city
            <br />
            like a local — not a tourist
          </h1>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Localish creates smart, walkable itineraries across nearby neighborhoods so your day actually flows — from morning coffee to evening drinks.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#plan"
              className="rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white hover:bg-forest/90 transition shadow-lg hover:shadow-xl"
            >
              Plan my day
            </a>
            <Link
              href={sampleUrl}
              className="rounded-full border-2 border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 hover:border-forest hover:text-forest transition"
            >
              See a sample itinerary
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl text-white/10 font-display font-bold mb-6 leading-none select-none">&ldquo;</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-7 leading-tight">
            Planning a trip shouldn&apos;t feel like work
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Most travel tools give you either a long list of places with no structure, or a packed itinerary that doesn&apos;t make sense geographically. You end up jumping across the city, wasting time figuring out logistics, and missing the places locals actually love.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section id="about" className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-5">The Localish way</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-7 leading-tight">
            We build you a day that actually makes sense
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Localish creates complete, realistic itineraries — not just recommendations. Each plan flows through adjacent neighborhoods, is walkable and time-aware, balances food, exploring, and downtime, and focuses on local spots — not tourist traps.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-4">How it works</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Three steps, zero overthinking</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Choose your city, vibe, and how much time you have",
                badgeCls: "bg-forest/10 text-forest",
              },
              {
                step: "02",
                title: "We generate a smart itinerary across nearby neighborhoods",
                badgeCls: "bg-amber-100 text-amber-700",
              },
              {
                step: "03",
                title: "Follow your day — no overthinking needed",
                badgeCls: "bg-teal-100 text-teal-700",
              },
            ].map(({ step, title, badgeCls }) => (
              <div
                key={step}
                className="bg-white rounded-2xl border border-slate-100 px-8 py-10 flex flex-col items-start hover:border-forest/20 hover:shadow-sm transition"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 ${badgeCls}`}>
                  <span className="text-sm font-bold">{step}</span>
                </div>
                <p className="text-slate-800 font-semibold text-lg leading-snug">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example — prominent */}
      <section className="py-24 px-6 bg-forest text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Sample day</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
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
      <section id="pricing" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-4">Why Localish</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Built for how people actually explore</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: "→",
                title: "Smart routing",
                desc: "No zig-zagging across the city, just a natural flow through connected neighborhoods.",
                iconCls: "bg-forest/10 text-forest",
              },
              {
                icon: "◷",
                title: "Realistic timing",
                desc: "Plans that fit your day, not overwhelm it — with time built in to just wander.",
                iconCls: "bg-amber-100 text-amber-600",
              },
              {
                icon: "◎",
                title: "Local-first spots",
                desc: 'Less "Top 10 attractions," more places locals actually go on a Saturday.',
                iconCls: "bg-teal-100 text-teal-600",
              },
              {
                icon: "✦",
                title: "Vibe-based planning",
                desc: "Chill, food-focused, date night, explore — your day, your style.",
                iconCls: "bg-violet-100 text-violet-600",
              },
            ].map(({ icon, title, desc, iconCls }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-[#FAFAF8] p-8 hover:border-forest/25 hover:shadow-md transition"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base mb-5 ${iconCls}`}>
                  {icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planner */}
      <section id="plan" className="py-24 px-6 bg-[#FAFAF8] border-t border-slate-100">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-4">Get started</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">Plan your day</h2>
            <p className="text-slate-500 mt-4 text-lg">Pick a city and we&apos;ll do the rest.</p>
          </div>
          <PlannerForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-7 leading-tight">
            Travel like you didn&apos;t Google anything
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-12 max-w-xl mx-auto">
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
      <footer className="py-10 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-slate-400 text-sm">Localish</span>
          <p className="text-xs text-slate-600 order-last sm:order-none">
            Powered by Claude · 10 cities · 50 neighborhoods
          </p>
          <div className="flex gap-6">
            <a href="#how-it-works" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">How it Works</a>
            <a href="/about" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">About</a>
            <a href="#plan" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Get Started</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
