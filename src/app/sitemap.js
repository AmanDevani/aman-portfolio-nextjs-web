import env from "@/env";

export default function sitemap() {
  return [
    {
      url: env.NEXT_PUBLIC_WEB_URL,
      lastModified: new Date(),
    },
  ];
}
