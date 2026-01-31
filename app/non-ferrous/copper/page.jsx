export const metadata = {
  title: "Copper Alloy Casting | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "Premium copper alloy castings with excellent corrosion, wear resistance, and conductivity for industrial applications.",
};

export default function Coppercasting() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            Copper Alloy Casting
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Introduction */}
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
              Brihaspati Non Ferrous Metal Foundry specializes in high-quality
              Copper Alloy Castings engineered for demanding industrial
              applications. Our copper alloy components are manufactured to
              deliver excellent corrosion resistance, wear resistance, and
              superior thermal and electrical conductivity.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Leveraging advanced casting technologies and deep metallurgical
              expertise, we serve global industries such as marine, oil &amp;
              gas, power generation, water &amp; wastewater, and heavy
              engineering.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
              Our Copper Alloy Capabilities
            </h2>

            {/* Alloys */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Wide Range of Copper-Based Alloys
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our expertise includes Tin Bronzes, Aluminum Bronzes, Manganese
                Bronzes, Phosphorous Bronze, Gun Metal, high-strength Yellow
                Brasses, Leaded Brasses, and specialty alloys such as
                Nickel-Aluminum Bronze, Silicon Bronze, and Beryllium Copper.
              </p>
            </div>

            {/* Manufacturing */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Advanced Manufacturing &amp; Quality Assurance
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We utilize Green Sand, CO₂ Moulding, No-Bake, and Centrifugal
                Casting processes supported by in-house pattern design, CNC
                machining, heat treatment, and non-destructive testing to ensure
                dimensional accuracy and consistent quality.
              </p>
            </div>

            {/* Custom Solutions */}
            <div className="mb-6 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Customized Engineering Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our engineering team collaborates closely with customers to
                optimize alloy selection and component design, delivering
                customized copper alloy casting solutions with full material
                traceability and global delivery capability.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
