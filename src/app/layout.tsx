import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3, Vazirmatn } from "next/font/google";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const persian = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "سنجاق لاله",
  description:
    "A remembrance pin for the people killed in the crackdown on protests in Iran on 8 and 9 January 2026, and for all those who have lost their lives for the freedom of Iran.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${sans.variable} ${serif.variable} ${persian.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
