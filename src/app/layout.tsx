import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFrame } from "@/components/site-frame";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fci-africa.vercel.app"),
  title: {
    default: "Frontier Compute Initiative | FCI Africa",
    template: "%s | Frontier Compute Initiative",
  },
  description:
    "FCI Africa provides frontier AI and compute infrastructure grants to Africa's next generation of researchers, scientists, and engineers.",
  keywords: [
    "Frontier Compute Initiative",
    "FCI Africa",
    "African AI research",
    "scientific computing grants",
    "AI infrastructure Africa",
    "compute grants",
  ],
  openGraph: {
    title: "Frontier Compute Initiative",
    description:
      "Accelerating African scientific breakthroughs through frontier AI infrastructure.",
    siteName: "FCI Africa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Compute Initiative",
    description:
      "Accelerating African scientific breakthroughs through frontier AI infrastructure.",
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
