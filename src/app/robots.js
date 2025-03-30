export default function robots() {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";
  return {
    rules: {
      userAgent: "*",
      ...(isProduction
        ? {
            allow: "/",
          }
        : {
            disallow: "/",
          }),
    },
    sitemap: `${process.env.NEXT_PUBLIC_WEB_URL}/sitemap_index.xml`,
  };
}
