export const metadata = {
  title: "About Us | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "Learn about Brihaspati's advanced manufacturing facility, expertise in non-ferrous and stainless steel castings, and commitment to quality.",
};

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">About</h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              About Brihaspati Non Ferrous Metal Foundry
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Established in 2023, Brihaspati Non Ferrous Metal Foundry is a
              technologically advanced manufacturing unit specializing in
              high-integrity non-ferrous and stainless steel castings. We focus
              on delivering precision-engineered components that meet global
              quality standards.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our expertise spans Green Sand casting, CO₂ molding, No-Bake
              molding, and Centrifugal casting, serving industries where
              reliability, corrosion resistance, and durability are critical.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With a 10,000 sq. mt. facility in Kittur, Belagavi, Karnataka, we
              combine modern infrastructure, skilled professionals, and strict
              quality control to support customers across global markets.
            </p>
          </div>

          {/* Right Highlight Box */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 italic leading-relaxed">
              "Driven by quality, innovation, and precision, we aim to be a
              trusted global partner for high-performance casting solutions."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
