import HomepageClient from "@/components/HomepageClient";

export const metadata = {
  title: "brishpathi Cast Pvt. Ltd. | Non-Ferrous Solutions & Metal Casting Experts",
  description:
    "Leading manufacturer of ferrous & non-ferrous Non-Ferrous, lost wax castings, and feinguss. Quality control at all levels for perfect metal casting solutions.",
  keywords:
    "Non-Ferrous, lost wax casting, metal casting, ferrous casting, non-ferrous casting, feinguss, quality control",
  openGraph: {
    title: "brishpathi Cast Pvt. Ltd. | Non-Ferrous Solutions",
    description:
      "Leading manufacturer of ferrous & non-ferrous Non-Ferrous with severe quality control at all levels.",
    type: "website",
    url: "https://brishpathi.com",
    images: [
      {
        url: "https://brishpathi.com/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Home() {
  return <HomepageClient />;
}
