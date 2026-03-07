export const siteConfig = {
  name: "Brihaspati Cast Pvt. Ltd.",
  description: "Leading manufacturer of ferrous & non-ferrous lost wax castings, sand casting, and industrial components.",
  url: "https://brihaspati.com",
  ogImage: "https://brihaspati.com/images/logo.png",
  keywords: [
    "Brihaspati Foundry",
    "Metal Casting India",
    "Non-Ferrous Casting",
    "Stainless Steel Casting",
    "Sand Casting",
    "Centrifugal Casting",
    "Gravity Die Casting",
    "CO2 Sand Casting",
    "No-Bake Mold Casting",
    "Copper Alloy Casting",
  ],
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
} = {}) {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description,
    keywords: siteConfig.keywords.join(", "),
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [
        {
          url: image,
        },
      ],
      url: siteConfig.url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [image],
    },
    icons: {
      icon: "/icon.png",
    },
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
