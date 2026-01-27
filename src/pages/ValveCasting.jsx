import React from "react";
import NickelAluminiumBronzeCastingimage1 from "../assets/valveImages/na.jpg";
import NickelAluminiumBronzeCastingimage2 from "../assets/valveImages/na1.jpg";
import NickelAluminiumBronzeCastingimage3 from "../assets/valveImages/NAB.jpg";
import NickelAluminiumBronzeCastingimage4 from "../assets/valveImages/nb3.webp";
import GunMetalCastingimage1 from "../assets/valveImages/gm1.jpg";
import GunMetalCastingimage2 from "../assets/valveImages/gm2.webp";
import GunMetalCastingimage3 from "../assets/valveImages/gm3.avif";
import GunMetalCastingimage4 from "../assets/valveImages/gm4.webp";
import StainlessSteelCastingimage1 from "../assets/valveImages/ss1.webp";
import StainlessSteelCastingimage2 from "../assets/valveImages/ss2.jpg";
import StainlessSteelCastingimage3 from "../assets/valveImages/ss3.webp";
import StainlessSteelCastingimage4 from "../assets/valveImages/ss4.webp";

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

        {/* Casting Image Sections */}
        <section className="mb-16 space-y-16">
          {/* Nickel Aluminium Bronze Casting */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Nickel Aluminium Bronze Casting
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                NickelAluminiumBronzeCastingimage1,
                NickelAluminiumBronzeCastingimage2,
                NickelAluminiumBronzeCastingimage3,
                NickelAluminiumBronzeCastingimage4,
              ].map((img, i) => (
                <div
                  key={i}
                  className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300"
                >
                  <img
                    src={img}
                    alt="Nickel Aluminium Bronze Casting"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gun Metal Casting */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Gun Metal Casting
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                GunMetalCastingimage1,
                GunMetalCastingimage2,
                GunMetalCastingimage3,
                GunMetalCastingimage4,
              ].map((img, i) => (
                <div
                  key={i}
                  className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300"
                >
                  <img
                    src={img}
                    alt="Gun Metal Casting"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stainless Steel Casting */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Stainless Steel Casting
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                StainlessSteelCastingimage1,
                StainlessSteelCastingimage2,
                StainlessSteelCastingimage3,
                StainlessSteelCastingimage4,
              ].map((img, i) => (
                <div
                  key={i}
                  className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300"
                >
                  <img
                    src={img}
                    alt="Stainless Steel Casting"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
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
      </main>
    </div>
  );
};

export default ValveCasting;
