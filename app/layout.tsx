import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { logo } from "@/public";
import { Inter } from "next/font/google";
export const metadata: Metadata = {
  title: "Ayan",
  description: "Created with v0",
  generator: "v0.dev",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-clip">
      <head>
        <link rel="icon" href={logo.src} sizes="any" />

        <style>{`
html {
  font-family: ${inter.style.fontFamily};
}
        `}</style>
      </head>
      <body className="bg-slate-900 text-slate-300 overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
