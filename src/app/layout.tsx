import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/shared/components/theme";
import { MotionProvider } from "@/shared/components/motion/MotionProvider";
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
  title: "Neo Portfolio — Full-Stack Developer",
  description:
    "Cyberpunk RPG-themed developer portfolio. Clean Architecture, Next.js App Router, and neon aesthetics.",
  keywords: ["developer", "portfolio", "full-stack", "next.js", "cyberpunk"],
  openGraph: {
    title: "Neo Portfolio — Full-Stack Developer",
    description: "Cyberpunk RPG-themed developer portfolio built with Next.js.",
    type: "website",
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
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider><MotionProvider>{children}</MotionProvider></ThemeProvider>
      </body>
    </html>
  );
}
