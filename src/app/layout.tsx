import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { site } from "@/config/site";

const archivo = localFont({
  src: "../assets/fonts/Archivo-Variable.ttf",
  variable: "--font-archivo",
  display: "swap",
  weight: "100 900",
});

const baseUrl = "https://barfpimpon.mx";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BARF Pimpon | Alimento natural para perros",
    template: "%s | BARF Pimpon",
  },
  description: site.description,
  applicationName: site.brandName,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: baseUrl,
    siteName: site.brandName,
    title: "BARF Pimpon | Alimento natural para perros",
    description: site.description,
    images: [
      {
        url: "/social/og-image.png",
        width: 1200,
        height: 630,
        alt: "BARF Pimpon — Nutrición real, vida feliz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BARF Pimpon | Alimento natural para perros",
    description: site.description,
    images: ["/social/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  category: "alimentos",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3e561a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={archivo.variable}>
      <body style={{ fontFamily: "var(--font-archivo)" }}>
        <Header />
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}