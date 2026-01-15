import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFerrous, setMobileFerrous] = useState(false);
  const [mobileNonFerrous, setMobileNonFerrous] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src="/images/logo.png" alt="Logo" className="h-10 md:h-12" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-gray-700 font-medium">
          <a href="/" className="hover:text-amber-500">Home</a>

          {/* Company */}
          <div className="group relative">
            <button className="flex items-center hover:text-amber-500">
              Company <ChevronRight className="h-4 w-4 ml-1 group-hover:rotate-90 transition" />
            </button>
            <div className="hidden group-hover:block absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2">
              <a href="/team" className="block px-4 py-2 hover:bg-gray-50">Our Process</a>
              <a href="/facility" className="block px-4 py-2 hover:bg-gray-50">Quality Control</a>
              <a href="/facility" className="block px-4 py-2 hover:bg-gray-50">Mission & Vision</a>
            </div>
          </div>

          {/* Types of Metal */}
          <div className="group relative">
            <button className="flex items-center hover:text-amber-500">
              Types of Metal <ChevronRight className="h-4 w-4 ml-1 group-hover:rotate-90 transition" />
            </button>
            <div className="hidden group-hover:block absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2">
              <a href="/ferrous/steel" className="block px-4 py-2 hover:bg-gray-50">
                Stainless Steel Casting
              </a>
              <a href="/ferrous/nicle" className="block px-4 py-2 hover:bg-gray-50">
                Nickel Alloy Casting
              </a>
              <a href="/non-ferrous/copper" className="block px-4 py-2 hover:bg-gray-50">
                Copper Alloy Casting
              </a>
              <a href="/non-ferrous/bronze" className="block px-4 py-2 hover:bg-gray-50">
                Bronze Casting
              </a>
            </div>
          </div>

          <a href="/application" className="hover:text-amber-500">Applications</a>
          <a href="/certification" className="hover:text-amber-500">Certification</a>

          <a
            href="/contact"
            className="ml-2 rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-4 gap-3 text-gray-700 font-medium">
            <a href="/">Home</a>

            {/* Ferrous */}
            <button
              onClick={() => setMobileFerrous(!mobileFerrous)}
              className="flex justify-between items-center"
            >
              Ferrous <ChevronRight className={`transition ${mobileFerrous && "rotate-90"}`} />
            </button>
            {mobileFerrous && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <a href="/ferrous/steel">Stainless Steel Casting</a>
                <a href="/ferrous/nicle">Nickel Alloy Casting</a>
              </div>
            )}

            {/* Non-Ferrous */}
            <button
              onClick={() => setMobileNonFerrous(!mobileNonFerrous)}
              className="flex justify-between items-center"
            >
              Non-Ferrous <ChevronRight className={`transition ${mobileNonFerrous && "rotate-90"}`} />
            </button>
            {mobileNonFerrous && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <a href="/non-ferrous/copper">Copper Alloy Casting</a>
                <a href="/non-ferrous/bronze">Bronze Casting</a>
              </div>
            )}

            <a href="/application">Applications</a>
            <a href="/certification">Certification</a>

            <a
              href="/contact"
              className="mt-2 rounded bg-amber-500 px-4 py-2 text-white text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
