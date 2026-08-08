import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "motion/react";
import "./globals.css";

import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";

import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} — ${personalInfo.role}`,
    template: `%s · ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: [
    personalInfo.name,
    personalInfo.role,
    "Portfolio",
    ...skillCategories.flatMap((skillCategory) =>
      skillCategory.skills.map((skill) => skill.name)
    ),
    personalInfo.location,
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description: personalInfo.tagline,
    siteName: personalInfo.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${personalInfo.name} — ${personalInfo.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description: personalInfo.tagline,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <AppProvider>
            <TooltipProvider>
              <MotionConfig reducedMotion="user">
                <Navbar />
                {children}
                <Footer />
              </MotionConfig>
            </TooltipProvider>
          </AppProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
