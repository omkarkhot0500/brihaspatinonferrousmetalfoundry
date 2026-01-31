import Image from "next/image";

export const metadata = {
  title: "Valve Casting | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "High-quality valve castings engineered for critical pressure and performance applications across industries.",
};

export default function ValveCasting() {
  const NABImages = [
    "/assets/valveImages/na.jpg",
    "/assets/valveImages/na1.jpg",
    "/assets/valveImages/NAB.jpg",
    "/assets/valveImages/nb3.webp",
  ];

  const gunMetalImages = [
    "/assets/valveImages/gm1.jpg",
    "/assets/valveImages/gm2.webp",
    "/assets/valveImages/gm3.avif",
    "/assets/valveImages/gm4.webp",
  ];

  const ssImages = [
    "/assets/valveImages/ss1.webp",
    "/assets/valveImages/ss2.jpg",
    "/assets/valveImages/ss3.webp",
    "/assets/valveImages/ss4.webp",
  ];

  const ImageGrid = ({ images, alt }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300"
        >
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={img}
              alt={alt}
              fill
              className="object-cover"
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
            Valve Casting
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Intro */}
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              Brihaspati Non Ferrous Metal Foundry is a reliable manufacturer of high-quality valve castings in India. Our valve casting solutions are engineered to meet stringent performance, pressure, and durability requirements across critical industrial applications.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              With advanced casting processes and strict quality control, we manufacture precision valve components that deliver long service life, dimensional accuracy, and superior corrosion resistance for global customers.
            </p>
          </div>
        </section>

        {/* Casting Sections */}
        <section className="mb-16 space-y-16">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Nickel Aluminium Bronze Casting
            </h2>
            <ImageGrid images={NABImages} alt="Nickel Aluminium Bronze Casting" />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Gun Metal Casting
            </h2>
            <ImageGrid images={gunMetalImages} alt="Gun Metal Casting" />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Stainless Steel Casting
            </h2>
            <ImageGrid images={ssImages} alt="Stainless Steel Casting" />
          </div>
        </section>

        {/* Description */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              We manufacture a wide range of valve castings including butterfly
              valves, gate valves, check valves...
            </p>

            <p>
              The Indian valve casting industry has evolved significantly...
            </p>

            <p>
              Our valve castings are produced from superior-grade materials...
            </p>
          </div>
        </section>

        {/* Reasons */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Reasons to Buy Valve Castings from Brihaspati Foundry
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              One of the key reasons customers trust us...
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Certified and high-quality raw materials</li>
              <li>Strict dimensional and metallurgical inspection</li>
              <li>Advanced casting and machining capabilities</li>
              <li>Consistent quality with full traceability</li>
              <li>Reliable delivery and technical support</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
