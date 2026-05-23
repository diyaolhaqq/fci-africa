import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/grant-programs",
  "/research-tracks",
  "/fellows",
  "/apply",
  "/research-outputs",
  "/partners",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fci-africa.vercel.app";

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
