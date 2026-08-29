
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Mobile states
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileMetalOpen, setMobileMetalOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // Close everything whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setMobileCompanyOpen(false);
    setMobileMetalOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  // Close mobile menu immediately when a link is clicked
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileCompanyOpen(false);
    setMobileMetalOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-2 sm:py-3 md:py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <img
            src="/icon.png"
            alt="Brihaspati Logo"
            className="h-16 sm:h-18 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-3 lg:gap-6 text-gray-700 font-medium whitespace-nowrap">
          {/* Home */}
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
              <Link
                href="/about"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Our Process
              </Link>

              <Link
                href="/company/quality-control"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Quality Control
              </Link>

              <Link
                href="/company/mission-vision"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Mission & Vision
              </Link>
            </div>
          </div>

          {/* Casting Materials */}
          <div className="relative group">
            <Link
              href="/casting-material"
              className="flex items-center cursor-pointer hover:text-amber-500"
            >
              Casting Materials
              <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
            </Link>

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
            <Link
              href="/products"
              className="flex items-center cursor-pointer hover:text-amber-500"
            >
              Products
              <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
            </Link>

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

          {/* Certification */}
          <Link href="/certification" className="hover:text-amber-500">
            Certification
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
          >
            Contact Us
          </Link>
        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 gap-3 text-gray-700 font-medium">

            {/* Home */}
            <Link
              href="/"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            {/* ================= COMPANY ================= */}
            <button
              onClick={() => setMobileCompanyOpen((prev) => !prev)}
              className="flex justify-between items-center text-left py-1"
              aria-label="Toggle company menu"
              aria-expanded={mobileCompanyOpen}
            >
              <span>Company</span>

              <ChevronRight
                className={`transition-transform ${mobileCompanyOpen ? "rotate-90" : ""
                  }`}
              />
            </button>

            {mobileCompanyOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm border-l-2 border-amber-500 pl-3 py-1">
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Our Process
                </Link>

                <Link
                  href="/company/quality-control"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Quality Control
                </Link>

                <Link
                  href="/company/mission-vision"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Mission & Vision
                </Link>
              </div>
            )}

            {/* ================= CASTING MATERIALS ================= */}
            <button
              onClick={() => setMobileMetalOpen((prev) => !prev)}
              className="flex justify-between items-center text-left py-1"
              aria-label="Toggle casting materials menu"
              aria-expanded={mobileMetalOpen}
            >
              <span>Casting Materials</span>

              <ChevronRight
                className={`transition-transform ${mobileMetalOpen ? "rotate-90" : ""
                  }`}
              />
            </button>

            {mobileMetalOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm border-l-2 border-amber-500 pl-3 py-1">
                <Link
                  href="/casting-material"
                  onClick={closeMobileMenu}
                  className="py-1 font-semibold hover:text-amber-500"
                >
                  All Casting Materials
                </Link>

                <Link
                  href="/ferrous/steel"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Stainless Steel Casting
                </Link>

                <Link
                  href="/ferrous/nicle"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Nickel Alloy Casting
                </Link>

                <Link
                  href="/non-ferrous/copper"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Copper Alloy Casting
                </Link>

                <Link
                  href="/non-ferrous/bronze"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Bronze Casting
                </Link>
              </div>
            )}

            {/* ================= PRODUCTS ================= */}
            <button
              onClick={() => setMobileProductsOpen((prev) => !prev)}
              className="flex justify-between items-center text-left py-1"
              aria-label="Toggle products menu"
              aria-expanded={mobileProductsOpen}
            >
              <span>Products</span>

              <ChevronRight
                className={`transition-transform ${mobileProductsOpen ? "rotate-90" : ""
                  }`}
              />
            </button>

            {mobileProductsOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm border-l-2 border-amber-500 pl-3 py-1">
                <Link
                  href="/products"
                  onClick={closeMobileMenu}
                  className="py-1 font-semibold hover:text-amber-500"
                >
                  All Products
                </Link>

                <Link
                  href="/products/valve"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Valve Casting
                </Link>

                <Link
                  href="/products/generalengineeringcasting"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  General Engineering Casting
                </Link>

                <Link
                  href="/products/CentrifugalCasting"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Centrifugal Casting
                </Link>

                <Link
                  href="/products/GravityDieCasting"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Gravity Die Casting
                </Link>

                <Link
                  href="/products/ShellMouldCasting"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  Shell Mould Casting
                </Link>

                <Link
                  href="/products/CO2MouldCasting"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  CO2 Mould Casting
                </Link>

                <Link
                  href="/products/NoBakeMouldCasting"
                  onClick={closeMobileMenu}
                  className="py-1 hover:text-amber-500"
                >
                  No Bake Mould Casting
                </Link>
              </div>
            )}

            {/* Certification */}
            <Link
              href="/certification"
              onClick={closeMobileMenu}
            >
              Certification
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
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