import conn from "../../../components/utils/postgresq_conn";
import { NextRequest, NextResponse } from "next/server";

// Asumiendo que este endpoint solo manejará peticiones GET
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const idnoticia = url.pathname.split("/").pop(); // O alguna lógica similar que refleje tu estructura de ruta

  if (idnoticia) {
    try {
      const article:Article[] = await conn`SELECT * FROM articles WHERE idnoticia = ${idnoticia};`;
      if (article) {
        const content = await conn`SELECT * FROM content_elements WHERE article_id = ${article[0].id} ORDER BY content_order ASC;`
        const fullArticle = { titles: article[0], content: content };
        // Envía la respuesta como JSON con un estado 200
        return NextResponse.json(
          { data: fullArticle },
          {
            status: 200,
          }
        );
      }
    } catch (error) {
      console.error(error);
      // Manejo de errores con un estado 500
      return { error: "Internal Server Error", status: 500}
    }
  }
}
