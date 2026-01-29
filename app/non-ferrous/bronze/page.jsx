export const metadata = {
  title: "Bronze Casting | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "High-quality bronze castings offering excellent strength, corrosion resistance, and machinability.",
};

export default function BronzeCasting() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            Bronze Casting
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <section className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              Brihaspati Non Ferrous Metal Foundry specializes in manufacturing
              premium bronze castings with exceptional strength, corrosion
              resistance, and machinability. Our bronze casting solutions are
              designed for demanding industrial, marine, and commercial
              applications requiring superior material properties.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              With advanced casting processes and rigorous quality control, we
              produce precision bronze components that ensure long-term
              reliability, dimensional accuracy, and excellent performance for
              global customers.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
