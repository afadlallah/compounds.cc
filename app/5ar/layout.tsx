import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./five-ar.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-5ar",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "5AR Society — The Androgen Apothecary",
  description:
    "Pharmaceutical-grade androgen and neurosteroid compounds, formulated for men who refuse to settle for baseline. Third-party tested. Physician-formulated. Shipped cold, always.",
};

export default function FiveArLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${display.variable} ${sans.variable} five-ar-root`}>
      {children}
    </div>
  );
}
