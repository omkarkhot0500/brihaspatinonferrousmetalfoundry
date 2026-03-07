import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">
              About Brihaspati Non-Ferrous Metal Foundry
            </h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Manufacturer of Copper Alloy and Stainless Steel Alloy Castings &
              Machined Components, delivering high-integrity solutions with
              strict quality control.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products/valve" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-3 text-sm sm:text-base">
              <p className="flex items-start sm:items-center justify-center sm:justify-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 83104 32701</span>
              </p>
              <p className="flex items-start sm:items-center justify-center sm:justify-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>
                  Plot No. 70, Road No. 8, KIADB Industrial Area, Kittur, Belagavi
                  591115
                </span>
              </p>
              <p className="flex items-start sm:items-center justify-center sm:justify-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@brihaspatifoundry.com</span>
              </p>
            </address>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Brihaspati Non-Ferrous Metal Foundry.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
