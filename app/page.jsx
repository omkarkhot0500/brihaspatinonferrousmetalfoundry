import HomepageClient from "@/components/HomepageClient";

export const generateMetadata = () => ({
  title: "Aluminium Casting Manufacturer in Karnataka | Brihaspati Foundry",
  description: "Leading non-ferrous metal casting manufacturer in Kittur, Belagavi. High-quality aluminium, bronze & brass castings.",
  keywords: [
    "aluminium casting Karnataka",
    "non ferrous foundry India",
    "metal casting Belagavi",
    "CO2 casting manufacturer",
    "industrial casting India",
    "Brihaspati Non-Ferrous Metal Foundry",
  ],
  alternates: {
    canonical: "https://brihaspatinonferrousmetalfoundry.vercel.app/",
  },
  openGraph: {
    title: "Aluminium Casting Manufacturer in Karnataka | Brihaspati Foundry",
    description: "Leading non-ferrous metal casting manufacturer in Kittur, Belagavi. High-quality aluminium, bronze & brass castings.",
    url: "https://brihaspatinonferrousmetalfoundry.vercel.app/",
    siteName: "Brihaspati Non-Ferrous Metal Foundry",
    images: [
      {
        url: "/assets/CO2Casting.jpg",
        width: 1200,
        height: 630,
        alt: "Metal Casting Process",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
});

export default function Home() {
  return <HomepageClient />;
}

