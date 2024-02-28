"use server";
import { InformacionIsapresChileItem } from "./InformacionIsapresChileItem";
import { Section } from "../components/layout/Section";
import { Metadata } from "next";
import { NextResponse } from "next/server";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Información sobre el Sistema de Salud Previsional chileno",
    openGraph: {
      images: "/images/logo.svg",
    },
  };
}

export async function getArticles() {
  try {
    const response = await fetch(
      process.env.ROOT_URL_HOST + "api/resume_all_articles",
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error("Network response was not ok.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export default async function Page() {
  const articles: Article[] = await getArticles();
  return (
    <>
      <Section>
        <section className="md:h-full flex items-center text-gray-600">
          <div className="container grid px-5 py-24 mx-auto">
            <div className="text-center mb-12">
              <h5 className="text-base md:text-lg text-indigo-700 mb-1">
                Revisa Nuestras Noticias Recientes
              </h5>
              <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">
                Información Sobre Planes de Isapres
              </h1>
            </div>
            <div className="flex flex-wrap -m-10  justify-center items-center">
              {articles.map((article: Article) => (
                <InformacionIsapresChileItem
                  key={article.id}
                  title={article.h1}
                  description={article.content ? article.content : ""}
                  idNoticia={article.idnoticia}
                  urlImg={article.urlimg}
                />
              ))}
            </div>
          </div>
        </section>
      </Section>
    </>
  );
}
