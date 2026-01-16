import React from "react";

const ValveCasting = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            Valve Casting
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Introduction */}
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              Brihaspati Non Ferrous Metal Foundry is a reliable manufacturer of
              high-quality valve castings in India. Our valve casting solutions
              are engineered to meet stringent performance, pressure, and
              durability requirements across critical industrial applications.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              With advanced casting processes and strict quality control, we
              manufacture precision valve components that deliver long service
              life, dimensional accuracy, and superior corrosion resistance for
              global customers.
            </p>
          </div>
        </section>

        {/* Image Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
                <img
                  src={`/images/valve/valve-${i + 1}.jpg`}
                  alt="Valve Casting Component"
                  className="w-full h-32 sm:h-40 md:h-44 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Valve Casting Description */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              We manufacture a wide range of valve castings including butterfly
              valves, gate valves, check valves, plug valves, ball valves, valve
              bodies, valve bonnets, discs, and flanges. Our cast valves are
              widely used in commercial, industrial, and infrastructure
              applications.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              The Indian valve casting industry has evolved significantly, and
              Brihaspati Non Ferrous Metal Foundry stands at the forefront by
              delivering premium-quality valve castings using proven metallurgy
              and modern manufacturing practices.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Our valve castings are produced from superior-grade materials and
              undergo rigorous inspection to ensure optimal performance,
              longevity, and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Reasons Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Reasons to Buy Valve Castings from Brihaspati Foundry
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              One of the key reasons customers trust us is our commitment to
              using certified raw materials, controlled production processes,
              and multi-stage quality inspection.
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

        {/* Customized Services */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Customized Valve Casting Services
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              We offer customized valve casting solutions based on customer
              drawings, material specifications, and performance requirements.
              Our engineering team works closely with clients to deliver
              application-specific casting solutions.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
              Types of Valve Castings We Offer
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Ball Valve Casting</li>
              <li>Butterfly Valve Casting</li>
              <li>Gate Valve Casting</li>
              <li>Check Valve Casting</li>
              <li>Plug Valve Casting</li>
              <li>Control Valve Casting</li>
            </ul>
          </div>
        </section>

        {/* Ball Valve Casting */}
        <section className="mb-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              Ball Valve Casting
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Ball valve casting is a precision manufacturing process used to
              produce durable ball valves that control fluid flow in pipelines.
              These valves are widely used in oil &amp; gas, chemical
              processing, power generation, agriculture, and water treatment.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Our ball valve castings offer excellent strength, dimensional
              accuracy, and customization flexibility, making them suitable for
              high-volume and critical applications.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ValveCasting;
