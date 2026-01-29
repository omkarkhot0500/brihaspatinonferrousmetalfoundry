import Form from "@/components/Form";

export const metadata = {
  title: "Contact Us | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "Get in touch with Brihaspati for inquiries about our metal casting services, certifications, and manufacturing capabilities.",
};

export default function Contact() {
  return (
    <>
      <section id="contact" className="w-full">
        {/* Header */}
        <div className="w-full bg-gray-900 py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/api/placeholder/1200/300"
              alt="Foundry background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
              Contact Us
            </h2>
          </div>
        </div>

        {/* ================= COMPANY DETAILS ================= */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    📍
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Brihaspati Non-Ferrous Metal Foundry
                  </h3>
                  <div className="mt-2 text-gray-600 space-y-1">
                    <p>Plot No. 70, Road No. 8</p>
                    <p>KIADB Industrial Area</p>
                    <p>Kittur, Belagavi – 591115</p>
                    <p>Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    📞
                  </div>
                </div>
                <div className="text-gray-600">+91 83104 32701</div>
              </div>

              {/* Email */}
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    ✉️
                  </div>
                </div>
                <div>
                  <a
                    href="mailto:brihaspati.industries@gmail.com"
                    className="text-red-600 hover:text-red-700"
                  >
                    brihaspati.industries@gmail.com
                  </a>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Manufacturer of Copper Alloy, Stainless Steel Alloy Castings &
                Machined Components
              </p>
            </div>
          </div>
        </div>

        {/* ================= LET'S CONNECT (FORM) ================= */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Form />
        </div>

        {/* ================= GOOGLE MAP ================= */}
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
      </section>
    </>
  );
}
