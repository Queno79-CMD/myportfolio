import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { GlitchTransition } from "@/components/layout/glitch-transition";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  applicationName: `${siteConfig.name} Portfolio`,
  keywords: [
    "Cybersecurity",
    "IT",
    "Ubuntu Server",
    "Kali Linux",
    "Network Security",
    "Vulnerability Scanning",
    "Python",
    "Java",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-slate-950 text-slate-100 antialiased`}
      >
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-50 ring-1 ring-white/10"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <GlitchTransition>{children}</GlitchTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
