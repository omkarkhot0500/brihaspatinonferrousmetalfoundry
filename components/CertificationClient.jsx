"use client";

import { useState } from "react";

export default function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: "bronze",
      title: "ZED Bronze Certificate",
      description: "Government of India ZED bronze level certification.",
      file: "/assets/Bronze.pdf",
      thumbnail: "/assets/Bronze.png",
    },
    {
      id: "bronze-report",
      title: "ZED Bronze Report",
      description: "Detailed assessment report for ZED bronze certification.",
      file: "/assets/Bronze_Report.pdf",
      thumbnail: "/assets/Bronze_Report.png",
    },
    {
      id: "machinery",
      title: "Machinery List",
      description: "Approved list of machinery and equipment.",
      file: "/assets/Machinery_List.pdf",
      thumbnail: "/assets/Machinery_List.png",
    },
    {
      id: "msme",
      title: "MSME Certificate",
      description: "Udyam registration / MSME certificate.",
      file: "/assets/MSME_Certificate.pdf",
      thumbnail: "/assets/MSME_Certificate.png",
    },
    {
      id: "iso",
      title: "ISO Certificate",
      description: "ISO 9001:2015 quality management system certificate.",
      file: "/assets/ISO_Certificate.pdf",
      thumbnail: "/assets/ISO_Certificate.png",
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
              className="bg-white rounded-lg shadow-md overflow-hidden text-left group transition md:hover:scale-105 md:hover:shadow-xl"
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

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2">
            <div className="bg-white w-full max-w-[95vw] h-[90vh] rounded-xl shadow-2xl relative flex flex-col">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-3 top-3 text-2xl text-gray-500 hover:text-gray-800"
              >
                ×
              </button>

              <div className="px-6 py-4 border-b bg-gray-50">

                <h3 className="text-lg font-semibold">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="flex-1 overflow-hidden">

                <iframe
  src={selectedCert.file}
  title={selectedCert.title}
  className="w-full h-full border-0"
/>

              </div>

              <div className="flex justify-end gap-2 p-4 border-t">
                <a
                  href={selectedCert.file}
                  download
                  className="px-4 py-2 bg-gray-800 text-white rounded"
                >
                  Download
                </a>
                <a
                  href={selectedCert.file}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
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
