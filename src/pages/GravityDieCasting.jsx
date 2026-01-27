import React from "react";

/* Gravity Die Casting – Copper Alloy Images (9) */
import GravityCopper1 from "../assets/GravityDieCasting/gd1.avif";
import GravityCopper2 from "../assets/GravityDieCasting/gd2.webp";
import GravityCopper3 from "../assets/GravityDieCasting/gd3.webp";
// import GravityCopper4 from "../assets/GravityDieCasting/cu4.jpg";

const GravityDieCasting = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            Gravity Die Casting
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
              Gravity die cast copper alloy components with excellent surface
              finish and accuracy. Suitable for medium-volume production of
              high-quality engineering parts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                GravityCopper1,
                GravityCopper2,
                GravityCopper3,
                // GravityCopper4,
              ].map((img, i) => (
                <div
                  key={i}
                  className="border rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt="Gravity Die Cast Copper Alloy Component"
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

export default GravityDieCasting;
