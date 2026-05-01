"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.08)]" : "border-b border-slate-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold text-slate-900 tracking-tight hover:opacity-80 transition-opacity">
          Localish
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <a href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            How it Works
          </a>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            About
          </Link>
          <a href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Pricing
          </a>
          <a
            href="/#plan"
            className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white hover:bg-forest/90 transition-colors shadow-sm"
          >
            Plan my day →
          </a>
        </div>

        <a
          href="/#plan"
          className="md:hidden rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white hover:bg-forest/90 transition-colors"
        >
          Plan my day
        </a>
      </div>
    </nav>
  );
}
