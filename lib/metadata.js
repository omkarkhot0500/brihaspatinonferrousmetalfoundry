export const siteConfig = {
  name: "Brihaspati Non-Ferrous Metal Foundry",
  description: "Leading non-ferrous metal casting manufacturer in Kittur, Belagavi. High-quality aluminium, bronze & brass castings.",
  url: "https://brihaspatinonferrousmetalfoundry.vercel.app",
  ogImage: "/assets/CO2Casting.jpg",
  location: "Kittur, Belagavi – 591115, Karnataka, India",
  keywords: [
    "non ferrous metal foundry India",
    "aluminium casting manufacturer Karnataka",
    "industrial casting Belagavi",
    "metal casting India",
    "CO2 casting manufacturer",
    "foundry in Kittur",
  ],
};


export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  keywords = siteConfig.keywords,
  url = siteConfig.url,
  noIndex = false,
} = {}) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  
  return {
    title: pageTitle,
    description,
    keywords: Array.isArray(keywords) ? keywords : keywords.split(", ").map(k => k.trim()),
    openGraph: {
      title: pageTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name
        },
      ],
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
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

