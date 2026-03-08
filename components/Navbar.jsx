"use client";

import React, { useState } from "react";
import Link from "next/link";
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
        <Link href="/">
          <img src="/icon.png" alt="Brihaspati Logo" className="h-10 md:h-12" />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-amber-500">
            Home
          </Link>

          {/* Company */}
          <div className="relative group">
            <span className="flex items-center cursor-pointer hover:text-amber-500">
              Company
              <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
            </span>
            <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white rounded-md shadow-lg py-2">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-50">
                Our Process
              </Link>
              <Link href="/company/quality-control" className="block px-4 py-2 hover:bg-gray-50">
                Quality Control
              </Link>
              <Link href="/company/mission-vision" className="block px-4 py-2 hover:bg-gray-50">
                Mission & Vision
              </Link>
            </div>
          </div>

          {/* Casting Materials */}
          <div className="relative group">
            <span className="flex items-center cursor-pointer hover:text-amber-500">
              Casting Materials
              <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
            </span>
            <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white rounded-md shadow-lg py-2">
              <Link
                href="/ferrous/steel"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Stainless Steel Casting
              </Link>
              <Link
                href="/ferrous/nicle"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Nickel Alloy Casting
              </Link>
              <Link
                href="/non-ferrous/copper"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Copper Alloy Casting
              </Link>
              <Link
                href="/non-ferrous/bronze"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Bronze Casting
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="relative group">
            <span className="flex items-center cursor-pointer hover:text-amber-500">
              Products
              <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
            </span>
            <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white rounded-md shadow-lg py-2">
              <Link
                href="/products/valve"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Valve Casting
              </Link>
              <Link
                href="/products/generalengineeringcasting"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                General Engineering Casting
              </Link>
              <Link
                href="/products/CentrifugalCasting"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Centrifugal Casting
              </Link>
              <Link
                href="/products/GravityDieCasting"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Gravity Die Casting
              </Link>
              <Link
                href="/products/ShellMouldCasting"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Shell Mould Casting
              </Link>
              <Link
                href="/products/CO2MouldCasting"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                CO2 Mould Casting
              </Link>
              <Link
                href="/products/NoBakeMouldCasting"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                No Bake Mould Casting
              </Link>
            </div>
          </div>

          <Link href="/certification" className="hover:text-amber-500">
            Certification
          </Link>

          <Link
            href="/contact"
            className="rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
          >
            Contact Us
          </Link>
        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 gap-3 text-gray-700 font-medium">
            <Link href="/">Home</Link>

            {/* Company */}
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="flex justify-between items-center text-left"
              aria-label="Toggle company menu"
            >
              <span>Company</span>
              <ChevronRight
                className={`${mobileCompanyOpen ? "rotate-90" : ""}`}
              />
            </button>
            {mobileCompanyOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <Link href="/about">Our Process</Link>
                <Link href="/company/quality-control">Quality Control</Link>
                <Link href="/company/mission-vision">Mission & Vision</Link>
              </div>
            )}

            {/* Casting Materials */}
            <button
              onClick={() => setMobileMetalOpen(!mobileMetalOpen)}
              className="flex justify-between items-center text-left"
              aria-label="Toggle casting materials menu"
            >
              <span>Casting Materials</span>
              <ChevronRight
                className={`${mobileMetalOpen ? "rotate-90" : ""}`}
              />
            </button>
            {mobileMetalOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <Link href="/ferrous/steel">Stainless Steel Casting</Link>
                <Link href="/ferrous/nicle">Nickel Alloy Casting</Link>
                <Link href="/non-ferrous/copper">Copper Alloy Casting</Link>
                <Link href="/non-ferrous/bronze">Bronze Casting</Link>
              </div>
            )}

            {/* Products */}
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex justify-between items-center text-left"
              aria-label="Toggle products menu"
            >
              <span>Products</span>
              <ChevronRight
                className={`${mobileProductsOpen ? "rotate-90" : ""}`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <Link href="/products/valve">Valve Casting</Link>
                <Link href="/products/generalengineeringcasting">
                  General Engineering Casting
                </Link>
                <Link href="/products/CentrifugalCasting">
                  Centrifugal Casting
                </Link>
                <Link href="/products/GravityDieCasting">
                  Gravity Die Casting
                </Link>
                <Link href="/products/ShellMouldCasting">
                  Shell Mould Casting
                </Link>
                <Link href="/products/CO2MouldCasting">CO2 Mould Casting</Link>
                <Link href="/products/NoBakeMouldCasting">
                  No Bake Mould Casting
                </Link>
              </div>
            )}

            <Link href="/certification">Certification</Link>

            <Link
              href="/contact"
              className="mt-2 rounded bg-amber-500 px-4 py-2 text-white text-center block"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
