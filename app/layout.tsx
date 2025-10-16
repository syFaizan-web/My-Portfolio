import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Syed Faizan - MERN Stack Developer",
  description:
    "Portfolio website showcasing projects and experience in MERN stack development, React, Node.js, and modern web technologies.",
  keywords: [
    "MERN Stack",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Full Stack Developer",
    "Web Development",
  ],
  authors: [{ name: "Syed Faizan" }],
  openGraph: {
    title: "Syed Faizan - MERN Stack Developer",
    description:
      "Portfolio website showcasing projects and experience in MERN stack development",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Faizan - MERN Stack Developer",
    description:
      "Portfolio website showcasing projects and experience in MERN stack development",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
