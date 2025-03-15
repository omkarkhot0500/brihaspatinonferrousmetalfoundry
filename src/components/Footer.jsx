import React, { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
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
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
          >
            Request a Quote
          </a>
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
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
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
              <h3 className="text-xl font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/investment-casting"
                    className="text-gray-300 hover:text-white"
                  >
                    Investment Casting
                  </a>
                </li>
                <li>
                  <a
                    href="/lost-wax-casting"
                    className="text-gray-300 hover:text-white"
                  >
                    Lost Wax Casting
                  </a>
                </li>
                <li>
                  <a
                    href="/ferrous-metals"
                    className="text-gray-300 hover:text-white"
                  >
                    Ferrous Metals
                  </a>
                </li>
                <li>
                  <a
                    href="/non-ferrous-metals"
                    className="text-gray-300 hover:text-white"
                  >
                    Non-Ferrous Metals
                  </a>
                </li>
                <li>
                  <a
                    href="/feinguss"
                    className="text-gray-300 hover:text-white"
                  >
                    Feinguss
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-300">
                <p className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Industrial Area, Phase X, City, State, India
                </p>
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

      {/* Fixed Contact Icons */}
      {/* <div className="fixed right-4 bottom-4 flex flex-col space-y-4 z-40">
        <a
          href="mailto:info@meenacast.com"
          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
          aria-label="Email us"
        >
          <Mail className="h-6 w-6" />
        </a>
        <a
          href="tel:+911234567890"
          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/911234567890"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
          aria-label="WhatsApp us"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div> */}
    </>
  );
};

export default Footer;
