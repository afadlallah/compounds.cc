import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MedicalDisclaimer } from "@/components/layout/medical-disclaimer";
import { websiteJsonLd } from "@/lib/seo/jsonld";
import { Toaster } from "sonner";
import { CommandPalette } from "@/components/layout/command-palette";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Compounds.cc — Research Reference Database with Retrieval-Grounded AI",
    template: "%s · Compounds.cc",
  },
  description:
    "An evidence-forward reference library of nootropics, peptides, and supplements. Educational only — not medical advice.",
  openGraph: {
    type: "website",
    siteName: "Compounds.cc",
    title:
      "Compounds.cc — Research Reference Database with Retrieval-Grounded AI",
    description:
      "An evidence-forward reference library of nootropics, peptides, and supplements. Educational only — not medical advice.",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Compounds.cc — Research Reference Database with Retrieval-Grounded AI",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Compounds.cc — Research Reference Database with Retrieval-Grounded AI",
    description:
      "An evidence-forward reference library of nootropics, peptides, and supplements.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const websiteStructuredData = websiteJsonLd();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MedicalDisclaimer />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster richColors position="top-right" />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
