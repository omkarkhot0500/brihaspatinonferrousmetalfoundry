export const generateMetadata = () => ({
  title: "Casting Materials & Alloys | Brihaspati Non-Ferrous Metal Foundry",
  description: "Explore our range of premium casting materials including aluminium, bronze, and brass alloys for precision industrial applications.",
  keywords: [
    "aluminium alloy casting",
    "bronze material casting",
    "brass components manufacturing",
    "non-ferrous metal alloys",
    "industrial metal casting material"
  ],
  alternates: {
    canonical: "https://brihaspatinonferrousmetalfoundry.vercel.app/casting-material"
  },
  openGraph: {
    title: "Casting Materials & Alloys | Brihaspati Non-Ferrous Metal Foundry",
    description: "Explore our range of premium casting materials including aluminium, bronze, and brass alloys for precision industrial applications.",
    url: "https://brihaspatinonferrousmetalfoundry.vercel.app/casting-material",
    siteName: "Brihaspati Non-Ferrous Metal Foundry",
    images: [
      {
        url: "/assets/CO2Casting.jpg",
        width: 1200,
        height: 630,
        alt: "Metal Casting Process"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
});

export default function CastingMaterialPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Casting Materials & Alloys</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
        We specialize in non-ferrous and ferrous casting materials, ensuring durability and precision for every industrial requirement.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 border-2 border-amber-500 rounded-2xl shadow-xl bg-white hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-amber-600 mb-4 border-b pb-2">Non-Ferrous Casting</h2>
          <ul className="space-y-4">
            <li>
                <a href="/non-ferrous/bronze" className="text-xl font-semibold hover:text-amber-500 block">Bronze Casting Materials</a>
                <p className="text-gray-600">High-grade bronze alloys for wear-resistant components.</p>
            </li>
            <li>
                <a href="/non-ferrous/copper" className="text-xl font-semibold hover:text-amber-500 block">Copper Alloy Casting</a>
                <p className="text-gray-600">Pure copper and copper-based alloys for electrical and thermal applications.</p>
            </li>
          </ul>
        </div>
        
        <div className="p-8 border-2 border-gray-400 rounded-2xl shadow-xl bg-white hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-gray-700 mb-4 border-b pb-2">Ferrous Metal Casting</h2>
          <ul className="space-y-4">
            <li>
                <a href="/ferrous/steel" className="text-xl font-semibold hover:text-blue-600 block">Stainless Steel Casting</a>
                <p className="text-gray-600">Corrosion-resistant steel alloys for critical industrial parts.</p>
            </li>
            <li>
                <a href="/ferrous/nicle" className="text-xl font-semibold hover:text-blue-600 block">Nickel Alloy Casting</a>
                <p className="text-gray-600">Advanced nickel-based alloys for high-temperature and harsh environments.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
