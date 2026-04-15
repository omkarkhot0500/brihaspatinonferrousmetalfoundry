export default function sitemap() {
  const baseUrl = "https://brihaspatialloys.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${baseUrl}/casting-material`,
      lastModified: new Date(),
      priority: 0.8
    }
  ];
}