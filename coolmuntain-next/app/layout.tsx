import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

import { BASE_PATH } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coolmountaintransport.com"),
  title: {
    default: "Cool Mountain Transport | Reliable Freight & Professional Drivers",
    template: "%s | Cool Mountain Transport",
  },
  description: "Reliable, safe, and on-time freight services. Serving the Western and Central US with dry van, refrigerated, and expedited options.",
  openGraph: {
    title: "Cool Mountain Transport",
    description: "Reliable, safe, and on-time freight services. Serving the Western and Central US.",
    url: "https://coolmountaintransport.com",
    siteName: "Cool Mountain Transport",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_PATH}/assets/images/home-intro-truck.png`, // Fallback image
        width: 1200,
        height: 630,
        alt: "Cool Mountain Transport Truck",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cool Mountain Transport",
    description: "Reliable, safe, and on-time freight services.",
    images: [`${BASE_PATH}/assets/images/home-intro-truck.png`],
  },
  icons: {
    icon: `${BASE_PATH}/favicon.png`,
  },
  manifest: `${BASE_PATH}/manifest.json`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cool Mountain Transport",
              url: "https://coolmountaintransport.com",
              logo: "https://coolmountaintransport.com/Coolmountain/assets/images/logo-transparent.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-208-475-2500",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/coolmtntransport",
                "https://www.linkedin.com/company/cool-mountain-transport/",
              ],
            }),
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <a
          href="tel:2084752500"
          className="fixed bottom-0 left-0 right-0 z-[60] flex md:hidden items-center justify-center gap-3 bg-brand-red py-4 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.2)] transition-colors hover:bg-brand-red-hover active:bg-[#7f1d1d]"
        >
          <Phone className="h-6 w-6" strokeWidth={2.5} />
          <span className="font-bold text-lg tracking-wide uppercase">Call Dispatch</span>
        </a>
        <a
          href="tel:2084752500"
          className="hidden md:flex fixed bottom-8 right-8 z-[60] items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-white shadow-2xl transition hover:bg-brand-red-hover hover:scale-105 active:scale-95"
        >
          <Phone className="h-5 w-5" strokeWidth={2} />
          <span className="font-bold text-sm uppercase tracking-wide">Call Us</span>
        </a>
      </body>
    </html>
  );
}
