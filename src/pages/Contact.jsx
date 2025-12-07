import React from "react";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <section id="contact" className="w-full">
        {/* Contact Header with Dark Blue Background */}
        <div className="w-full bg-gray-900 py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/api/placeholder/1200/300"
              alt="Keyboard background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
              Contact Us
            </h2>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Address Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                {/* Company Name and Address */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Meena Cast Pvt. Ltd.
                    </h3>
                    <div className="mt-2 text-gray-600 space-y-1">
                      <p>"In Street Of Meena Cast Gate"</p>
                      <p>Survey No. 251, Rajkot-Gondal NH-27,</p>
                      <p>Village : Shapar-Veraval, Taluka : Kotda Sangani,</p>
                      <p>Dist. : Rajkot (Gujarat, India) 360 024.</p>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="mt-1 text-gray-600 space-y-1">
                      <p>+91 2827 252117</p>
                      <p>+91 2827 252118</p>
                    </div>
                  </div>
                </div>

                {/* Director Contact */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Anil Ghedia (Director)
                    </h3>
                    <div className="mt-1 text-gray-600">
                      <p>+91 98242 34488</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                {/* Sales & Marketing */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Sales & Marketing
                    </h3>
                    <div className="mt-1 text-gray-600">
                      <a
                        href="mailto:info@meenacast.com"
                        className="text-red-600 hover:text-red-700"
                      >
                        info@meenacast.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Procurement */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Procurement
                    </h3>
                    <div className="mt-1 text-gray-600">
                      <a
                        href="mailto:purchase@meenacast.com"
                        className="text-red-600 hover:text-red-700"
                      >
                        purchase@meenacast.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Accounts */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Accounts
                    </h3>
                    <div className="mt-1 text-gray-600">
                      <a
                        href="mailto:accounts@meenacast.com"
                        className="text-red-600 hover:text-red-700"
                      >
                        accounts@meenacast.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Human Resources */}
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Human Resources
                    </h3>
                    <div className="mt-1 text-gray-600">
                      <a
                        href="mailto:hr@meenacast.com"
                        className="text-red-600 hover:text-red-700"
                      >
                        hr@meenacast.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                {/* Google Map - Company Location */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Location
          </h3>
          <div className="rounded-lg overflow-hidden shadow-md h-72 md:h-96">
            <iframe
              src="https://www.google.com/maps?q=Brihaspati+Non-Ferrous+Metal+Foundry&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <Form/>
      </section>
    </>
  );
};

export default Contact;
