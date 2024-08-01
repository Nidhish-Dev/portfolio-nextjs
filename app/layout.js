import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

import Head from "next/head";
import "./globals.css";

// Import the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Import the custom CalSans font
const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata = {
  title: "Nidhish Rathore", // Update the page title here
  description: "Your page description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}
      >
        {children}
      </body>
    </html>
  );
}
