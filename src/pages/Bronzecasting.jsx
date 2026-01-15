import React from "react";

const Bronzecasting = () => {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-8 px-4 md:py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Bronze Casting
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Brihaspati Non Ferrous Metal Foundry is a trusted manufacturer of
              precision Bronze Castings designed for high wear resistance,
              corrosion resistance, and long service life in critical operating
              environments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our bronze components are widely used in marine, industrial
              machinery, oil &amp; gas, power generation, and water management
              applications where durability and reliability are essential.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Bronze Casting Expertise
            </h2>

            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Comprehensive Bronze Grades
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We manufacture a wide range of bronze alloys including Tin
                Bronze, Aluminum Bronze, Manganese Bronze, Phosphorous Bronze,
                Gun Metal, and Nickel-Aluminum Bronze, each selected to meet
                specific mechanical and environmental requirements.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Precision Casting &amp; Finishing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our bronze castings are produced using Green Sand, CO₂ Moulding,
                No-Bake, and Centrifugal Casting processes, followed by CNC
                machining, heat treatment, and surface finishing to achieve
                tight tolerances and excellent surface quality.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Quality, Reliability &amp; Performance
              </h3>
              <p className="text-gray-700 leading-relaxed">
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
