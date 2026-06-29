import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://viatorventures.example"),
  title: {
    default: "Viator Ventures - Your Complete Agatti Island Guide",
    template: "%s - Viator Ventures",
  },
  description:
    "Government-licensed Lakshadweep tour operator based on Agatti Island. Island hopping, snorkeling, scuba, glass-bottom boating, permits and transfers handled end to end.",
  openGraph: {
    title: "Viator Ventures - Agatti Island, Lakshadweep",
    description:
      "Handmade island trips from Agatti. Permits, transfers and shore support - we handle the details.",
    type: "website",
    url: "https://viatorventures.example",
    siteName: "Viator Ventures",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viator Ventures - Your Complete Agatti Island Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viator Ventures - Agatti Island, Lakshadweep",
    description:
      "Handmade island trips from Agatti. Permits, transfers and shore support - we handle the details.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P55W8FE62N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P55W8FE62N');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
