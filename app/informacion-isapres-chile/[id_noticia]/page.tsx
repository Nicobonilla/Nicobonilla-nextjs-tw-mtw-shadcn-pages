"use server";
import { Section } from "../../components/layout/Section";
import ArticleLayout from "./ArticleLayout";
import { Metadata, ResolvingMetadata } from "next";
import { NextResponse } from "next/server";

const { json } = NextResponse;

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
  const { data } = await getArticle(params.id_noticia);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: await data.titles,
    openGraph: {
      images: [data.titles.urlimg, ...previousImages],
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
      `${process.env.ROOT_URL_HOST}api/articles/${id_noticia}`
    );
    if (!response.ok) throw new Error("Network response was not ok.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return json(
      { error: "Internal Server Error" },
      {
        status: 500,
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
