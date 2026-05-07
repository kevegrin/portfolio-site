// this file defines the global html structure. injecting the footer here ensures it persists across all pages alongside the header.

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "portfolio.",
  description: "a documented experiment in frontend architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* min-h-screen and flex-col allow the footer to stick to the bottom */}
      <body className="antialiased selection:bg-primary selection:text-background min-h-screen flex flex-col">
        <Header />
        
        <div className="flex-grow">
          {children}
        </div>

        {/* global organism injected below all page content */}
        <Footer />
      </body>
    </html>
  );
}