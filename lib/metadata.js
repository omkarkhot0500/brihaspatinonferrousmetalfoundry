export const siteConfig = {
  name: "Brihaspati Cast Pvt. Ltd.",
  description: "Leading manufacturer of ferrous & non-ferrous lost wax castings, sand casting, and industrial components.",
  url: "https://www.brihaspatialloys.in",
  ogImage: "https://www.brihaspatialloys.in/images/logo.png",
  location: "Kittur, Belagavi – 591115, Karnataka, India",
  keywords: [
    "non ferrous metal foundry India",
    "copper casting manufacturer Karnataka",
    "industrial casting Belagavi",
    "metal casting India",
    "CO2 casting manufacturer",
    "foundry in Kittur",
  ],
};


export function constructMetadata({
  title,
  description = siteConfig.description,
  ogTitle,
  ogDescription,
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
      icon: [
        { url: "/icon.png", sizes: "any", type: "image/png" },
        { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-64x64.png", sizes: "64x64", type: "image/png" },
        { url: "/icon-128x128.png", sizes: "128x128", type: "image/png" },
      ],
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
