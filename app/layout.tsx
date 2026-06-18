import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  title: {
    default: "NF Network — Neurofibromatosis Network",
    template: "%s — NF Network",
  },
  description:
    "The Neurofibromatosis Network is the leading national organization advocating for federal funding for NF research and building and supporting NF communities.",
  keywords: [
    "neurofibromatosis",
    "NF",
    "NF Network",
    "NF research",
    "NF advocacy",
    "rare disease",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NF Network",
    title: "NF Network — Neurofibromatosis Network",
    description:
      "Advocating for federal funding for NF research and building and supporting NF communities.",
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
