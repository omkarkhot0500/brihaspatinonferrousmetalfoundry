import Image from "next/image";
import { MotionDiv, MotionSection, MotionH1, fadeIn, staggerContainer } from "@/components/MotionWrapper";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "CO2 Mould Casting Manufacturer Karnataka | Brihaspati Foundry",
  description: "Advanced CO2 sand casting solutions with excellent surface finish and dimensional accuracy. Leading manufacturer of non-ferrous and stainless steel castings in India.",
  keywords: ["CO2 sand casting", "CO2 mould manufacturer India", "precision sand casting Karnataka", "industrial casting solutions", "Brihaspati foundry"],
  url: "https://brihaspatinonferrousmetalfoundry.vercel.app/products/CO2MouldCasting"
});

export default function CO2MouldCasting() {
  const copperImages = [
    "/assets/CO2Mould/cu1.avif",
    "/assets/CO2Mould/cu2.avif",
    "/assets/CO2Mould/cu3.jpg",
  ];

  const stainlessImages = [
    "/assets/CO2Mould/ss1.png",
    "/assets/CO2Mould/ss2.png",
    "/assets/CO2Mould/ss3.png",
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
            CO2 Mould Casting Manufacturer Karnataka
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
            CO₂ moulded copper alloy castings known for good strength and
            dimensional stability. Ideal for medium to large engineering components.
          </p>

          <ImageGrid
            images={copperImages}
            alt="CO2 Mould Copper Alloy Casting"
          />
        </MotionSection>

        {/* Stainless Steel */}
        <MotionSection {...fadeIn}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Stainless Steel Casting and Machined Components
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-4xl">
            CO₂ mould stainless steel castings providing reliable structural
            integrity. Widely used in industrial and heavy engineering applications.
          </p>

          <ImageGrid
            images={stainlessImages}
            alt="CO2 Mould Stainless Steel Casting"
          />
        </MotionSection>
      </main>
    </div>
  );
}
