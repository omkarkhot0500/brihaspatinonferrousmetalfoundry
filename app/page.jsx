import HomepageClient from "@/components/HomepageClient";

export const generateMetadata = () => ({
  title: "Brihaspati Non-Ferrous Metal Foundry | Belagavi",
  description: "Leading non-ferrous metal casting manufacturer in Kittur, Belagavi. High-quality copper, bronze & brass castings.",
  keywords: [
    "copper casting Karnataka",
    "non ferrous foundry India",
    "metal casting Belagavi",
    "CO2 casting manufacturer",
    "industrial casting India",
    "Brihaspati Non-Ferrous Metal Foundry",
  ],
  alternates: {
    canonical: "https://brihaspatialloys.in/",
  },
  openGraph: {
    title: "Brihaspati Non-Ferrous Metal Foundry | Belagavi",
    description: "Leading non-ferrous metal casting manufacturer in Kittur, Belagavi. High-quality copper, bronze & brass castings.",
    url: "https://brihaspatialloys.in/",
    siteName: "Brihaspati Non-Ferrous Metal Foundry",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Brihaspati Non-Ferrous Metal Foundry Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
});

export default function Home() {
  return <HomepageClient />;
}

