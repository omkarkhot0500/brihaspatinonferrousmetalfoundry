import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

const Navbar = () => {
  // Mobile states ONLY
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileMetalOpen, setMobileMetalOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img src="/images/logo.png" alt="Logo" className="h-10 md:h-12" />
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-amber-500">
            Home
          </a>

          {/* Company */}
          <div className="relative group">
            <span className="flex items-center cursor-pointer hover:text-amber-500">
              Company
              <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
            </span>
            <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white rounded-md shadow-lg py-2">
              <a href="/team" className="block px-4 py-2 hover:bg-gray-50">
                Our Process
              </a>
              <a href="/facility" className="block px-4 py-2 hover:bg-gray-50">
                Quality Control
              </a>
              <a href="/facility" className="block px-4 py-2 hover:bg-gray-50">
                Mission & Vision
              </a>
            </div>
          </div>

          {/* Casting Materials */}
          <div className="relative group">
            <span className="flex items-center cursor-pointer hover:text-amber-500">
              Casting Materials
              <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
            </span>
            <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white rounded-md shadow-lg py-2">
              <a
                href="/ferrous/steel"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Stainless Steel Casting
              </a>
              <a
                href="/ferrous/nicle"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Nickel Alloy Casting
              </a>
              <a
                href="/non-ferrous/copper"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Copper Alloy Casting
              </a>
              <a
                href="/non-ferrous/bronze"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Bronze Casting
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="relative group">
            <span className="flex items-center cursor-pointer hover:text-amber-500">
              Products
              <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
            </span>
            <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white rounded-md shadow-lg py-2">
              <a
                href="/products/valve"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Valve Casting
              </a>
              <a
                href="/products/pumps-casing"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Pumps & Casing Casting
              </a>
              <a
                href="/products/vacuum-impellers"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Vacuum Impellers Casting
              </a>
              <a
                href="/products/impeller"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Impeller Casting
              </a>
              <a
                href="/products/fire-fighting"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Fire Fighting Equipment Casting
              </a>
              <a
                href="/products/dairy-equipment"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Dairy Equipments Casting
              </a>
              <a
                href="/products/engineering-components"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Engineering Components Casting
              </a>
              <a
                href="/products/machined-components"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Machined Components Casting
              </a>
            </div>
          </div>

          <a href="/certification" className="hover:text-amber-500">
            Certification
          </a>

          <a
            href="/contact"
            className="rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
          >
            Contact Us
          </a>
        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 gap-3 text-gray-700 font-medium">
            <a href="/">Home</a>

            {/* Company */}
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="flex justify-between items-center"
            >
              <span>Company</span>
              <ChevronRight
                className={`${mobileCompanyOpen ? "rotate-90" : ""}`}
              />
            </button>
            {mobileCompanyOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <a href="/team">Our Process</a>
                <a href="/facility">Quality Control</a>
                <a href="/facility">Mission & Vision</a>
              </div>
            )}

            {/* Casting Materials */}
            <button
              onClick={() => setMobileMetalOpen(!mobileMetalOpen)}
              className="flex justify-between items-center"
            >
              <span>Casting Materials</span>
              <ChevronRight
                className={`${mobileMetalOpen ? "rotate-90" : ""}`}
              />
            </button>
            {mobileMetalOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <a href="/ferrous/steel">Stainless Steel Casting</a>
                <a href="/ferrous/nicle">Nickel Alloy Casting</a>
                <a href="/non-ferrous/copper">Copper Alloy Casting</a>
                <a href="/non-ferrous/bronze">Bronze Casting</a>
              </div>
            )}

            {/* Products */}
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex justify-between items-center"
            >
              <span>Products</span>
              <ChevronRight
                className={`${mobileProductsOpen ? "rotate-90" : ""}`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <a href="/products/valve">Valve Casting</a>
                <a href="/products/pumps-casing">Pumps & Casing Casting</a>
                <a href="/products/vacuum-impellers">
                  Vacuum Impellers Casting
                </a>
                <a href="/products/impeller">Impeller Casting</a>
                <a href="/products/fire-fighting">
                  Fire Fighting Equipment Casting
                </a>
                <a href="/products/dairy-equipment">Dairy Equipments Casting</a>
                <a href="/products/engineering-components">
                  Engineering Components Casting
                </a>
                <a href="/products/machined-components">
                  Machined Components Casting
                </a>
              </div>
            )}

            <a href="/certification">Certification</a>

            <a
              href="/contact"
              className="mt-2 rounded bg-amber-500 px-4 py-2 text-white text-center"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
