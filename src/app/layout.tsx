import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "WEBZONO | Premium Digital Experiences & Enterprise Solutions",
  description: "WEBZONO is a premium technology company specializing in high-performance websites, AI solutions, and enterprise software for modern businesses.",
  icons: {
    icon: [
      { url: '/assets/favicon.ico' },
      { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: "/assets/icon.png",
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    title: "WEBZONO | Premium Digital Experiences",
    description: "Building the future of digital experiences for billion-dollar enterprises.",
    url: "https://webzono.com",
    siteName: "WEBZONO",
    images: [
      {
        url: "https://webzono.com/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "WEBZONO Premium Technology Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBZONO | Building The Future",
    description: "Premium Websites. Powerful Mobile Apps. AI Solutions.",
    images: ["https://webzono.com/assets/logo.png"],
    creator: "@webzono",
  },
  alternates: {
    canonical: "https://webzono.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WEBZONO",
  "url": "https://webzono.com",
  "logo": "https://webzono.com/assets/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7358859792",
    "contactType": "Customer Service"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
