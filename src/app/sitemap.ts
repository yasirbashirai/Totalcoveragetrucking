import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ["/", "/services/", "/about-us/", "/service-area/", "/get-a-quote/", "/careers/", "/reviews/", "/blog/", "/faq/", "/contact/"];
  return [
    ...core.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority: p === "/" ? 1 : p === "/get-a-quote/" ? 0.9 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/${s.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}/`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
