import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/global/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'transparent',
};

export const metadata: Metadata = {
  title: "greed",
  description: "An aesthetic all-in-one bot, enhancing communities with user-focused commands.",
  twitter: {
    site: 'https://greed.best/',
    card: 'player'
  },
  openGraph: {
    url: 'https://greed.best/',
    type: 'website',
    title: 'greed',
    siteName: 'greed.best',
    description: 'An aesthetic all-in-one bot, enhancing communities with user-focused commands.',
    images: [
      {
        url: 'https://r2.greed.best/greed.png',
        width: 500,
        height: 500,
        alt: 'greed'
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-loti-100`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
