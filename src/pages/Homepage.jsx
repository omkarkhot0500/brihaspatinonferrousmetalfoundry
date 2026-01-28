import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import StainlessCasting from "../assets/StainlessCasting.png";
import CO2Casting from "../assets/CO2Casting.jpg";
import GravityCasting from "../assets/GravityCasting.png";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Img1,
      title: "Get the Best non-ferous Solutions from Us!",
      description:
        "High-quality metal casting solutions for all your industrial needs",
    },
    {
      image: Img2,
      title: "Precision Engineering at Its Finest",
      description: "Expert craftsmanship with advanced technology",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <Helmet>
        <title>
          brishpathi Cast Pvt. Ltd. | Non-Ferrous Solutions & Metal Casting
          Experts
        </title>
        <meta
          name="description"
          content="Leading manufacturer of ferrous & non-ferrous Non-Ferrous, lost wax castings, and feinguss. Quality control at all levels for perfect metal casting solutions."
        />
        <meta
          name="keywords"
          content="Non-Ferrous, lost wax casting, metal casting, ferrous casting, non-ferrous casting, feinguss, quality control"
        />
        <link rel="canonical" href="https://brishpathi.com" />
        <meta
          property="og:title"
          content="brishpathi Cast Pvt. Ltd. | Non-Ferrous Solutions"
        />
        <meta
          property="og:description"
          content="Leading manufacturer of ferrous & non-ferrous Non-Ferrous with severe quality control at all levels."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brishpathi.com" />
        <meta
          property="og:image"
          content="https://brishpathi.com/images/logo.png"
        />
      </Helmet>

      {/* HERO SLIDER */}
      <section className="relative min-h-[520px] md:min-h-[640px] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out
          ${
            isActive
              ? "opacity-100 z-10 pointer-events-auto"
              : "opacity-0 z-0 pointer-events-none"
          }
        `}
            >
              {/* Background image */}
              <div
                className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-[6000ms] ease-out
            ${isActive ? "scale-105" : "scale-100"}
          `}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  willChange: "transform",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-5xl mx-auto px-6 text-center">
                  <p className="mb-4 inline-block rounded-full border border-amber-400/40 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">
                    Precision · Reliability · Quality
                  </p>

                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                    {slide.title}
                  </h1>

                  <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* PREV BUTTON */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="z-30 absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur-md hover:bg-black/60 transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="z-30 absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur-md hover:bg-black/60 transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300
          ${
            i === currentSlide
              ? "w-8 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
              : "w-2.5 bg-white/40 hover:bg-white/70"
          }
        `}
            />
          ))}
        </div>
      </section>

      {/* QUALITY BANNER */}
      <section className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 py-6 md:py-8 shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center tracking-tight">
            Get Products to Perfection with Severe Quality Control Applied at
            All Levels
          </h2>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-xl shadow-slate-400/20 backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
              <div className="px-6 py-8 md:px-8 md:py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center">
                  Company Profile
                </h2>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-full md:w-1/3 overflow-hidden rounded-xl">
                    <img
                      src="/images/company-building.jpg"
                      alt="brishpathi Cast Facility"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      At Brishpathi Cast Pvt. Ltd., we specialize in
                      manufacturing non-ferrous sand castings including CO₂ sand
                      casting and no-bake mold casting, gravity die casting,
                      shell mold casting, and centrifugal casting in copper
                      alloys and stainless steel, as per customers’
                      requirements.
                    </p>
                    <a
                      href="/about"
                      className="inline-flex items-center text-amber-700 hover:text-amber-800 font-semibold text-sm tracking-wide"
                    >
                      Read More
                      <span className="ml-1 inline-block translate-y-[1px] transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="container mx-auto px-4">
        <hr className="border-t border-slate-200/80 my-8" />
      </div>

      {/* SERVICES */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
            Our Specialized Services
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            From complex non-ferrous castings to high-precision sand and
            centrifugal casting solutions, we deliver consistent,
            high-performance components for demanding industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl shadow-md shadow-slate-300/40 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/20 border border-slate-100">
              <div className="relative overflow-hidden">
                <img
                  src={StainlessCasting}
                  alt="Non-Ferrous Casting"
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Stainless Steel</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  High-performance stainless steel castings engineered for
                  superior corrosion resistance, strength, and durability in
                  demanding industrial applications.
                </p>

                <a
                  href="/products/GeneralEngineeringCasting"
                  className="inline-flex text-amber-700 hover:text-amber-800 font-semibold text-sm tracking-wide"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl shadow-md shadow-slate-300/40 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/20 border border-slate-100">
              <div className="relative overflow-hidden">
                <img
                  src={CO2Casting}
                  alt="Lost Wax Casting"
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">CO₂ Sand Casting</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  A precision sand casting process using CO₂-hardened molds to
                  achieve excellent surface finish, dimensional accuracy, and
                  consistent quality.
                </p>

                <a
                  href="/products/CO2MouldCasting"
                  className="inline-flex text-amber-700 hover:text-amber-800 font-semibold text-sm tracking-wide"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl shadow-md shadow-slate-300/40 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/20 border border-slate-100">
              <div className="relative overflow-hidden">
                <img
                  src={GravityCasting}
                  alt="Feinguss"
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Gravity Die Casting
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Metal casting using permanent molds and gravity filling to
                  produce dense, high-quality components with excellent
                  mechanical properties.
                </p>

                <a
                  href="/products/GravityDieCasting"
                  className="inline-flex text-amber-700 hover:text-amber-800 font-semibold text-sm tracking-wide"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / LONG CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Non-Ferrous Casting Manufacturers &amp; Suppliers
          </h1>
          <div className="h-1 w-full max-w-md bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 mb-8 rounded-full" />
          <p className="text-slate-600 mb-8 leading-relaxed text-justify">
            Brihaspati Pvt. Ltd., leading Non-Ferrous Casting manufacturers
            based in India, offers better design capability, casting integrity
            and close tolerances. The Non-Ferrous Casting process provides
            secured quality assurance, inexpensive tooling and shorter lead
            times. The span of mechanical properties at the static or dynamic
            level continues to be the same in every dimension and meets strict
            quality requirements. It proves to be cost-effective for prototype
            development and allows superior design for extremely simple to
            highly complicated Non-Ferrous Casting products and parts. With
            Brihaspati Cast as your Non-Ferrous Casting supplier, you have
            complete freedom to select alloys, which ultimately helps in
            reducing labor costs and tooling costs.
          </p>
        </div>

        {/* FEATURES ROWS */}
        {/* FEATURES ROWS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              CO₂ Sand Casting
            </h3>
            <div className="h-1 w-16 bg-amber-500 mb-4 rounded-full" />
            <p className="text-slate-600">
              CO₂ sand casting enables strong, rigid molds with good surface
              finish, suitable for complex geometries and consistent dimensional
              accuracy.
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No-Bake Mold Casting
            </h3>
            <div className="h-1 w-16 bg-amber-500 mb-4 rounded-full" />
            <p className="text-slate-600">
              No-bake molding is ideal for large and complex castings, offering
              excellent mold strength, flexibility in design, and reduced
              tooling constraints.
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Gravity Die Casting
            </h3>
            <div className="h-1 w-16 bg-amber-500 mb-4 rounded-full" />
            <p className="text-slate-600">
              Gravity die casting uses permanent molds to produce dense,
              high-quality components with superior mechanical properties and
              repeatability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Shell Mold Casting
            </h3>
            <div className="h-1 w-16 bg-amber-500 mb-4 rounded-full" />
            <p className="text-slate-600">
              Shell mold casting delivers excellent surface finish and
              dimensional precision, making it suitable for intricate components
              and tighter tolerances.
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Centrifugal Casting
            </h3>
            <div className="h-1 w-16 bg-amber-500 mb-4 rounded-full" />
            <p className="text-slate-600">
              Centrifugal casting produces defect-free, high-density components
              with superior mechanical strength, especially for cylindrical and
              hollow parts.
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Copper Alloy Castings
            </h3>
            <div className="h-1 w-16 bg-amber-500 mb-4 rounded-full" />
            <p className="text-slate-600">
              Copper alloy castings offer excellent corrosion resistance, wear
              resistance, and thermal conductivity for marine, industrial, and
              process applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Stainless Steel Castings
            </h3>
            <div className="h-1 w-16 bg-amber-500 mb-4 rounded-full" />
            <p className="text-slate-600">
              Stainless steel castings are engineered for high strength,
              corrosion resistance, and durability in demanding environments and
              critical applications.
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Process Versatility
            </h3>
            <div className="h-1 w-16 bg-amber-500 mb-4 rounded-full" />
            <p className="text-slate-600">
              Multiple casting processes allow selection of the most suitable
              method based on component size, complexity, alloy type, and
              performance requirements.
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Consistent Quality Output
            </h3>
            <div className="h-1 w-16 bg-amber-500 mb-4 rounded-full" />
            <ul className="text-slate-600 space-y-2">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">—</span>
                <span>Stable and repeatable casting processes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">—</span>
                <span>Strict control over metallurgy and solidification.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">—</span>
                <span>High integrity castings with reduced defects.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">—</span>
                <span>Optimized cost without compromising performance.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* INDIA SECTION */}
        <div className="mt-16">
          <div className="h-1 w-full max-w-md bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 mb-8 mx-auto rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Non-Ferrous Casting Manufacturers in India
          </h2>
          <p className="text-slate-600 leading-relaxed text-justify">
            Brihaspati is one of the most renowned Non-Ferrous Casting
            manufacturers in India. In our facility, we design intricate
            castings using efficient and quick production processes. We deploy
            the latest Non-Ferrous Casting technology and tools, helping us
            achieve high-quality castings at remarkable speed. This method is
            also extremely cost-effective for prototype development. We use a
            wide range of metals and alloys, and our rigorously defined process
            empowers us to produce castings with exceptionally fine surface
            finish and accuracy.
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-slate-900"
      >
        <div className="max-w-5xl mx-auto text-slate-100">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Benefits of Working with Us
          </h2>

          <p className="text-slate-300 mb-4 leading-relaxed">
            Brihaspati Non Ferrous Metal Foundry is a rapidly growing
            manufacturer of high-integrity non-ferrous and stainless steel
            castings in India. We focus on delivering reliable,
            precision-engineered components that meet stringent quality and
            performance requirements across global industries.
          </p>

          <p className="text-slate-300 mb-4 leading-relaxed">
            If you would like to know more about our casting capabilities such
            as CO₂ Sand Casting, No-Bake Molding, Gravity Die Casting, Shell
            Mold Casting, or Centrifugal Casting, please feel free to{" "}
            <a
              href="/contact"
              className="text-amber-300 hover:text-amber-200 font-semibold"
            >
              contact us
            </a>
            .
          </p>

          <p className="text-slate-300 mb-8 leading-relaxed">
            Our modern manufacturing facility, supported by skilled
            professionals and strict process control, ensures consistent
            quality, full material traceability, and dependable delivery for
            every project.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-amber-400 flex-shrink-0 mt-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-slate-200">
                Uncompromising quality control at every stage of casting and
                finishing.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-amber-400 flex-shrink-0 mt-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-slate-200">
                Strong engineering support to solve complex application
                challenges.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-amber-400 flex-shrink-0 mt-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-slate-200">
                Reliable delivery commitments backed by disciplined production
                planning.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Homepage;
