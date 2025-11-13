import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechMachinery | High-Tolerance Paper Rolling Machinery",
  description:
    "Leaders in automated, high-precision rolling paper manufacturing equipment.",
  openGraph: {
    title: "TechMachinery | High-Tolerance Paper Rolling Machinery",
    description:
      "Leaders in automated, high-precision rolling paper manufacturing equipment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
