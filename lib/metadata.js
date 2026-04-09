export const siteConfig = {
  name: "Brihaspati Foundry",
  description: "Brihaspati Non-Ferrous Metal Foundry in Kittur, Belagavi offers high-quality stainless steel, copper alloy, and industrial casting solutions.",
  url: "https://www.brihaspatialloys.in",
  ogImage: "https://www.brihaspatialloys.in/images/logo.png",
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
    "CO2 Sand Casting",
    "Gravity Die Casting",
    "Shell Mold Casting",
    "Centrifugal Casting",
    "Kittur",
    "Belagavi",
  ],
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  ogTitle,
  ogDescription,
  image = siteConfig.ogImage,
  noIndex = false,
} = {}) {
  const fullTitle = title ? title : siteConfig.name;

  return {
    title: fullTitle,
    description,
    keywords: siteConfig.keywords.join(", "),
    openGraph: {
      title: ogTitle || fullTitle,
      description: ogDescription || description,
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
      title: ogTitle || fullTitle,
      description: ogDescription || description,
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
