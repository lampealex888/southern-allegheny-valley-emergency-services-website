import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Southern Allegheny Valley Emergency Services",
  description: "Volunteer Firefighter Opportunities Available, Donate Today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen justify-between`}>
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
