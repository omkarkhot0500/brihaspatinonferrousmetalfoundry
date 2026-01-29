export const metadata = {
  title: "Applications | Brihaspati Non-Ferrous Metal Foundry",
  description:
    "Discover the diverse applications of our metal castings across industries including aerospace, automotive, marine, and more.",
};

export default function Application() {
  const applications = [
    {
      id: "aeronautical",
      title: "Aeronautical And Aircraft Components",
      imgSrc: "/api/placeholder/400/300",
      alt: "Aeronautical and aircraft components manufactured by Brihaspati Cast",
    },
    {
      id: "automotive",
      title: "Automotive Diesel Engine And Generator Parts",
      imgSrc: "/api/placeholder/400/300",
      alt: "Automotive diesel engine and generator parts manufactured by Brihaspati Cast",
    },
    {
      id: "dairy",
      title: "Dairy Industry",
      imgSrc: "/api/placeholder/400/300",
      alt: "Dairy industry components manufactured by Brihaspati Cast",
    },
    {
      id: "defence",
      title: "Defence",
      imgSrc: "/api/placeholder/400/300",
      alt: "Defence components manufactured by Brihaspati Cast",
    },
    {
      id: "engineering",
      title: "Engineering",
      imgSrc: "/api/placeholder/400/300",
      alt: "Engineering components manufactured by Brihaspati Cast",
    },
    {
      id: "gas-turbines",
      title: "Gas Turbines Steam Traps Boiler Parts",
      imgSrc: "/api/placeholder/400/300",
      alt: "Gas turbines and boiler parts manufactured by Brihaspati Cast",
    },
    {
      id: "gear-pump",
      title: "Gear Pump Parts",
      imgSrc: "/api/placeholder/400/300",
      alt: "Gear pump parts manufactured by Brihaspati Cast",
    },
    {
      id: "industrial-valve",
      title: "Industrial Valve",
      imgSrc: "/api/placeholder/400/300",
      alt: "Industrial valves manufactured by Brihaspati Cast",
    },
    {
      id: "marine",
      title: "Marine Hardware And Instruments",
      imgSrc: "/api/placeholder/400/300",
      alt: "Marine hardware and instruments manufactured by Brihaspati Cast",
    },
    {
      id: "mining",
      title: "Mining Machinery And Earth Equipments",
      imgSrc: "/api/placeholder/400/300",
      alt: "Mining machinery and earth equipments manufactured by Brihaspati Cast",
    },
    {
      id: "air-compressors",
      title: "Air Compressors",
      imgSrc: "/api/placeholder/400/300",
      alt: "Air compressors manufactured by Brihaspati Cast",
    },
    {
      id: "conveyor",
      title: "Conveyor System And Material Handling",
      imgSrc: "/api/placeholder/400/300",
      alt: "Conveyor systems and material handling solutions by Brihaspati Cast",
    },
  ];

  return (
    <div className="font-sans">
      {/* Applications Section Header */}
      <div className="w-full bg-red-900 py-8 mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Applications
        </h2>
      </div>

      {/* Applications Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="relative overflow-hidden rounded shadow-md cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={app.imgSrc}
                alt={app.alt}
                className="w-full h-48 sm:h-56 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-80 p-3">
                <h3 className="text-white font-medium text-sm sm:text-base">
                  {app.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
