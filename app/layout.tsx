import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Localish — Spend a day like a local",
  description: "Smart, walkable itineraries across nearby neighborhoods — from morning coffee to evening drinks. Built for people who want to experience a city, not just see it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-[#FAFAF8]`}>
        {children}
      </body>
    </html>
  );
}
