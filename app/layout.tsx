import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Mono } from "next/font/google";

import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hanzla Tauqeer",
  description:
    "Full Stack Web Developer - Python, Django, React.js, Next.js, Cloud.",
  authors: [{ name: "Hanzla Tauqeer" }],
  keywords: ["Hanzla", "Hanzla Tauqeer", "@1hanzla100", "Portfolio"],
  openGraph: {
    title: "Hanzla Tauqeer",
    description: "Full Stack Web Developer",
    url: "https://developer-portfolio-1hanzla100.vercel.app",
    images: [{ url: "https://avatars.githubusercontent.com/u/59178380?v=4" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanzla Tauqeer",
    images: ["https://avatars.githubusercontent.com/u/59178380?v=4"],
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
      className={`dark ${spaceMono.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-terminal-bg text-terminal-text antialiased">
        {children}
      </body>
    </html>
  );
}
