import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header/header";
import { mulish, poppins } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Portfolio: Kiryl Harbacheuski",
  description: "Personal portfolio of frontend developer Kiryl Harbacheuski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
