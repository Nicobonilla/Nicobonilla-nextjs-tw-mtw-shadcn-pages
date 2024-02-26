import { NextResponse } from 'next/server';
import conn from '../../components/utils/postgresq_conn';

const { json } = NextResponse;
export async function GET() {
    try {
      const article_list = await conn`SELECT * FROM article_content_view;`;
      console.log("api")
      return json(
        {articles: article_list }, 
        {status: 200 }, // HTTP status code
      );
    } catch (error) {
      console.error(error);
      // Handling any errors with a 500 Internal Server Error response
      return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }