import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header/header";
import { mulish, poppins } from "@/utils/fonts";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Portfolio: Kiryl Harbacheuski",
  description: "Personal portfolio of frontend developer Kiryl Harbacheuski",
};

const GTM_ID = "G-EQLTVET0XX";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GTM_ID} />
      <body className={`${poppins.className}`} id="top">
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
