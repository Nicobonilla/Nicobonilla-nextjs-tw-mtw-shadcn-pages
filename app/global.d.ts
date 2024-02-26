type Article = {
    id: number;
    h1: string;
    idnoticia: string;
    urlimg: string;
    content?: string;
  };

  type Email = {
    nombre : string; 
    rut : string;
    edad : string;
    celular : string;
    comuna : string;
    email : string;
    rentaImponible : string;
    comentario : string;
  }

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