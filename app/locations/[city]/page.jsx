import { locations } from "@/lib/locations";
import HomepageClient from "@/components/HomepageClient";
import { constructMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);

  if (!location) return {};

  return constructMetadata({
    title: `Leading Metal Casting Foundry in ${location.name}, ${location.region}`,
    description: `Expert non-ferrous and stainless steel casting solutions in ${location.name}. Brihaspati Foundry provides high-precision industrial components for businesses in ${location.region}.`,
  });
}

export default async function LocationPage({ params }) {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);

  if (!location) {
    notFound();
  }

  return (
    <>
      {/* Dynamic SEO Headline for the specific city */}
      <div className="bg-amber-500 py-4 text-center text-white font-bold text-sm uppercase tracking-widest">
        Serving Industrial Partners in {location.name}, {location.region}
      </div>
      <HomepageClient />
      
      {/* Regional SEO Content Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Your Trusted Casting Partner in {location.name}
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Businesses in {location.name}, {location.region} looking for high-quality non-ferrous casting solutions can rely on Brihaspati Non-Ferrous Metal Foundry. We specialize in providing precision-engineered components across a variety of industries, ensuring that our partners in {location.name} receive products that meet international standards of quality and durability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-slate-800 mb-3 text-lg">Local Logistics</h3>
              <p className="text-slate-600 text-sm">
                Strategically located to ensure efficient shipping and logistics to industrial zones in and around {location.name}.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-slate-800 mb-3 text-lg">Industry Focus</h3>
              <p className="text-slate-600 text-sm">
                Supporting {location.name}'s growing industrial sector with specialized casting processes like CO₂ sand casting and centrifugal casting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
