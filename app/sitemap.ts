import { MetadataRoute } from 'next';
import { NextResponse } from "next/server";

async function getArticles() {
    try {
        const response = await fetch(
            process.env.ROOT_URL_HOST + "api/resume_all_articles",
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

async function getDynamicSites() {
    const articles = await getArticles()
    return articles.map((article: Article) => ({
        url: `https://redisapres.cl/informacion-isapres-chile/${article.idnoticia}`,
        lastModified: new Date().toISOString(),
        priority: 0.6,
        changeFrequency: 'yearly',
    }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap[]> {
    const dynamicSites = await getDynamicSites();
    const staticSites: MetadataRoute.Sitemap = [
        {
            url: 'http://redisapres.cl',
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://redisapres.cl/informacion-isapres-chile',
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    // Concatenate the static and dynamic site arrays
    return [...staticSites, ...dynamicSites];
}
