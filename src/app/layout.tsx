import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import StatsBar from "@/components/ui/StatsBar";
import BottomNav from "@/components/ui/BottomNav";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
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
        className={`${nunito.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <StatsBar />
        <main className="pb-16 md:pb-0">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
