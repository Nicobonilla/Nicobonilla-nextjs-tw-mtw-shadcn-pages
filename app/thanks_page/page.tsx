"use server";
import { Section } from "../components/layout/Section";
import { Metadata } from "next";
import { NextResponse } from "next/server";
import { Banner } from "../templates/Banner";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Confirmación de envío de datos",
    openGraph: {
      images: "/images/logo.svg",
    },
  };
}

export default async function Page() {
  return (
    <>
     <Section>
        <section className="h-[75vh] flex items-center text-gray-600">
          <div className="container grid px-5 pb-24 mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">
               Gracias por confiar en nosotros, una ejecutiva se contactará con usted
              </h1>
            </div>
          </div>
        </section>
      </Section>
    </>
  );
}
