import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const [isFerrousOpen, setIsFerrousOpen] = useState(false);
  const [isNonFerrousOpen, setIsNonFerrousOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/meenacast"
              aria-label="Twitter"
              className="hover:text-gray-200 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/meenacast"
              aria-label="Facebook"
              className="hover:text-gray-200 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/company/meenacast"
              aria-label="LinkedIn"
              className="hover:text-gray-200 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com/meenacast"
              aria-label="YouTube"
              className="hover:text-gray-200 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/919824234488"
              aria-label="WhatsApp"
              className="hover:text-gray-200 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap items-center space-x-4 sm:space-x-6">
            <a
              href="mailto:info@meenacast.com"
              className="text-sm sm:text-base hover:text-gray-200 transition-colors"
            >
              <span className="hidden sm:inline">📧</span> info@meenacast.com
            </a>
            <a
              href="tel:+919824234488"
              className="text-sm sm:text-base hover:text-gray-200 transition-colors"
            >
              <span className="hidden sm:inline">📞</span> +91 98242 34488
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/images/logo.png"
            alt="brishpathi Logo"
            className="h-12 mr-4"
          />
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end">
          <a
            href="/"
            className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
          >
            Home
          </a>
          <div className="group relative px-3 py-2 text-gray-700 hover:text-red-600 font-medium">
            <span className="flex items-center">
              Company{" "}
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:rotate-90 transition-transform" />
            </span>
            <div className="hidden group-hover:block absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
              <a href="/team" className="block px-4 py-2 hover:bg-gray-100">
                Our Process
              </a>
              <a href="/facility" className="block px-4 py-2 hover:bg-gray-100">
                Quality Control
              </a>
              <a href="/facility" className="block px-4 py-2 hover:bg-gray-100">
                Mission & Vision
              </a>
            </div>
          </div>

          <div className="group relative px-3 py-2 text-gray-700 hover:text-red-600 font-medium">
            <span className="flex items-center">
              Types of Metal{" "}
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:rotate-90 transition-transform" />
            </span>
            <div className="hidden group-hover:block absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
              <div
                className="relative"
                onMouseEnter={() => setIsFerrousOpen(true)}
                onMouseLeave={() => setIsFerrousOpen(false)}
              >
                <a
                  href="/ferrous"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Stainless Steel
                </a>
                {isFerrousOpen && (
                  <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                    <a
                      href="/ferrous/steel"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Stainless Steel Casting
                    </a>
                    <a
                      href="/ferrous/iron"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Nickel Alloy Casting
                    </a>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setIsNonFerrousOpen(true)}
                onMouseLeave={() => setIsNonFerrousOpen(false)}
              >
                <a
                  href="/non-ferrous"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Copper Alloy Casting
                </a>
                {isNonFerrousOpen && (
                  <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                    <a
                      href="/non-ferrous/aluminum"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Copper Alloy Casting
                    </a>
                    <a
                      href="/non-ferrous/copper"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Bronze Casting
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="group relative px-3 py-2 text-gray-700 hover:text-red-600 font-medium">
            <span className="flex items-center">
              Products{" "}
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:rotate-90 transition-transform" />
            </span>
            <div className="hidden group-hover:block absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
              <a
                href="/investment-casting"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Valve Casting
              </a>
              <a href="/lost-wax" className="block px-4 py-2 hover:bg-gray-100">
                Pumps & Casing Casting
              </a>
              <a href="/feinguss" className="block px-4 py-2 hover:bg-gray-100">
                Vacuum Impellers Casting
              </a>
              <a href="/feinguss" className="block px-4 py-2 hover:bg-gray-100">
                Impeller Casting{" "}
              </a>
              <a href="/feinguss" className="block px-4 py-2 hover:bg-gray-100">
                Fire Fighting Equipment Casting{" "}
              </a>
              <a href="/feinguss" className="block px-4 py-2 hover:bg-gray-100">
                Dairy Equipments Casting{" "}
              </a>
              <a href="/feinguss" className="block px-4 py-2 hover:bg-gray-100">
                Engineering Components Casting
              </a>
              <a href="/feinguss" className="block px-4 py-2 hover:bg-gray-100">
                Machined Components Casting{" "}
              </a>
            </div>
          </div>
          <a
            href="/application"
            className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
          >
            Applications
          </a>
          <a
            href="/certification"
            className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
          >
            Certification
          </a>
          {/* <a
            href="/career"
            className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
          >
            Career
          </a> */}
          <a
            href="/contact"
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium ml-2"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
