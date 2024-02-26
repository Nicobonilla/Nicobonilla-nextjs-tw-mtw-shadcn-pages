import conn from "../../components/utils/postgresq_conn";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const article_list = await conn`SELECT * FROM article_content_view;`;
    return new NextResponse(JSON.stringify(article_list));
  } catch (error) {
    console.error(error);
    // Handling any errors with a 500 Internal Server Error response
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
