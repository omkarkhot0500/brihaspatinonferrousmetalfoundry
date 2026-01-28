import React from "react";

/* Copper Alloy – No Bake (9) */
import Cu1 from "../assets/NoBake/cu1.webp";
import Cu2 from "../assets/NoBake/cu2.webp";
import Cu3 from "../assets/NoBake/cu3.webp";
import Cu4 from "../assets/NoBake/cu4.jpg";

/* Stainless Steel – No Bake (9) */
import Ss1 from "../assets/NoBake/ss1.webp";
import Ss2 from "../assets/NoBake/ss2.png";
import Ss3 from "../assets/NoBake/ss3.jpg";
import Ss4 from "../assets/NoBake/ss4.webp";

const NoBakeMouldCasting = () => {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            No Bake Mould Casting and Machined Components
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 space-y-16">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Copper Alloy Casting and Machined Components
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-4xl">
            No bake mould copper alloy castings suitable for large and complex
            components. Provides excellent strength and flexibility in design.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[Cu1, Cu2, Cu3, Cu4].map((img, i) => (
              <div
                key={i}
                className="border rounded-lg bg-white shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <img
                  src={img}
                  alt="No Bake Copper Alloy Casting"
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain bg-gray-50"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Stainless Steel Casting and Machined Components
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-4xl">
            No bake mould stainless steel castings designed for heavy-duty
            industrial use. Ensures robust construction and consistent quality
            for large parts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[Ss1, Ss2, Ss3, Ss4].map((img, i) => (
              <div
                key={i}
                className="border rounded-lg bg-white shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <img
                  src={img}
                  alt="No Bake Stainless Steel Casting"
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain bg-gray-50"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NoBakeMouldCasting;
