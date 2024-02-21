export default function JsonLdHome({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "www.redisapres.cl",
    name: "Red Isapres",
    description: "",
    publisher: {
      "@type": "Organization",
      name: "Red Isapres",
      logo: {
        "@type": "ImageObject",
        url: "/images/logo.jpg",
      },
    },
  };

  return (
    <>
    <script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
      {children}
    </>
  );
}
