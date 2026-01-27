import React from "react";

/* Copper Alloy – Centrifugal Casting Images (9) */
import CopperCentrifugal1 from "../assets/CentrifugalCasting/cc1.png";
import CopperCentrifugal2 from "../assets/CentrifugalCasting/cc2.jpg";
import CopperCentrifugal3 from "../assets/CentrifugalCasting/cc3.png";
import CopperCentrifugal4 from "../assets/CentrifugalCasting/cc4.webp";

/* Stainless Steel – Centrifugal Casting Images (9) */
import StainlessCentrifugal1 from "../assets/CentrifugalCasting/sc1.jpg";
import StainlessCentrifugal2 from "../assets/CentrifugalCasting/sc2.webp";
import StainlessCentrifugal3 from "../assets/CentrifugalCasting/sc3.webp";
import StainlessCentrifugal4 from "../assets/CentrifugalCasting/sc4.webp";

const CentrifugalCasting = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            Centrifugal Casting and Machined Components
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <section className="mb-16 space-y-16">

          {/* Copper Alloy Casting */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Copper Alloy Casting and Machined Components
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              Centrifugally cast copper alloy components ensuring dense structure
              and uniform quality. Ideal for cylindrical parts requiring high
              strength and wear resistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                CopperCentrifugal1,
                CopperCentrifugal2,
                CopperCentrifugal3,
                CopperCentrifugal4,
              ].map((img, i) => (
                <div
                  key={i}
                  className="border rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt="Copper Alloy Centrifugal Casting"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain bg-gray-50"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stainless Steel Casting */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Stainless Steel Casting and Machined Components
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              Centrifugal stainless steel castings offering superior mechanical
              properties. Commonly used for pipes, sleeves, and rotating
              industrial components.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                StainlessCentrifugal1,
                StainlessCentrifugal2,
                StainlessCentrifugal3,
                StainlessCentrifugal4,
              ].map((img, i) => (
                <div
                  key={i}
                  className="border rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt="Stainless Steel Centrifugal Casting"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain bg-gray-50"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default CentrifugalCasting;
