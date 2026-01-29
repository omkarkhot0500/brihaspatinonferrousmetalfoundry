export const metadata = {
  title: "Copper Alloy Casting | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "Premium copper alloy castings with excellent corrosion and wear resistance for industrial applications.",
};

export default function CopperCasting() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            Copper Alloy Casting
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              Brihaspati Non Ferrous Metal Foundry is a premier manufacturer of
              high-quality copper alloy castings in India. Our copper alloy
              casting solutions are engineered for superior corrosion
              resistance, excellent wear resistance, and high thermal and
              electrical conductivity across critical industrial applications.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              With advanced casting processes and strict quality control, we
              manufacture precision copper alloy components that deliver long
              service life, dimensional accuracy, and superior performance for
              global customers in marine, industrial, and process applications.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
