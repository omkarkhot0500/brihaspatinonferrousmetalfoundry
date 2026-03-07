import HomepageClient from "@/components/HomepageClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Precision Metal Casting Solutions",
  description: "Leading manufacturer of Brihaspati Non-Ferrous and stainless steel castings. Quality-driven foundry solutions in India since 2026.",
});

export default function Home() {
  return <HomepageClient />;
}
