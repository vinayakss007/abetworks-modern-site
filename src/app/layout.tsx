import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abet Works — AI-Powered Business Solutions",
  description:
    "NuCRM, LeadGenius, AW Agent Fleet & Digital Services. Enterprise-grade AI solutions for modern businesses.",
  keywords: "CRM, AI, lead generation, agent fleet, digital services, SaaS",
  openGraph: {
    title: "Abet Works — AI-Powered Business Solutions",
    description:
      "Enterprise-grade AI solutions for modern businesses. NuCRM, LeadGenius, AW Agent Fleet & more.",
    type: "website",
    siteName: "Abet Works",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abet Works — AI-Powered Business Solutions",
    description:
      "Enterprise-grade AI solutions for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
