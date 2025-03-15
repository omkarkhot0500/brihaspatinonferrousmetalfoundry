import React from "react";

const Certification = () => {
  const certifications = [
    {
      id: "iso",
      title: "ISO 9001-2015 CERTIFICATE",
      description:
        "Management system as per ISO 9001:2015 for Manufacture and Supply of Investment Casting",
      imgSrc: "/api/placeholder/400/320",
      alt: "ISO 9001-2015 Certificate from TUV NORD for Meena Cast Pvt. Ltd.",
    },
    {
      id: "ped",
      title: "PED CERTIFICATE",
      description:
        "Quality management system for material manufacturer - Pressure Equipment Directive 2014/68/EU",
      imgSrc: "/api/placeholder/400/320",
      alt: "PED Certificate from TUV NORD for Meena Cast Pvt. Ltd.",
    },
    {
      id: "ad",
      title: "AD CERTIFICATE",
      description:
        "Material manufacturer acc. to AD 2000-Merkblatt W0 certification",
      imgSrc: "/api/placeholder/400/320",
      alt: "AD Certificate from TUV NORD for Meena Cast Pvt. Ltd.",
    },
    {
      id: "ibr",
      title: "IBR CERTIFICATE",
      description:
        "Official certification from the Director of Boiler/Gujarat State",
      imgSrc: "/api/placeholder/400/320",
      alt: "IBR Certificate for Meena Cast Pvt. Ltd.",
    },
    {
      id: "bscic",
      title: "BSCIC CERTIFICATE",
      description:
        "Quality Management System certification for Manufacture and Supply of Investment Casting",
      imgSrc: "/api/placeholder/400/320",
      alt: "BSCIC Certificate for Meena Cast Pvt. Ltd.",
    },
  ];

  return (
    <div className="py-6 sm:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* SEO-friendly header section with responsive text sizes */}
        <header className="text-center mb-6 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Certification
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Meena Cast Pvt. Ltd. is among the Best Investment Casting
            Manufacturers in India. We are a BSOIC, PED, and IBR registered
            company with optimum quality standards certified by TUV NORD.
          </p>
        </header>

        {/* Responsive grid layout with appropriate breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              aria-labelledby={`cert-${cert.id}-title`}
            >
              <div className="p-3 sm:p-4 border-b border-gray-200 bg-gray-50">
                <h2
                  id={`cert-${cert.id}-title`}
                  className="text-lg sm:text-xl font-semibold text-center text-gray-800"
                >
                  {cert.title}
                </h2>
              </div>
              <div className="relative">
                <img
                  src={cert.imgSrc}
                  alt={cert.alt}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Responsive footer section */}
        <div className="mt-8 sm:mt-16 p-4 sm:p-6 bg-blue-900 text-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
            Our Quality Commitment
          </h2>
          <p className="text-base sm:text-lg">
            Our optimum quality standards and global quality control procedures
            are certified by TUV NORD DIN EN 9001: 2015, PED & AD 2000-Merkblatt
            W0 certification. We are committed to delivering the highest quality
            investment castings for our clients worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
