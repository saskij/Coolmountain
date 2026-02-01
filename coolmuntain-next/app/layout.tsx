import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

import { BASE_PATH } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <a
          href="tel:2084752500"
          className="fixed bottom-24 right-8 z-[60] flex items-center gap-2 rounded-full bg-[#b91c1c] px-5 py-3 text-white shadow-xl transition hover:bg-[#991b1b] animate-twitch hover:animate-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5Z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold text-sm">Call Us</span>
        </a>
      </body>
    </html>
  );
}
