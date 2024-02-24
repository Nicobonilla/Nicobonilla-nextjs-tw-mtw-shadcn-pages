"use server";
import Image from "next/image";

type Contenido = {
  id: number;
  article_id: string;
  element_type: string;
  content_order: number;
  content: string | string[];
  group_id?: number;
};

type Titles = {
  id: number;
  urlimg: string;
  h1: string;
  idnoticia: string;
};

type Props = {
  params: {
    data: { titles: Titles; content: Contenido[] };
  };
};

export default async function ArticleLayout({ params }: Props) {
  const { titles, content } = params.data;
  const { h1, urlimg, idnoticia } = titles;
  return (
    <div>
      <div className="relative w-full h-32">
        <Image
          src={urlimg}
          alt={idnoticia}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
      </div>
      <h1 className="text-3xl pt-11 pb-3 font-bold">{h1}</h1>
      {content.map((element, index) => (
        <div key={index}>
          {element.element_type === "H2" && (
            <h2 className="text-lg font-semibold mt-5 mb-2">
              {element.content}
            </h2>
          )}
          {element.element_type === "P" && (
            <p className="text-justify">{element.content}</p>
          )}
          {element.element_type === "VINETA" && (
            <ul className="list-disc pl-12 space-y-2">
              {Array.isArray(element.content) ? (
                element.content.map((item, i) => <li key={i}> {item} </li>)
              ) : (
                <li>{element.content}</li>
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
