import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metodos cuantitativos - Home",
  description:
    "Aplicacion web para calculos especificos de metodos cuantitativos",
  keywords: ["metodos", "cuantitativos", "matematicas", "vector-a"],
  authors: [{ name: "PitaroDark", url: "https://github.com/PitaroDark" }],
  publisher: "PitaroDark",
  creator: "PitaroDark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-slate-900 text-white">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
