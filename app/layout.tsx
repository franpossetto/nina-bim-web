import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/style.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Nina for Revit | Tiny tools to work faster",
  description: "A collection of tiny tools to work faster in Autodesk Revit. Quick access to commands using keyboard shortcuts, saving you clicks and time.",
  keywords: ["Revit", "Autodesk Revit", "BIM tools", "Revit plugins", "Nina for Revit", "Revit shortcuts", "Francisco Possetto", "BIM development"],
  authors: [{ name: "Francisco Possetto" }],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    title: "Nina for Revit | Tiny tools to work faster",
    description: "A collection of tiny tools to work faster in Autodesk Revit. Quick access to commands using keyboard shortcuts.",
    url: "https://ninabim.com/",
    siteName: "Nina for Revit",
    images: [{
      url: "https://ninabim.com/ninabim-social.png"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nina for Revit | Tiny tools to work faster",
    description: "A collection of tiny tools to work faster in Autodesk Revit. Quick access to commands using keyboard shortcuts.",
    images: ["https://ninabim.com/ninabim-social.png"]
  },
  alternates: {
    canonical: "https://ninabim.com/"
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.sunrise-sunset.org" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" crossOrigin="anonymous" />
        <link id="dynamic-favicon" rel="icon" href="/favicon-day.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Nina for Revit",
              "operatingSystem": "Windows",
              "applicationCategory": "BIM Tool",
              "description": "A collection of tiny tools to work faster in Autodesk Revit. Quick access to commands using keyboard shortcuts, saving you clicks and time.",
              "url": "https://ninabim.com/",
              "author": {
                "@type": "Person",
                "name": "Francisco Possetto"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              var isDay = false;
              var fallbackHour = function() {
                var utcHour = new Date().getUTCHours();
                var morterosHour = (utcHour - 3 + 24) % 24;
                return morterosHour >= 7 && morterosHour < 20;
              };
              try {
                var cached = localStorage.getItem('sunriseSunset');
                if (cached) {
                  var data = JSON.parse(cached);
                  var now = new Date();
                  var today = now.toISOString().split("T")[0];
                  if (data.date === today && data.sunrise && data.sunset) {
                    isDay = now > new Date(data.sunrise) && now < new Date(data.sunset);
                  } else {
                    isDay = fallbackHour();
                  }
                } else {
                  isDay = fallbackHour();
                }
              } catch(e) {
                isDay = fallbackHour();
              }
              document.body.style.backgroundColor = isDay ? 'white' : 'black';
            })();
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}