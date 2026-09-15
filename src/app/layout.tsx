import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Asset-Based Freight Carrier in Florida`, template: `%s | ${site.name}` },
  description: "Asset-based trucking company moving product across Florida and the Southeast. Same-day freight, cargo van, box truck and flatbed with our own trucks and CDL drivers.",
  applicationName: site.name,
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/manifest.webmanifest",
  keywords: ["trucking company florida", "same day freight florida", "asset based carrier florida", "box truck delivery florida", "flatbed trucking florida", "cargo van delivery florida"],
  formatDetection: { telephone: true },
};
export const viewport: Viewport = { themeColor: "#012355", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="pb-16 lg:pb-0">
        {site.gtmId && (
          <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');`}</Script>
        )}
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-orange focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyBar />
        <BackToTop />
        <Reveal />
      </body>
    </html>
  );
}
