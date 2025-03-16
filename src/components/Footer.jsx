import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  // Function to handle PDF download
  const handleDownload = () => {
    const pdfPath = "/req.pdf"; // Ensure this file is in the public/access folder
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Request_Quote.pdf"; // Renamed file for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact our team today for a consultation about your casting needs
            and requirements.
          </p>
          <button
            onClick={handleDownload}
            className="inline-block px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
          >
            Request a Quote
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About brishpathi Cast</h3>
              <p className="text-gray-300 mb-4">
                Leading manufacturer of investment castings, specializing in
                ferrous and non-ferrous metals with rigorous quality control.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-300 hover:text-white"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/applications"
                    className="text-gray-300 hover:text-white"
                  >
                    Applications
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-300">
                <p className="flex items-center mb-2">
                  <Phone className="h-5 w-5 mr-2" />
                  +91 1234567890
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  info@meenacast.com
                </p>
              </address>
            </div>
          </div>

          <hr className="border-gray-700 my-6" />

          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} brishpathi Cast Pvt. Ltd. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
