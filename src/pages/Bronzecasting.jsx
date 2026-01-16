import React from "react";

const Bronzecasting = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            Bronze Casting
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Introduction */}
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
              Brihaspati Non Ferrous Metal Foundry is a trusted manufacturer of
              precision Bronze Castings designed for high wear resistance,
              corrosion resistance, and long service life in critical operating
              environments.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our bronze components are widely used in marine, industrial
              machinery, oil &amp; gas, power generation, and water management
              applications where durability and reliability are essential.
            </p>
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
              Bronze Casting Expertise
            </h2>

            {/* Grades */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Comprehensive Bronze Grades
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We manufacture a wide range of bronze alloys including Tin
                Bronze, Aluminum Bronze, Manganese Bronze, Phosphorous Bronze,
                Gun Metal, and Nickel-Aluminum Bronze, each selected to meet
                specific mechanical and environmental requirements.
              </p>
            </div>

            {/* Precision */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Precision Casting &amp; Finishing
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our bronze castings are produced using Green Sand, CO₂ Moulding,
                No-Bake, and Centrifugal Casting processes, followed by CNC
                machining, heat treatment, and surface finishing to achieve
                tight tolerances and excellent surface quality.
              </p>
            </div>

            {/* Quality */}
            <div className="mb-6 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Quality, Reliability &amp; Performance
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                With rigorous inspection, non-destructive testing, and full
                material traceability, we ensure every bronze casting meets
                international quality standards and delivers consistent,
                reliable performance in service.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Bronzecasting;
