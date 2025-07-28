import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { ViewportProvider } from "@/contexts/ViewportContext";
import { Sarabun } from 'next/font/google';

const sarabun = Sarabun({
  subsets: ['latin', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Sky Home",
  description: "Welcome to Sky Home - Your one-stop solution for all your home needs",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sarabun.className}>
      <body className="font-sarabun">
        <ViewportProvider>
          <Header />
          {children}
        </ViewportProvider>
      </body>
    </html>
  );
}
