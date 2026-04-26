import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { WEBSITE_DETAILS } from "@/lib/constant";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: WEBSITE_DETAILS.TITLE,
  description: WEBSITE_DETAILS.DESCRIPTION,
  authors: [{ name: WEBSITE_DETAILS.AUTHOR_NAME }],
  keywords: WEBSITE_DETAILS.KEYWORDS,
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Toaster position="top-center" />
          <Footer />
        </Providers>
        {/* <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
          strategy="beforeInteractive"
          id="linkedin-badge-script"
        ></Script> */}
      </body>
    </html>
  );
}
