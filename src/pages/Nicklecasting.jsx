import React from "react";

const Nickecasting = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header with semantic HTML for SEO */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-8 px-4 md:py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Nickel Alloy Casting
          </h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Company Introduction Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Brihaspati Non Ferrous Metal Foundry is a specialized manufacturer
              of high-performance Nickel Alloy Castings designed for extreme
              operating conditions. Established in 2023, we deliver precision
              cast nickel-based components that offer superior resistance to
              high temperatures, corrosion, oxidation, and mechanical stress.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our nickel alloy castings are engineered for critical applications
              across oil &amp; gas, chemical processing, power generation,
              aerospace, and marine industries—where reliability, strength, and
              long service life are essential.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Why Choose Brihaspati for Nickel Alloy Castings?
            </h2>
            <p className="text-gray-700 mb-8">
              Our expertise in advanced metallurgy, controlled manufacturing
              processes, and strict quality assurance makes us a trusted partner
              for high-integrity nickel alloy components.
            </p>

            {/* Material Expertise Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Nickel Alloy Material Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We manufacture a wide range of nickel alloy castings including
                Inconel®, Hastelloy®, Monel®, and other high-nickel alloys
                developed for extreme service environments. These alloys provide
                exceptional resistance to heat, aggressive chemicals, seawater,
                and high-pressure conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Key properties delivered include outstanding creep strength,
                excellent fatigue resistance, superior corrosion and oxidation
                resistance, and structural stability at elevated temperatures.
              </p>
            </div>

            {/* Manufacturing Processes Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Advanced Casting &amp; Manufacturing Processes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We employ carefully selected casting processes to meet the
                demanding requirements of nickel alloys. Our capabilities
                include Green Sand Casting for robust components, CO₂ Moulding
                for near-net-shape precision parts, No-Bake Moulding for large
                and complex geometries, and Centrifugal Casting for
                high-integrity cylindrical components.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Each process is supported by in-house pattern design, CNC
                machining, heat treatment, and controlled finishing to ensure
                dimensional accuracy and metallurgical integrity.
              </p>
            </div>

            {/* Quality & Reliability Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Quality Assurance &amp; Technical Reliability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Quality is embedded at every stage of nickel alloy casting
                production. Our quality systems include chemical analysis,
                mechanical testing, non-destructive testing (X-ray, ultrasonic,
                dye penetrant), and full material traceability from melt to
                final dispatch.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                With rigorous process control and repeatable manufacturing
                practices, we ensure every casting consistently meets
                international standards and customer specifications.
              </p>
            </div>

            {/* Engineering Partnership Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Engineering Partnership &amp; Customized Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We collaborate closely with customers from the design stage to
                optimize alloy selection, improve castability, reduce lifecycle
                costs, and enhance component performance. Our customized nickel
                alloy casting solutions are tailored to meet exact application
                demands while ensuring timely global delivery.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Nickecasting;
