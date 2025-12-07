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
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/images/logo.png"
            alt="brishpathi Logo"
            className="h-12 mr-4"
          />
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end">
          {/* Home */}
          <a
            href="/"
            className="px-3 py-2 text-gray-700 hover:text-amber-400 font-medium transition-colors duration-200"
          >
            Home
          </a>

          {/* Company */}
          <div className="group relative px-3 py-2 text-gray-700 hover:text-amber-400 font-medium transition-colors duration-200">
            <span className="flex items-center">
              Company{" "}
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:rotate-90 transition-transform duration-200" />
            </span>
            <div className="hidden group-hover:block absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
              <a
                href="/team"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Our Process
              </a>
              <a
                href="/facility"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Quality Control
              </a>
              <a
                href="/facility"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Mission & Vision
              </a>
            </div>
          </div>

          {/* Types of Metal */}
          <div className="group relative px-3 py-2 text-gray-700 hover:text-amber-400 font-medium transition-colors duration-200">
            <span className="flex items-center">
              Types of Metal{" "}
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:rotate-90 transition-transform duration-200" />
            </span>
            <div className="hidden group-hover:block absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
              <div
                className="relative"
                onMouseEnter={() => setIsFerrousOpen(true)}
                onMouseLeave={() => setIsFerrousOpen(false)}
              >
                <a
                  href="/ferrous"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
                >
                  Stainless Steel
                </a>
                {isFerrousOpen && (
                  <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                    <a
                      href="/ferrous/steel"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
                    >
                      Stainless Steel Casting
                    </a>
                    <a
                      href="/ferrous/iron"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
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
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
                >
                  Copper Alloy Casting
                </a>
                {isNonFerrousOpen && (
                  <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                    <a
                      href="/non-ferrous/aluminum"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
                    >
                      Copper Alloy Casting
                    </a>
                    <a
                      href="/non-ferrous/copper"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
                    >
                      Bronze Casting
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="group relative px-3 py-2 text-gray-700 hover:text-amber-400 font-medium transition-colors duration-200">
            <span className="flex items-center">
              Products{" "}
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:rotate-90 transition-transform duration-200" />
            </span>
            <div className="hidden group-hover:block absolute left-0 mt-2 bg-white shadow-lg rounded-md w-56 py-2 z-50">
              <a
                href="/investment-casting"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Valve Casting
              </a>
              <a
                href="/lost-wax"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Pumps & Casing Casting
              </a>
              <a
                href="/feinguss"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Vacuum Impellers Casting
              </a>
              <a
                href="/feinguss"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Impeller Casting
              </a>
              <a
                href="/feinguss"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Fire Fighting Equipment Casting
              </a>
              <a
                href="/feinguss"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Dairy Equipments Casting
              </a>
              <a
                href="/feinguss"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Engineering Components Casting
              </a>
              <a
                href="/feinguss"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-amber-500 transition-colors duration-150"
              >
                Machined Components Casting
              </a>
            </div>
          </div>

          {/* Applications */}
          <a
            href="/application"
            className="px-3 py-2 text-gray-700 hover:text-amber-400 font-medium transition-colors duration-200"
          >
            Applications
          </a>

          {/* Certification */}
          <a
            href="/certification"
            className="px-3 py-2 text-gray-700 hover:text-amber-400 font-medium transition-colors duration-200"
          >
            Certification
          </a>

          {/* Contact Us */}
          <a
            href="/contact"
            className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 font-medium ml-2 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
