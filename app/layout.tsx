import React from "react";
import NavbarTwoColumns from "./components/navigation/NavbarTwoColumns";
import { Logo } from "./templates/Logo";
import { Footer } from "./templates/Footer";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import JsonLdHome from "./components/jsonLd/JsonLdHome";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://www.redisapres.cl"),
  title: {
    absolute: "RED ISAPRES | ATENCIÓN PERSONALIZADA",
    template: "%s  |  Red Isapres",
    default: "Red Isapres",
  },
  description:
    "Planes de Isapre: Colmena, Banmédica, Consalud, Esencial, Más Vida y Vida Trés. Te ofrecemos las más conveniente, mejor salud por el mismo 7%",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={inter.className}>
        <JsonLdHome>
          <div className="w-full bg-background text-foreground">
            <div>
              <NavbarTwoColumns>
                <Logo xl />
              </NavbarTwoColumns>
              {children}
            </div>
          </div>
          <Footer />
        </JsonLdHome>
        <Analytics />
        <GoogleTagManager gtmId="AW-16476061340" />
      <GoogleTagManager gtmId="GT-5R7PHS57" />
      <GoogleTagManager gtmId="G-NC42K5VRBP" />
      </body>
      
    </html>
  );
}
