import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
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
    sitemap: `${process.env.NEXT_PUBLIC_WEB_URL}/sitemap.xml`,
  };
}
