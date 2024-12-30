import type { Metadata } from "next";
import {DM_Sans} from 'next/font/google'
import { twMerge } from "tailwind-merge";
import "./globals.css";

const dmSans = DM_Sans({subsets : ['latin']});


export const metadata: Metadata = {
  title: "LightsOn",
  description: "SaaS Landing Page with React, Next.js, TailwindCSS & Framer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body
        className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}
      >
        {children}
      </body>
    </html>
  );
}
