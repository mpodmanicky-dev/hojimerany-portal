import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Hojímerany.sk - webový portál pre liečbu akútnych a chronických rán",
  description: "Portál pre širokú verejnosť a odborníkov hľadajúcich vhodné alternatívy pre hojenie rán",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7ED1ZSJ51X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7ED1ZSJ51X');
          `}
        </Script>
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

