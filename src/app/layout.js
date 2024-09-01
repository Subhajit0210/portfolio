import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subhajit | Portfolio",
  description: "Subhajit is  a aspiring Data Scientist , currently pursuing his Post Graduation from Amity University, Kolkata. Here is everything you need to know about him!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/assets/logoSVG.svg" />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-VV12GM0DCF" />
    </html>
  );
}
