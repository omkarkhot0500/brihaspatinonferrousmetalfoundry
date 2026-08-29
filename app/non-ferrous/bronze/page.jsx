import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Scale,
  Settings,
  Flame,
  Award,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Phosphor Bronze Grade 2 Castings & Machined Channels | Brihaspati Foundry",
  description:
    "280 KG Phosphor Bronze Grade 2 LH & RH Precision Machined Channels, Hydro Tested up to 15 KG Pressure by Brihaspati Non-Ferrous Metal Foundry.",
};

export default function Bronzecasting() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* ================= HERO HEADER ================= */}
      <header className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Non-Ferrous Material Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Bronze Casting &amp; Precision Components
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed">
            High-integrity Phosphor Bronze Grade 2 castings, heavy-duty machined channels, and custom alloy engineering for high-wear and high-pressure industrial environments.
          </p>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 max-w-6xl">

        {/* ================= FEATURED PRODUCT SPOTLIGHT ================= */}
        <section className="mb-14 sm:mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

            {/* Header Badge & Title */}
            <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="bg-white/20 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  Featured Product Manufacturing
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Phosphor Bronze Grade 2 (LH &amp; RH)
                </h2>
                <p className="text-amber-100 text-sm sm:text-base mt-1 font-medium">
                  Precision Machined Channels • Hydro Tested to 15 KG Pressure
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-amber-100 text-sm font-semibold whitespace-nowrap">
                <Scale className="w-5 h-5 text-amber-300" />
                <span>Heavy Duty Unit: 280 KG</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 md:p-10">

              {/* Product Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="group relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-900 aspect-4/3">
                  <img
                    src="/assets/BronzeCasting/phosphor-bronze-grade-2-1.jpg"
                    alt="Phosphor Bronze Grade 2 Machined Channels 280kg"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                      Machined Channel (LH &amp; RH Pair)
                    </span>
                    <p className="text-sm font-medium">Precision CNC Boring &amp; Flange Machining (280 KG)</p>
                  </div>
                </div>

                <div className="group relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-900 aspect-4/3">
                  <img
                    src="/assets/BronzeCasting/phosphor-bronze-grade-2-2.jpg"
                    alt="Phosphor Bronze Grade 2 Hydro Tested 15KG Pressure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                      Hydrostatic Pressure Tested
                    </span>
                    <p className="text-sm font-medium">100% Certified Leak-Proof at 15 KG Pressure</p>
                  </div>
                </div>
              </div>

              {/* Technical Specifications Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

                <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-xl flex items-start gap-4">
                  <div className="p-3 bg-amber-500 text-white rounded-lg shadow-sm">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                      Unit Weight
                    </span>
                    <span className="text-xl font-extrabold text-gray-900">280 KG</span>
                    <p className="text-xs text-gray-600 mt-0.5">Heavy-duty structural casting</p>
                  </div>
                </div>

                <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-xl flex items-start gap-4">
                  <div className="p-3 bg-amber-500 text-white rounded-lg shadow-sm">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                      Channel Sets
                    </span>
                    <span className="text-xl font-extrabold text-gray-900">LH &amp; RH Pairs</span>
                    <p className="text-xs text-gray-600 mt-0.5">Precision CNC machined channels</p>
                  </div>
                </div>

                <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-xl flex items-start gap-4">
                  <div className="p-3 bg-amber-500 text-white rounded-lg shadow-sm">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                      Hydro Tested
                    </span>
                    <span className="text-xl font-extrabold text-gray-900">15 KG Pressure</span>
                    <p className="text-xs text-gray-600 mt-0.5">Tested &amp; certified leak-free</p>
                  </div>
                </div>

                <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-xl flex items-start gap-4">
                  <div className="p-3 bg-amber-500 text-white rounded-lg shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                      Alloy Grade
                    </span>
                    <span className="text-xl font-extrabold text-gray-900">PB2 Grade 2</span>
                    <p className="text-xs text-gray-600 mt-0.5">Phosphor Bronze (BS1400 / IS 28)</p>
                  </div>
                </div>

              </div>

              {/* Detailed Specs Table */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  Technical Specification Summary
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-700 border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-100/70 w-1/3">Component Type</td>
                        <td className="py-3 px-4">Precision Machined Channels (Left Hand [LH] &amp; Right Hand [RH])</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-100/70">Material Alloy</td>
                        <td className="py-3 px-4">Phosphor Bronze Grade 2 (IS 28 PB2 / BS 1400 PB2 / UNS C90700)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-100/70">Finished Weight</td>
                        <td className="py-3 px-4">280 KG per unit</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-100/70">Pressure Rating</td>
                        <td className="py-3 px-4">Hydrostatically Tested to 15 KG/cm² Pressure (Leak-proof certified)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-100/70">Machining Finish</td>
                        <td className="py-3 px-4">High-precision CNC turning, boring, facing, and drilled flange pattern</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-100/70">Key Performance Attributes</td>
                        <td className="py-3 px-4">High tensile strength, exceptional wear &amp; fatigue resistance, low friction, and saltwater corrosion resistance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= OVERVIEW & EXPERTISE ================= */}
        <section className="mb-14 sm:mb-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                Bronze Casting Capabilities &amp; Metallurgy
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Brihaspati Non Ferrous Metal Foundry is a premier manufacturer of custom-engineered Bronze Castings designed for high wear resistance, corrosion resistance, and extended operational life in high-stress operating environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Alloys</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We cast Phosphor Bronze, Aluminum Bronze, Tin Bronze, Manganese Bronze, Gun Metal, and Nickel-Aluminum Bronze.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Moulding</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Utilizing Green Sand, CO₂ Moulding, No-Bake Moulding, and Centrifugal Casting for tight tolerances and dense grain structure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">100% Quality Tested</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Hydrostatic pressure testing, spectro-chemical analysis, NDT inspection, and full material test certificates (MTC).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="bg-gradient-to-r from-gray-900 via-slate-900 to-amber-950 text-white rounded-2xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Need Custom Phosphor Bronze Castings or Machined Components?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 font-light leading-relaxed">
              We specialize in custom weight bronze castings, machined channels, heavy valve bodies, and industrial pump components crafted to your exact technical specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/casting-material"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                Explore All Materials
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
