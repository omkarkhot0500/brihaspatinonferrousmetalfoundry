import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              About Brihaspati Non-Ferrous Metal Foundry
            </h3>
            <p className="text-gray-300 mb-4">
              Manufacturer of Copper Alloy and Stainless Steel Alloy Castings &
              Machined Components, delivering high-integrity solutions with
              strict quality control.
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
                <a href="/products" className="text-gray-300 hover:text-white">
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
            <address className="not-italic text-gray-300 space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +91 83104 32701
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Plot No. 70, Road No. 8, KIADB Industrial Area, Kittur, Belagavi
                591115
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@brihaspatifoundry.com
              </p>
            </address>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-gray-400">
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
