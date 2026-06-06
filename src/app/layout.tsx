import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import LenisSmoothScroll from "@/components/interactive/LenisSmoothScroll";
import CustomCursor from "@/components/interactive/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "WEBZONO | Code. Create. Grow. - Premium Web Development Agency",
  description: "Webzono helps businesses scale online through high-converting websites, custom web applications, eCommerce stores, and premium digital experiences.",
  keywords: "Webzono, Software Agency, Web Development, Next.js, eCommerce, SaaS, Startup Websites",
  authors: [{ name: "WEBZONO" }],
  openGraph: {
    type: "website",
    url: "https://webzono.com",
    title: "WEBZONO | Premium Web Development & Digital Growth",
    description: "Code. Create. Grow. We build digital experiences that turn visitors into customers.",
    siteName: "WEBZONO",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBZONO | Premium Web Development & Digital Growth",
    description: "Code. Create. Grow. We build digital experiences that turn visitors into customers.",
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
        <CustomCursor />
        
        <LenisSmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LenisSmoothScroll>

        <FloatingWhatsApp />
      </body>
    </html>
  );
}
