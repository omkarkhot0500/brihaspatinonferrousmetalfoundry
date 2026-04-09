export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/products",
          "/casting-material"
        ],
        disallow: [
          "/certification",
          "/company",
          "/our-process",
          "/quality-control",
          "/mission-vision",
          "/api",
          "/admin",
          "/_next"
        ]
      }
    ],
    sitemap: "https://www.brihaspatialloys.in/sitemap.xml"
  };
}
