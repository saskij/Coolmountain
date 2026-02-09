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
          className="fixed bottom-24 right-8 z-[60] flex items-center gap-2 rounded-full bg-[#b91c1c] px-5 py-3 text-white shadow-2xl transition hover:bg-[#991b1b] hover:scale-105 active:scale-95"
        >
          <Phone className="h-5 w-5" strokeWidth={2} />
          <span className="font-semibold text-sm">Call Us</span>
        </a>
      </body>
    </html>
  );
}
