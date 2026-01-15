import React from 'react';

const Steelcasting = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header with semantic HTML for SEO */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-8 px-4 md:py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Brihaspati Non Ferrous Metal Foundry
          </h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Company Introduction Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Established in 2023, M/s. Brihaspati Non Ferrous Metal Foundry is a
              technologically advanced manufacturing unit dedicated to the
              design, engineering, and production of high-integrity Green Sand,
              CO₂ Mould, No-Bake Mould, and Centrifugal Castings. We specialize in
              two critical material families—Copper-Based Alloys and Stainless
              Steels—serving industries where performance, corrosion resistance,
              and durability are non-negotiable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a 10,000 sq. mt. state-of-the-art manufacturing facility
              located in Kittur, Belagavi, Karnataka, India, we operate as a
              trusted global supply chain partner for demanding applications,
              ranging from marine and oil &amp; gas to aerospace and chemical
              processing.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Why Choose Brihaspati Non Ferrous Metal Foundry?
            </h2>
            <p className="text-gray-700 mb-8">
              Our operations are guided by a strong core philosophy of Quality,
              Innovation, Precision, and Partnership. Below are the key reasons
              global customers trust us for critical casting solutions:
            </p>

            {/* Core Competency Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Material Expertise &amp; Core Competencies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We possess deep metallurgical expertise in Copper Alloy Castings
                such as Tin Bronzes, Aluminum Bronzes, Manganese Bronzes,
                Phosphorous Bronze, Gun Metal, high-strength Brasses, and
                specialty alloys including Nickel Aluminum Bronze, Silicon
                Bronze, and Beryllium Copper. These materials deliver excellent
                corrosion resistance, high wear resistance, superior
                machinability, and strong thermal and electrical conductivity.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our Stainless Steel casting capabilities include Austenitic,
                Duplex, Martensitic, Nickel Alloy, and Precipitation Hardening
                grades such as 17-4PH. These castings provide exceptional
                corrosion and oxidation resistance, high strength across wide
                temperature ranges, and excellent impact resistance for critical
                applications.
              </p>
            </div>

            {/* Manufacturing Capability Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Advanced Casting &amp; Manufacturing Processes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We employ the most suitable casting process based on component
                size, complexity, and application requirements. Our capabilities
                include Green Sand Casting for large and complex geometries,
                CO₂ Moulding for near-net-shape components with tight tolerances,
                No-Bake Moulding for large and intricate parts, and Centrifugal
                Casting for high-integrity cylindrical components.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our integrated value-added services include in-house pattern and
                mould design, CNC machining and finishing, non-destructive
                testing (X-ray, dye penetrant, ultrasonic), heat treatment,
                metallurgical testing, welding, assembly, pressure testing, and
                complete material traceability with certified test reports.
              </p>
            </div>

            {/* Reliability & Quality Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Quality Assurance, Reliability &amp; Trust
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Quality is engineered into every stage of our process. We follow
                robust quality systems supported by advanced statistical process
                control, first article inspection, and simulation-based gating
                and risering design. Our on-site metallurgical laboratory is
                equipped for chemical analysis using a Metavision 1008i
                spectrometer and mechanical testing.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                With full traceability from raw material melt to final shipment,
                we ensure consistent, repeatable quality that meets global
                standards and customer specifications, making us a reliable
                long-term manufacturing partner.
              </p>
            </div>

            {/* Customized Solutions Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Engineering Partnership &amp; Customized Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We work closely with our customers from the design stage to
                optimize castability, enhance performance, and reduce overall
                costs. Our team delivers customized casting and machining
                solutions tailored to specific application needs while
                maintaining competitive pricing and on-time global delivery.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Steelcasting;
