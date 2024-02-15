import React from 'react';
import { Background } from './components/background/Background';
import NavbarTwoColumns from './components/navigation/NavbarTwoColumns';
import { Logo } from './templates/Logo';
import { Banner } from './templates/Banner';
import { Footer } from './templates/Footer';
import { Inter, Manrope } from "next/font/google";
import './globals.css'
import type { Metadata } from 'next';
import Script from "next/script";

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
  title: { absolute: 'RED ISAPRES | ATENCIÓN PERSONALIZADA',
    template: '%s  |  Red Isapres',
    default: 'Red Isapres'},
  description: 'Planes de Isapre: Colena, Banmédica, Consalud, Esencial, Más Vida y Vida Trés. Te ofrecemos las más conveniente, mejor salud por el mismo 7%',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={inter.className}>
      <div className="w-full bg-background text-foreground">
        <div>
          <NavbarTwoColumns>
            <Logo xl /> 
          </NavbarTwoColumns>
        {children}
        </div>
      </div>
      <Footer />
        </body>
    </html>
  )
}
