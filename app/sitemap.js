import { locations } from "@/lib/locations";

export default function sitemap() {
  const baseUrl = "https://www.brihaspatialloys.in";

  // Core Pages
  const corePages = ["", "/about", "/contact", "/certification", "/application"];

  // Category Pages
  const categoryPages = [
    "/ferrous/steel",
    "/ferrous/nicle",
    "/non-ferrous/copper",
    "/non-ferrous/bronze",
  ];

  // Product Pages
  const productPages = [
    "/products/valve",
    "/products/generalengineeringcasting",
    "/products/CentrifugalCasting",
    "/products/GravityDieCasting",
    "/products/ShellMouldCasting",
    "/products/CO2MouldCasting",
    "/products/NoBakeMouldCasting",
  ];

  // Location Pages
  const locationPages = locations.map((loc) => `/locations/${loc.slug}`);

  const allRoutes = [...corePages, ...categoryPages, ...productPages, ...locationPages];


  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
