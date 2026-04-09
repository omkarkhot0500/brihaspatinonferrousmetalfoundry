import HomepageClient from "@/components/HomepageClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Non-Ferrous Metal Foundry in Kittur, Belagavi | Brihaspati Foundry",
  description: "Brihaspati Non-Ferrous Metal Foundry in Kittur, Belagavi offers high-quality stainless steel, copper alloy, and industrial casting solutions.",
  ogTitle: "Non-Ferrous Metal Foundry in Kittur, Belagavi",
  ogDescription: "High-quality casting solutions in Kittur, Belagavi including stainless steel and copper alloy casting.",
});

export default function Home() {
  return <HomepageClient />;
}
