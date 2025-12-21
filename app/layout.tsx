import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://merovia.co'),
  title: {
    default: "Merovia - E-commerce, Software & SaaS Solutions | US Technology Company",
    template: "%s | Merovia"
  },
  description: "Leading US-based technology solutions provider specializing in e-commerce platforms, custom software development, and SaaS products. Trusted by businesses nationwide. Based in Sheridan, Wyoming.",
  keywords: [
    "ecommerce solutions",
    "software development company",
    "saas products",
    "technology solutions",
    "web development",
    "US company",
    "Wyoming tech company",
    "custom software",
    "cloud solutions",
    "enterprise software"
  ],
  authors: [{ name: "Merovia", url: "https://merovia.co" }],
  creator: "Merovia",
  publisher: "Merovia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Merovia - E-commerce, Software & SaaS Solutions",
    description: "Leading US-based technology solutions provider specializing in e-commerce, software development, and SaaS. Based in Sheridan, Wyoming.",
    type: "website",
    locale: "en_US",
    url: "https://merovia.co",
    siteName: "Merovia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merovia - E-commerce, Software & SaaS Solutions",
    description: "Leading US-based technology solutions provider",
    images: ["/og-image.png"],
    creator: "@merovia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://merovia.co",
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
