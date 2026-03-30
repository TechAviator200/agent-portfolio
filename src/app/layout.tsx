import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "AI Product Engineer | MC",
  description: "Building agentic systems, workflow automation, and applied AI products across media & entertainment, enterprise, and healthcare & life sciences.",
  openGraph: {
    title: "AI Product Engineer | MC",
    description: "Building agentic systems, workflow automation, and applied AI products across media & entertainment, enterprise, and healthcare & life sciences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Product Engineer | MC",
    description: "Building agentic systems, workflow automation, and applied AI products across media & entertainment, enterprise, and healthcare & life sciences.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
