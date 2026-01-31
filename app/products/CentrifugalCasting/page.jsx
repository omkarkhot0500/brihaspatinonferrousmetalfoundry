import Image from "next/image";

export const metadata = {
  title: "Centrifugal Casting | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "High-integrity centrifugal castings with superior density and mechanical properties.",
};

export default function CentrifugalCasting() {
  const copperImages = [
    "/assets/CentrifugalCasting/cc1.png",
    "/assets/CentrifugalCasting/cc2.jpg",
  ];

  const stainlessImages = [
    "/assets/CentrifugalCasting/sc1.jpg",
    "/assets/CentrifugalCasting/sc2.webp",
    "/assets/CentrifugalCasting/sc3.webp",
  ];

  const ImageGrid = ({ images, alt }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="border rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-50">
            <Image
              src={img}
              alt={alt}
              fill
              className="object-contain"
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
            Centrifugal Casting and Machined Components
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
              Centrifugally cast copper alloy components ensuring dense structure
              and uniform quality. Ideal for cylindrical parts requiring high
              strength and wear resistance.
            </p>

            <ImageGrid
              images={copperImages}
              alt="Copper Alloy Centrifugal Casting"
            />
          </div>

          {/* Stainless Steel */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Stainless Steel Casting and Machined Components
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              Centrifugal stainless steel castings offering superior mechanical
              properties. Commonly used for pipes, sleeves, and rotating
              industrial components.
            </p>

            <ImageGrid
              images={stainlessImages}
              alt="Stainless Steel Centrifugal Casting"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
