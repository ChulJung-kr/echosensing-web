import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EchoSensing — Seeing Earth. Smarter. Faster.",
    template: "%s | EchoSensing",
  },
  description:
    "EchoSensing builds SAR satellites with onboard AI processors that analyze Earth data in orbit — delivering real-time intelligence without relying on ground stations.",
  keywords: [
    "SAR satellite",
    "onboard AI",
    "earth observation",
    "synthetic aperture radar",
    "edge computing",
    "space technology",
  ],
  openGraph: {
    title: "EchoSensing — Seeing Earth. Smarter. Faster.",
    description:
      "Next-generation SAR satellites with onboard AI for real-time Earth intelligence.",
    url: "https://echosensing.com",
    siteName: "EchoSensing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
