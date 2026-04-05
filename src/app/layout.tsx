import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tech Aviator Labs — AI Systems",
  description: "Production-grade AI systems built for real-world use. We design, build, and ship across healthcare, enterprise, and media.",
  openGraph: {
    title: "Tech Aviator Labs — AI Systems",
    description: "Production-grade AI systems built for real-world use. We design, build, and ship across healthcare, enterprise, and media.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Aviator Labs — AI Systems",
    description: "Production-grade AI systems built for real-world use. We design, build, and ship across healthcare, enterprise, and media.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
