"use server";
import { Section } from "../../components/layout/Section";
import ArticleLayout from "./ArticleLayout";
import { Metadata, ResolvingMetadata } from "next";
import { NextResponse } from "next/server";

type Props = {
  params: {
    id_noticia: string;
    data: { titles: Titles; content: Contenido[] };
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { titles } = await getArticle(params.id_noticia);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: await titles.h1,
    openGraph: {
      images: [titles.urlimg, ...previousImages],
    },
  };
}

// STATIC SITE GENERATION SSG
// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const posts = await fetch(process.env.ROOT_URL_HOST+"api/resume_all_articles"
//   ).then((res) => res.json());
//   console.log(posts.map((article: Titles) => ({
//     id_noticia: article.idnoticia,
//   })));
//   return posts.map((article: Titles) => ({
//     id_noticia: article.idnoticia,
//   }));
// }

async function getArticle(id_noticia: string) {
  try {
    const response = await fetch(
      `${process.env.ROOT_URL_HOST}api/articles/${id_noticia}`,
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

// SERVER SIDE RENDER SSR
export default async function Page({ params }: Props) {
  const { id_noticia } = params;
  const data = await getArticle(id_noticia);
  return (
    <Section add="py-0">
      <ArticleLayout params={data} />
    </Section>
  );
}
