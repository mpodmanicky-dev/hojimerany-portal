import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

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
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "zc35unbsyv");
          `}
        </Script>
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
          {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

