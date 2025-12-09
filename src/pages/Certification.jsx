import React, { useState } from "react";

// PDF files
import bronzePdf from "../assets/Bronze.pdf";
import bronzeReportPdf from "../assets/Bronze_Report.pdf";
import machineryListPdf from "../assets/Machinery_List.pdf";
import msmePdf from "../assets/MSME_Certificate.pdf";
import isoPdf from "../assets/ISO_Certificate.pdf";

// Thumbnail images (export first page of each PDF as an image and keep these names)
import bronzeThumb from "../assets/Bronze.png";
import bronzeReportThumb from "../assets/Bronze_Report.png";
import machineryThumb from "../assets/Machinery_List.png";
import msmeThumb from "../assets/MSME_Certificate.png";
import isoThumb from "../assets/ISO_Certificate.png";

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: "bronze",
      title: "ZED Bronze Certificate",
      description: "Government of India ZED bronze level certification.",
      file: bronzePdf,
      thumbnail: bronzeThumb,
    },
    {
      id: "bronze-report",
      title: "ZED Bronze Report",
      description: "Detailed assessment report for ZED bronze certification.",
      file: bronzeReportPdf,
      thumbnail: bronzeReportThumb,
    },
    {
      id: "machinery",
      title: "Machinery List",
      description: "Approved list of machinery and equipment.",
      file: machineryListPdf,
      thumbnail: machineryThumb,
    },
    {
      id: "msme",
      title: "MSME Certificate",
      description: "Udyam registration / MSME certificate.",
      file: msmePdf,
      thumbnail: msmeThumb,
    },
    {
      id: "iso",
      title: "ISO Certificate",
      description: "ISO 9001:2015 quality management system certificate.",
      file: isoPdf,
      thumbnail: isoThumb,
    },
  ];

  return (
    <div className="py-6 sm:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <header className="text-center mb-6 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Certification
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Below are our key statutory and quality certifications. Click on any
            certificate to view, download, or open it in a new tab.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {certifications.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setSelectedCert(cert)}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl text-left group cursor-pointer"
              aria-label={`Open ${cert.title}`}
            >
              <div className="p-3 sm:p-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800">
                  {cert.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-gray-500 text-center">
                  {cert.description}
                </p>
              </div>

              {/* Thumbnail instead of iframe to avoid scrollbar */}
              <div className="relative">
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm sm:text-base font-semibold">
                    Click to View
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-16 p-4 sm:p-6 bg-blue-900 text-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
            Our Quality Commitment
          </h2>
          <p className="text-base sm:text-lg">
            Our optimum quality standards and global quality control procedures
            are certified by national and international bodies. We are committed
            to delivering the highest quality products and services to our
            clients worldwide.
          </p>
        </div>

        {/* Modal / Popup */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white w-11/12 max-w-4xl rounded-lg shadow-xl relative flex flex-col">
              {/* Close button (X) */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute right-3 top-3 text-2xl leading-none text-gray-500 hover:text-gray-800"
                aria-label="Close"
              >
                ×
              </button>

              <div className="p-4 border-b">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="p-4 h-[60vh] sm:h-[70vh]">
                <iframe
                  src={selectedCert.file}
                  title={selectedCert.title}
                  className="w-full h-full border"
                />
              </div>

              <div className="flex justify-end gap-3 p-4 border-t">
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
};

export default Certification;