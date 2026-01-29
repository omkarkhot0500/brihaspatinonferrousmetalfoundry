"use client";

import { useState } from "react";

export default function CertificationClient() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: "bronze",
      title: "ZED Bronze Certificate",
      description: "Government of India ZED bronze level certification.",
      file: "/pdfs/Bronze.pdf",
      thumbnail: "/images/Bronze.png",
    },
    {
      id: "bronze-report",
      title: "ZED Bronze Report",
      description: "Detailed assessment report for ZED bronze certification.",
      file: "/pdfs/Bronze_Report.pdf",
      thumbnail: "/images/Bronze_Report.png",
    },
    {
      id: "machinery",
      title: "Machinery List",
      description: "Approved list of machinery and equipment.",
      file: "/pdfs/Machinery_List.pdf",
      thumbnail: "/images/Machinery_List.png",
    },
    {
      id: "msme",
      title: "MSME Certificate",
      description: "Udyam registration / MSME certificate.",
      file: "/pdfs/MSME_Certificate.pdf",
      thumbnail: "/images/MSME_Certificate.png",
    },
    {
      id: "iso",
      title: "ISO Certificate",
      description: "ISO 9001:2015 quality management system certificate.",
      file: "/pdfs/ISO_Certificate.pdf",
      thumbnail: "/images/ISO_Certificate.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-6 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Certification
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Below are our key statutory and quality certifications. Click on any
            certificate to view, download, or open it in a new tab.
          </p>
        </header>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {certifications.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setSelectedCert(cert)}
              className="bg-white rounded-lg shadow-md overflow-hidden text-left group
                         transition md:hover:scale-105 md:hover:shadow-xl"
              aria-label={`Open ${cert.title}`}
            >
              <div className="p-3 sm:p-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-center text-gray-800">
                  {cert.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-gray-500 text-center">
                  {cert.description}
                </p>
              </div>

              <div className="relative">
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="w-full h-44 sm:h-52 md:h-56 lg:h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 md:group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm sm:text-base font-semibold">
                    Click to View
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Quality Commitment */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-6 bg-blue-900 text-white rounded-lg shadow-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
            Our Quality Commitment
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Our optimum quality standards and global quality control procedures
            are certified by national and international bodies. We are committed
            to delivering the highest quality products and services to our
            clients worldwide.
          </p>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2">
            <div className="bg-white w-full max-w-4xl rounded-lg shadow-xl relative flex flex-col max-h-[90vh]">
              {/* Close (X) */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute right-3 top-3 text-2xl text-gray-500 hover:text-gray-800"
                aria-label="Close"
              >
                ×
              </button>

              <div className="p-4 border-b">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="p-3 sm:p-4 flex-1 overflow-hidden">
                <iframe
                  src={selectedCert.file}
                  title={selectedCert.title}
                  className="w-full h-full border"
                />
              </div>

              <div className="flex flex-wrap justify-end gap-2 p-4 border-t">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Close
                </button>

                <a
                  href={selectedCert.file}
                  download
                  className="px-4 py-2 text-sm sm:text-base rounded-md bg-gray-800 text-white hover:bg-gray-900"
                >
                  Download
                </a>

                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm sm:text-base rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
