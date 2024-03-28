import { Inter } from "next/font/google";
import "./globals.css";
import { Fira_Sans_Condensed } from "next/font/google";
import Head from "next/head";

const firaSansCondensed = Fira_Sans_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fira-sans-condensed",
});

export const metadata = {
  title: "Uplift Early Access",
  description: "Uplift",
  keywords: ["Uplift"],
  favicon: "./favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <link rel="icon" href={metadata.favicon} />
      </Head>
      <body className={`${firaSansCondensed.variable}`}>{children}</body>
    </html>
  );
}
