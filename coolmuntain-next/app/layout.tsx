import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

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
        url: "/assets/images/home-intro-truck.png", // Fallback image
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
    images: ["/assets/images/home-intro-truck.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
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
      </body>
    </html>
  );
}
