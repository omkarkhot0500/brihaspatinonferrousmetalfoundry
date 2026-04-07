import Image from "next/image";
import { MotionDiv, MotionSection, MotionH1, fadeIn, staggerContainer } from "@/components/MotionWrapper";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "No-Bake Mould Casting Manufacturer India | Brihaspati Foundry",
  description: "Specialized no-bake mould casting for large and complex industrial components. High-strength copper alloy and stainless steel castings in Belagavi, Karnataka.",
  keywords: ["no-bake mould casting", "sand casting manufacturer India", "large metal casting", "industrial components Karnataka", "precision foundry solutions"],
  url: "https://brihaspatinonferrousmetalfoundry.vercel.app/products/NoBakeMouldCasting"
});

export default function NoBakeMouldCasting() {
  const copperImages = [
    "/assets/NoBake/cu1.webp",
    "/assets/NoBake/cu2.webp",
    "/assets/NoBake/cu3.webp",
    "/assets/NoBake/cu4.jpg",
  ];

  const stainlessImages = [
    "/assets/NoBake/ss1.webp",
    "/assets/NoBake/ss2.png",
    "/assets/NoBake/ss3.jpg",
    "/assets/NoBake/ss4.webp",
  ];

  const ImageGrid = ({ images, alt }) => (
    <MotionDiv 
      {...staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {images.map((img, i) => (
        <MotionDiv
          key={i}
          variants={fadeIn}
          className="border rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-50">
            <Image
              src={img}
              alt={alt}
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
        </MotionDiv>
      ))}
    </MotionDiv>
  );

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-6 sm:py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <MotionH1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
          >
            No-Bake Mould Casting Manufacturer India
          </MotionH1>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 space-y-16">
        {/* Copper Alloy */}
        <MotionSection {...fadeIn}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Copper Alloy Casting and Machined Components
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-4xl">
            No bake mould copper alloy castings suitable for large and complex
            components. Provides excellent strength and flexibility in design.
          </p>

          <ImageGrid
            images={copperImages}
            alt="No Bake Copper Alloy Casting"
          />
        </MotionSection>

        {/* Stainless Steel */}
        <MotionSection {...fadeIn}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Stainless Steel Casting and Machined Components
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-4xl">
            No bake mould stainless steel castings designed for heavy-duty
            industrial use. Ensures robust construction and consistent quality
            for large parts.
          </p>

          <ImageGrid
            images={stainlessImages}
            alt="No Bake Stainless Steel Casting"
          />
        </MotionSection>
      </main>
    </div>
  );
}
