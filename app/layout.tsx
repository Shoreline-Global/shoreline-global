import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Shoreline Global - Applied AI & Intelligent Automation",
  description: "Practical AI systems, workflow automation, and engineering-driven solutions for modern enterprises. We navigate the transition from manual operations to intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-500 selection:bg-zinc-800 selection:text-zinc-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
