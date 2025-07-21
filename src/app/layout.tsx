import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ViewportProvider } from "@/contexts/ViewportContext";


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
    <html lang="en">
      <body>
        <ViewportProvider>
          <Header />
          {children}
          <Footer />
        </ViewportProvider>
      </body>
    </html>
  );
}
