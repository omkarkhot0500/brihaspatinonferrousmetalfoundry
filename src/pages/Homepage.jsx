import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight, Mail, Phone } from "lucide-react";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Img1,
      title: "Get the Best Investment Casting Solutions from Us!",
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
          brishpathi Cast Pvt. Ltd. | Investment Casting Solutions & Metal
          Casting Experts
        </title>
        <meta
          name="description"
          content="Leading manufacturer of ferrous & non-ferrous investment casting, lost wax castings, and feinguss. Quality control at all levels for perfect metal casting solutions."
        />
        <meta
          name="keywords"
          content="investment casting, lost wax casting, metal casting, ferrous casting, non-ferrous casting, feinguss, quality control"
        />
        <link rel="canonical" href="https://brishpathi.com" />
        <meta
          property="og:title"
          content="brishpathi Cast Pvt. Ltd. | Investment Casting Solutions"
        />
        <meta
          property="og:description"
          content="Leading manufacturer of ferrous & non-ferrous investment casting with severe quality control at all levels."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brishpathi.com" />
        <meta
          property="og:image"
          content="https://brishpathi.com/images/logo.png"
        />
      </Helmet>
      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Title above the image */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mb-6">
                {slide.title}
              </h1>
              <p className="text-xl text-white max-w-2xl">
                {slide.description}
              </p>
            </div>

            {/* Background image with overlay */}
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>
      {/* Quality Banner */}
      <section className="bg-red-600 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Get Products to Perfection with Severe Quality Control Applied at
            all the Levels!
          </h2>
        </div>
      </section>
      {/* Company Info Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Profile Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                  Company Profile
                </h2>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img
                    src="/images/company-building.jpg"
                    alt="brishpathi Cast Facility"
                    className="w-full md:w-1/3 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-gray-600 mb-6">
                      At brishpathi Cast Pvt. Ltd., we are specialized in
                      manufacturing all types of Ferrous & Non-Ferrous
                      Investment Casting, Lost Wax Castings, Feinguss, and more,
                      as per customers' requirements.
                    </p>
                    <a
                      href="/about"
                      className="inline-block text-red-600 hover:text-red-700 font-medium"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                  Milestones Achieved
                </h2>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img
                    src="/images/casting-process-small.jpg"
                    alt="Investment Casting Process"
                    className="w-full md:w-1/3 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-gray-600 mb-6">
                      Investment Casting uses lost wax method which is not a new
                      one. It is among the oldest known casting techniques and
                      you will get many examples of it to produce jewelry and
                      statuary.
                    </p>
                    <a
                      href="/milestones"
                      className="inline-block text-red-600 hover:text-red-700 font-medium"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-8" />
      </div>
      {/* Services/Products Preview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img
                src="/images/investment-casting.jpg"
                alt="Investment Casting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Investment Casting</h3>
                <p className="text-gray-600 mb-4">
                  Precision engineered investment casting solutions for complex
                  components with tight tolerances.
                </p>
                <a
                  href="/investment-casting"
                  className="inline-block text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img
                src="/images/lost-wax-casting.jpg"
                alt="Lost Wax Casting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Lost Wax Casting</h3>
                <p className="text-gray-600 mb-4">
                  Traditional lost wax casting technique perfected with modern
                  technology for superior results.
                </p>
                <a
                  href="/lost-wax-casting"
                  className="inline-block text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img
                src="/images/feinguss.jpg"
                alt="Feinguss"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Feinguss</h3>
                <p className="text-gray-600 mb-4">
                  German precision engineering principles applied to create
                  high-quality precision castings.
                </p>
                <a
                  href="/feinguss"
                  className="inline-block text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-700 mb-6">
            Investment Casting Manufacturers & Suppliers
          </h1>
          <div className="h-1 w-full max-w-md bg-red-500 mb-8"></div>
          <p className="text-gray-600 mb-8">
            Meena Cast Pvt. Ltd., Leading Investment Casting Manufacturers based
            in India offers better design capability, casting integrity and
            close tolerances. The Investment Casting process provides secured
            quality assurance, inexpensive tooling and a shorter lead time. The
            span mechanical properties at the static or dynamic level continue
            to be the same in every dimension and meets strict quality
            requirements. It proves to be cost-effective for the prototype
            development and allows superior design for extremely easy to highly
            complicated Investment Casting products and parts quantities. In
            Investment Casting Suppliers Meena Cast you have complete freedom to
            select alloys, which ultimately helps in reducing the labor costs
            and tooling costs.
          </p>
        </div>

        {/* First Row of Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Design Flexibility
            </h3>
            <div className="h-1 w-16 bg-red-500 mb-4"></div>
            <p className="text-gray-600">
              Casting can be done with compound features like 3D counters,
              undercuts, and thin walls.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Wide Range of Alloys
            </h3>
            <div className="h-1 w-16 bg-red-500 mb-4"></div>
            <p className="text-gray-600">
              We can routinely cast all the standards available in the world in
              Ferrous and Non-Ferrous metals.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Freedom of Choosing Alloy
            </h3>
            <div className="h-1 w-16 bg-red-500 mb-4"></div>
            <p className="text-gray-600">
              The components can be produced with aluminum, superalloy, or
              titanium, best suited for the application.
            </p>
          </div>
        </div>

        {/* Second Row of Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Lower Component Cost
            </h3>
            <div className="h-1 w-16 bg-red-500 mb-4"></div>
            <p className="text-gray-600">
              Investment Casting provides various functional features that help
              you cut the general manufacturing cost and several sub-assemblies.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Minimizes the Machining Operations
            </h3>
            <div className="h-1 w-16 bg-red-500 mb-4"></div>
            <p className="text-gray-600">
              The most efficient and functionally dimensioning method minimizes
              the requirement of successive machining operations.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Consistency and Close Tolerances
            </h3>
            <div className="h-1 w-16 bg-red-500 mb-4"></div>
            <p className="text-gray-600">
              Provides control over the procedure variables, which results in
              outstanding product consistency and closer tolerances.
            </p>
          </div>
        </div>

        {/* Third Row of Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Economical in Terms of Production and Prototype Quantities
            </h3>
            <div className="h-1 w-16 bg-red-500 mb-4"></div>
            <p className="text-gray-600">
              Prototypes and huge production can be done economically. In
              addition, by including many useful features in one single casting,
              you can lower the break-even quantity significantly.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Higher Static & Dynamic Mechanical Properties
            </h3>
            <div className="h-1 w-16 bg-red-500 mb-4"></div>
            <p className="text-gray-600">
              Precise solidification casting methods of Casting Manufacturers
              produce components with better mechanical properties.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Procedure is the Solution of These Four Main Problems
            </h3>
            <div className="h-1 w-16 bg-red-500 mb-4"></div>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">—</span>
                <span>
                  Casting must be reproducible inside closer dimensional limits.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">—</span>
                <span>
                  Casting must be done with higher melting-point alloys.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">—</span>
                <span>There must be metallurgical quality standards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">—</span>
                <span>Costs must be lower than alternative methods.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* India Section */}
        <div className="mt-16">
          <div className="h-1 w-full max-w-md bg-red-500 mb-8 mx-auto"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-6">
            Investment Casting Manufacturers in India
          </h2>
          <p className="text-gray-600">
            Meena Cast is one of the most renowned Investment Casting
            Manufacturers in India. In our Casting Manufacturers facility, we
            design intricate castings. The casting manufacturing process is very
            efficient and quick. We use the latest Investment Casting technology
            and tools, that helps us to make good quality castings at a very
            fast speed. Casting Manufacturers is also a cost-effective method
            for making prototype development. We use a wide range of metals and
            alloys for casting. Our specifically defined process empowers us to
            make castings with extremely fine finishing.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-6">
            Benefits of Working with Us
          </h2>

          <p className="text-gray-600 mb-4">
            Meena Cast Pvt. Ltd. is among the best investment casting
            manufacturers in India. Meena Cast Pvt. Ltd. is a BSCIC, PED, and
            IBR registered company. Our optimum quality standards and global
            quality control procedures are certified by TUV NORD DIN EN 9001:
            2015., PED & AD 2000-Merkblatt W0 certification.
          </p>

          <p className="text-gray-600 mb-4">
            If you would like to know more about our investment casting or how
            we became one of the leading investment casting manufacturers,
            please feel free to{" "}
            <a
              href="#contact"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              contact us
            </a>
            .
          </p>

          <p className="text-gray-600 mb-8">
            Our online system and network of ERP offers the fastest and most
            proficient online order processing system. We manufacture our
            products to perfection with severe quality control applied at all
            the levels. We have the biggest Machinery and Plant with in-house
            Testing Laboratory.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-500 flex-shrink-0 mt-1 mr-3">
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
              <span className="text-gray-600">
                We make sure about quality at every stage of our procedure.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-red-500 flex-shrink-0 mt-1 mr-3">
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
              <span className="text-gray-600">
                We are completely dedicated towards problem solving.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-red-500 flex-shrink-0 mt-1 mr-3">
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
              <span className="text-gray-600">
                We always provide realistic and flexible deadlines for delivery.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Homepage;
