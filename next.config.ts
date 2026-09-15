import type { NextConfig } from "next";

/** Trailing slashes everywhere so canonical URLs match the sitemap and internal links. */
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
};

export default nextConfig;
