import React from 'react';

const Steelcasting = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header with semantic HTML for SEO */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-8 px-4 md:py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Steel Casting</h1>
        </div>
      </header>
      
      {/* Main content section */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Company Introduction Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Meena Cast is one of the leading stainless steel casting exporters in India. We are also considered a renowned Inconel casting manufacturer. We have a knowledgeable and experienced team that specializes in duplex steel casting manufacturing. We have a dedicated team of casting experts who leave no stone unturned to manufacture high-quality stainless steel and other castings for various industries. The demand for castings is not limited to a particular industry. A wide range of industries are using castings, and therefore, more and more varieties of castings are in demand. We make sure that we make and supply a huge variety of stainless steel or Inconel castings to the users to fulfill their requirements.
            </p>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Why choose Meena Cast Pvt. Ltd. as the best stainless steel casting exporter?
            </h2>
            <p className="text-gray-700 mb-8">
              Here're a few of the top reasons to buy stainless steel castings and other castings from Meena Cast Pvt. Ltd.:
            </p>
            
            {/* Certification Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Our certifications and superb quality</h3>
              <p className="text-gray-700 leading-relaxed">
                Meena Cast Pvt. Ltd. believes in supplying only the best quality castings to users as leading stainless steel, Inconel, and duplex steel casting manufacturer. We use tested and high-quality materials to make the castings. At the same time, we also make sure that we quality test our castings frequently, as we aim to offer only top-notch castings to our clients as one of the top-class stainless steel exporters. Also, we keep a close eye on industry trends and we keep upgrading our quality processes to test the castings even better. We have also acquired all the necessary certifications needed to manufacture and supply top-quality castings to our clients.
              </p>
            </div>
            
            {/* Reliability Section */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Reliability and trust</h3>
              <p className="text-gray-700 leading-relaxed">
                We have an advanced manufacturing unit; therefore, we are known as one of the most advanced Inconel and duplex steel casting manufacturers. Our team is capable of offering top-notch quality and very efficient castings as per the clients' requirements. Our clients know that we supply only tested and good-quality material. Therefore, they partner with us for long periods of time. Also, they recommend us to different clients as they know we offer them top-notch castings. We have been able to gain the trust of our clients by constantly fulfilling their expectations. We believe that the good quality of our castings has a major role to play in helping us build long and strong relationships with our clients.
              </p>
            </div>
            
            {/* Customized Offerings */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Customized Offerings</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team at Meena Cast aims to understand the specific requirements of every client to provide them with the best possible castings. We carefully understand and acknowledge the clients' requirements and based on that, we offer them the most suitable castings as per their needs. We can offer customized products as well if the client demands them. Even while making sure that we are offering customized castings and services to the client, we make sure that we focus on the quality of the products. Also, we believe in providing products at suitable prices to our clients.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Steelcasting;