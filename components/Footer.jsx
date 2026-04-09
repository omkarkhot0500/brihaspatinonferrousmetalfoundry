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
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="text-gray-300 text-sm sm:text-base space-y-2">
              <p className="font-bold text-white">Brihaspati Non-Ferrous Metal Foundry</p>
              <p>Plot No. 70, Road No. 8, KIADB Industrial Area, Kittur, Belagavi, Karnataka 591115</p>
              <p>Phone: +91 8310432701</p>
              <p className="flex items-center justify-center sm:justify-start gap-2 pt-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@brihaspatifoundry.com</span>
              </p>
            </div>
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
