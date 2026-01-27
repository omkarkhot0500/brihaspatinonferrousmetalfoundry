import React from "react";

/* Copper Alloy Casting Images (9) */
import CopperAlloyImage1 from "../assets/GeneralEngineering/ca1.png";
import CopperAlloyImage2 from "../assets/GeneralEngineering/ca2.webp";
import CopperAlloyImage3 from "../assets/GeneralEngineering/ca3.jpg";
import CopperAlloyImage4 from "../assets/GeneralEngineering/ca4.avif";

/* Stainless Steel Casting & Machined Images (9) */
import StainlessMachinedImage1 from "../assets/GeneralEngineering/ss1.jpg";
import StainlessMachinedImage2 from "../assets/GeneralEngineering/ss2.jpg";
import StainlessMachinedImage3 from "../assets/GeneralEngineering/ss3.webp";
import StainlessMachinedImage4 from "../assets/GeneralEngineering/ss4.jpg";

const GeneralEngineeringCasting = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            General Engineering Casting and Machined Components
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Casting Sections */}
        <section className="mb-16 space-y-16">
          {/* Copper Alloy Casting and Machined Components */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Copper Alloy Casting and Machined Components
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              Durable copper alloy components manufactured with high dimensional
              accuracy. Used in engineering applications requiring excellent
              conductivity and corrosion resistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                CopperAlloyImage1,
                CopperAlloyImage2,
                CopperAlloyImage3,
                CopperAlloyImage4,
              ].map((img, i) => (
                <div
  key={i}
  className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300"
>
  <img
    src={img}
    alt="Nickel Aluminium Bronze Casting"
    className="
      w-full 
      h-40 
      sm:h-48 
      md:h-56 
      lg:h-64 
      object-contain 
      bg-gray-50
    "
    loading="lazy"
  />
</div>

              ))}
            </div>
          </div>

          {/* Stainless Steel Casting and Machined Components */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Stainless Steel Casting and Machined Components
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              High-precision stainless steel parts produced through advanced
              casting and machining processes. Suitable for demanding
              industrial, mechanical, and structural applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                StainlessMachinedImage1,
                StainlessMachinedImage2,
                StainlessMachinedImage3,
                StainlessMachinedImage4,
              ].map((img, i) => (
                <div
                  key={i}
                  className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300"
                >
                  <img
                    src={img}
                    alt="Stainless Steel Casting and Machined Component"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneralEngineeringCasting;
