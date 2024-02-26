"use server";
import { InformacionIsapresChileItem } from "./InformacionIsapresChileItem";
import { Section } from "../components/layout/Section";
import { Metadata } from "next";
import { NextResponse } from "next/server";

const { json } = NextResponse;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Información sobre el Sistema de Salud Previsional chileno",
    openGraph: {
      images: "/images/logo.svg",
    },
  };
}

const getResumeArticles = async () => {
  try {
    const content_elements = await fetch(
      process.env.ROOT_URL_HOST + "api/resume_all_articles",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 100 },
      }
    );
    return await content_elements.json();
  } catch (error) {
    console.error(error);
    return json(
      { error: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
};

export default async function Page() {
  const {articles} = await getResumeArticles();
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
                  description={article.content ? article.content : ''}
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
