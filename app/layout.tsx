import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const title = "Jovel Labay — Full-Stack JavaScript Developer";
const description =
  "Full-stack developer in Cagayan de Oro building production web and mobile products with React, Next.js, React Native, and Node.js. Founder of Billouvent and Moto Factory.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jovellabay.vercel.app"),
  title,
  description,
  authors: [{ name: "Jovel Labay" }],
  verification: {
    google: "_0hquK8KU9XAoLpR9mpQgrBaR6hd1We4fCBsjyIk8K4",
  },
  openGraph: {
    title,
    description,
    url: "https://jovellabay.vercel.app",
    siteName: "Jovel Labay",
    type: "website",
    locale: "en_PH",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${newsreader.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
