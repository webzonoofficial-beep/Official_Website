import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import LenisSmoothScroll from "@/components/interactive/LenisSmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "WEBZONO — Build. Grow. Dominate.",
  description: "WEBZONO crafts world-class websites, AI solutions, mobile apps, and digital experiences that drive real business growth.",
  keywords: "Webzono, Software Agency, Web Development, Next.js, eCommerce, SaaS, Startup Websites",
  authors: [{ name: "WEBZONO" }],
  openGraph: {
    type: "website",
    url: "https://webzono.in",
    title: "WEBZONO — Building The Future Of Digital Innovation",
    description: "World-class websites, AI solutions, and digital experiences that drive business growth.",
    siteName: "WEBZONO",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBZONO — Building The Future Of Digital Innovation",
    description: "World-class websites, AI solutions, and digital experiences that drive business growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-primary/30 selection:text-white">
        <div className="noise-overlay" />
        
        <LenisSmoothScroll>
          <main className="flex-grow">
            {children}
          </main>
        </LenisSmoothScroll>
      </body>
    </html>
  );
}
