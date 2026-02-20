import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import StatsBar from "@/components/ui/StatsBar";
import BottomNav from "@/components/ui/BottomNav";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patent Bar Game — MPEP Chapter 100",
  description:
    "Gamified study app for the Patent Bar Registration Examination. Master MPEP Chapter 100 through interactive learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${baloo.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <StatsBar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <footer className="hidden md:block border-t border-[var(--color-border)] py-4 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; 2026 Patent Bar Game. Built for future patent attorneys.
          </p>
        </footer>
        <BottomNav />
      </body>
    </html>
  );
}
