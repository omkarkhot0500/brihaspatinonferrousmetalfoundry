import Image from "next/image";

export const metadata = {
  title:
    "General Engineering Casting | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "Versatile general engineering castings for a wide range of industrial and commercial applications.",
};

export default function GeneralEngineeringCasting() {
  const copperAlloyImages = [
    "/assets/GeneralEngineering/ca1.jpg",
    "/assets/GeneralEngineering/ca2.webp",
    "/assets/GeneralEngineering/ca3.jpg",
    "/assets/GeneralEngineering/ca4.avif",
  ];

  const stainlessImages = [
    "/assets/GeneralEngineering/sc1.png",
    "/assets/GeneralEngineering/sc2.png",
    "/assets/GeneralEngineering/sc3.png",
    "/assets/CentrifugalCasting/sc2.webp",
  ];

  const ImageGrid = ({ images, alt, contain }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300"
        >
          <div
            className={`relative w-full ${
              contain ? "h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-50" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={img}
              alt={alt}
              fill
              className={contain ? "object-contain" : "object-cover"}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="font-sans text-gray-800">
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            General Engineering Casting and Machined Components
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <section className="mb-16 space-y-16">
          {/* Copper Alloy */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Copper Alloy Casting and Machined Components
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              Durable copper alloy components manufactured with high dimensional
              accuracy. Used in engineering applications requiring excellent
              conductivity and corrosion resistance.
            </p>

            <ImageGrid
              images={copperAlloyImages}
              alt="Copper Alloy Casting Component"
              contain
            />
          </div>

          {/* Stainless Steel */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Stainless Steel Casting and Machined Components
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              High-precision stainless steel parts produced through advanced
              casting and machining processes. Suitable for demanding
              industrial, mechanical, and structural applications.
            </p>

            <ImageGrid
              images={stainlessImages}
              alt="Stainless Steel Casting and Machined Component"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
