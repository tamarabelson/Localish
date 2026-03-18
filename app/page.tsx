import PlannerForm from "@/components/PlannerForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="font-display text-5xl font-bold text-slate-900 mb-3 tracking-tight">
          Localish
        </h1>
        <p className="font-display text-lg text-slate-500 max-w-sm mx-auto leading-relaxed">
          A day in any city, written by your most well-traveled friend.
        </p>
      </div>

      <PlannerForm />

      <p className="mt-12 text-xs text-slate-300 text-center">
        Powered by Claude · 10 cities · 50 neighborhoods
      </p>
    </main>
  );
}
