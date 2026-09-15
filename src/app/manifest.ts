import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return { name: site.legalName, short_name: site.name, description: "Asset-based trucking and same-day freight across Florida.", start_url: "/", display: "browser", background_color: "#ffffff", theme_color: "#012355", icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }, { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] };
}
