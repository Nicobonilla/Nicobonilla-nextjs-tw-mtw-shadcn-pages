import { MetadataRoute } from "next";
import { getArticles }  from "./page";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles()

  return articles.map((article: Article) => ({
    url: `redisapres.cl/informacion-isapres-chile/${article.idnoticia}`,
    lastModified: new Date().toISOString(),
  }))
}