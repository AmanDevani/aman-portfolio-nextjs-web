import type { NextConfig } from "next";

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: ONE_YEAR_IN_SECONDS,
  },
  async headers() {
    return [
      {
        // Original files in /public/projects are served with the same long-lived cache
        source: "/projects/:file*.(png|jpg|jpeg|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
