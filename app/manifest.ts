import { WEBSITE_DETAILS } from "@/lib/constant";

export default async function manifest() {
  return {
    name: WEBSITE_DETAILS.SITE_NAME,
    short_name: WEBSITE_DETAILS.SITE_NAME,
    description: WEBSITE_DETAILS.DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon-96X96.png",
        type: "image/png",
        sizes: "96X96",
      },
    ],
  };
}
