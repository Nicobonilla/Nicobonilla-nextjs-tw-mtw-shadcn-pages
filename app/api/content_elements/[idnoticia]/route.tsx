import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Utiliza la desestructuración para extraer métodos específicos de NextResponse
const { json } = NextResponse;

// Asumiendo que este endpoint solo manejará peticiones GET
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  console.log(url)
  const idnoticia = url.pathname.split('/').pop(); // O alguna lógica similar que refleje tu estructura de ruta
  try {
    const prisma = new PrismaClient();
    const content = await prisma.content_elements.findMany({
      orderBy : { content_order : 'asc'},
      where: { article_id: idnoticia }},
    );
    
    // Envía la respuesta como JSON con un estado 200
    return json({ data: content }, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    // Manejo de errores con un estado 500
    return json({ error: 'Internal Server Error' }, {
      status: 500,
    });
  }
}
