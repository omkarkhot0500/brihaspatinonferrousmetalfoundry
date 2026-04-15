export const generateMetadata = () => ({
  title: "Precision Metal Casting Products | Brihaspati Foundry",
  description: "Explore our range of high-quality casting products including valve casting, centrifugal casting, and custom engineering solutions.",
  keywords: [
    "copper castings",
    "bronze casting manufacturer",
    "brass casting India",
    "custom metal casting",
    "valve casting India",
    "Brihaspati Foundry products"
  ],
  alternates: {
    canonical: "https://brihaspatialloys.in/products"
  },
  openGraph: {
    title: "Precision Metal Casting Products | Brihaspati Foundry",
    description: "Explore our range of high-quality casting products including valve casting, centrifugal casting, and custom engineering solutions.",
    url: "https://brihaspatialloys.in/products",
    siteName: "Brihaspati Non-Ferrous Metal Foundry",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Precision Metal Casting"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
});

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Precision Metal Casting Products</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
        Brihaspati Non-Ferrous Metal Foundry provides high-quality industrial casting solutions for various sectors. Our range includes precision valve castings, centrifugal castings, and many more engineered components.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Valve Casting", link: "/products/valve" },
          { name: "Centrifugal Casting", link: "/products/CentrifugalCasting" },
          { name: "Gravity Die Casting", link: "/products/GravityDieCasting" },
          { name: "Shell Mould Casting", link: "/products/ShellMouldCasting" },
          { name: "CO2 Mould Casting", link: "/products/CO2MouldCasting" },
          { name: "No Bake Mould Casting", link: "/products/NoBakeMouldCasting" }
        ].map((product) => (
          <a key={product.name} href={product.link} className="p-6 border rounded-lg hover:shadow-lg transition-shadow border-amber-100 bg-white">
            <h2 className="text-xl font-semibold text-amber-600 mb-2">{product.name}</h2>
            <p className="text-gray-600">High-precision foundry solutions tailored for industrial requirements.</p>
          </a>
        ))}
      </div>
    </div>
  );
}
