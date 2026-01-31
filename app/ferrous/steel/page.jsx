export const metadata = {
  title: "Stainless Steel Casting | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "High-performance stainless steel and copper alloy castings for demanding industrial applications.",
};

export default function Steelcasting() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            Brihaspati Non Ferrous Metal Foundry
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Company Introduction */}
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
              Established in 2023, M/s. Brihaspati Non Ferrous Metal Foundry is a
              technologically advanced manufacturing unit dedicated to the
              design, engineering, and production of high-integrity Green Sand,
              CO₂ Mould, No-Bake Mould, and Centrifugal Castings. We specialize
              in two critical material families—Copper-Based Alloys and
              Stainless Steels—serving industries where performance, corrosion
              resistance, and durability are non-negotiable.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              With a 10,000 sq. mt. state-of-the-art manufacturing facility
              located in Kittur, Belagavi, Karnataka, India, we operate as a
              trusted global supply chain partner for demanding applications,
              ranging from marine and oil &amp; gas to aerospace and chemical
              processing.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
              Why Choose Brihaspati Non Ferrous Metal Foundry?
            </h2>

            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
              Our operations are guided by a strong core philosophy of Quality,
              Innovation, Precision, and Partnership. Below are the key reasons
              global customers trust us for critical casting solutions:
            </p>

            {/* Material Expertise */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Material Expertise &amp; Core Competencies
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We possess deep metallurgical expertise in Copper Alloy Castings
                such as Tin Bronzes, Aluminum Bronzes, Manganese Bronzes,
                Phosphorous Bronze, Gun Metal, high-strength Brasses, and
                specialty alloys including Nickel Aluminum Bronze, Silicon
                Bronze, and Beryllium Copper. These materials deliver excellent
                corrosion resistance, high wear resistance, superior
                machinability, and strong thermal and electrical conductivity.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4 text-sm sm:text-base">
                Our Stainless Steel casting capabilities include Austenitic,
                Duplex, Martensitic, Nickel Alloy, and Precipitation Hardening
                grades such as 17-4PH. These castings provide exceptional
                corrosion and oxidation resistance, high strength across wide
                temperature ranges, and excellent impact resistance for
                critical applications.
              </p>
            </div>

            {/* Manufacturing Capability */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Advanced Casting &amp; Manufacturing Processes
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We employ the most suitable casting process based on component
                size, complexity, and application requirements. Our
                capabilities include Green Sand Casting for large and complex
                geometries, CO₂ Moulding for near-net-shape components with
                tight tolerances, No-Bake Moulding for large and intricate
                parts, and Centrifugal Casting for high-integrity cylindrical
                components.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4 text-sm sm:text-base">
                Our integrated value-added services include in-house pattern
                and mould design, CNC machining and finishing,
                non-destructive testing (X-ray, dye penetrant, ultrasonic),
                heat treatment, metallurgical testing, welding, assembly,
                pressure testing, and complete material traceability with
                certified test reports.
              </p>
            </div>

            {/* Quality */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Quality Assurance, Reliability &amp; Trust
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Quality is engineered into every stage of our process. We
                follow robust quality systems supported by advanced
                statistical process control, first article inspection, and
                simulation-based gating and risering design. Our on-site
                metallurgical laboratory is equipped for chemical analysis
                using a Metavision 1008i spectrometer and mechanical testing.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4 text-sm sm:text-base">
                With full traceability from raw material melt to final
                shipment, we ensure consistent, repeatable quality that meets
                global standards and customer specifications, making us a
                reliable long-term manufacturing partner.
              </p>
            </div>

            {/* Customized Solutions */}
            <div className="mb-6 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Engineering Partnership &amp; Customized Solutions
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
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
}
