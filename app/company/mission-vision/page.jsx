import { constructMetadata } from "@/lib/metadata";
import { MotionDiv, MotionSection, MotionH1, fadeIn, staggerContainer } from "@/components/MotionWrapper";
import { Target, Compass, Sparkles, Handshake } from "lucide-react";

export const metadata = constructMetadata({
  title: "Mission & Vision | Brihaspati Non-Ferrous Metal Foundry",
  description: "Our core values, vision, and mission. Shaping the future of foundry technologies since 1994.",
});

export default function MissionVision() {
  const coreValues = [
    {
      title: "Integrity",
      description: "Transparency in every transaction, unwavering ethics.",
      icon: <Handshake className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Innovation",
      description: "Pushing limits, adopting next-gen foundry tech.",
      icon: <Sparkles className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Precision",
      description: "Detail-oriented, precision-driven, quality-focused.",
      icon: <Target className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Sustainability",
      description: "Responsible eco-friendly casting processes.",
      icon: <Compass className="w-8 h-8 text-amber-500" />
    }
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden bg-gray-50/50">
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16 md:py-24 px-4 overflow-hidden relative">
        <div className="container mx-auto">
          <MotionH1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center tracking-tight mb-4"
          >
            Visionary Growth
          </MotionH1>
          <MotionDiv 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="text-amber-500 text-center font-semibold uppercase tracking-widest text-lg"
          >
            Our Future is Forged with Precision
          </MotionDiv>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
      </header>

      <main className="container mx-auto px-4 py-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-24">
          <MotionSection {...fadeIn} className="bg-white p-12 rounded-3xl shadow-xl shadow-amber-500/5 border border-amber-500/10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-4 border-b pb-4">
              <span className="bg-amber-500 text-white p-2 rounded-lg"><Target size={24}/></span> Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-4">
              "To provide high-quality precision castings that empower global industries with reliable and sustainable engineering solutions."
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              We leverage over three decades of mastery in non-ferrous and stainless steel foundry processes to exceed client expectations at every single stage.
            </p>
          </MotionSection>

          <MotionSection {...fadeIn} className="bg-white p-12 rounded-3xl shadow-xl shadow-blue-500/5 border border-blue-500/10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-4 border-b pb-4">
              <span className="bg-gray-800 text-white p-2 rounded-lg"><Compass size={24}/></span> Our Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-4">
               "To become the world's leading center of excellence for specialty metal alloys and advanced casting technologies."
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
               We aspire to be the preferred choice for critical engineering components across aerospace, marine, oil & gas, and defense sectors globally.
            </p>
          </MotionSection>
        </section>

        <section className="max-w-6xl mx-auto py-16">
          <MotionSection {...fadeIn} className="text-center mb-16">
             <h2 className="text-4xl font-black text-gray-800 mb-4 tracking-tight">Our Core Values</h2>
             <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
               These values guide every decision we make, from the boardroom to the shop floor.
             </p>
          </MotionSection>

          <MotionDiv {...staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <MotionDiv 
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl flex flex-col items-center text-center shadow-md border border-gray-100 group hover:border-amber-500 transition-all duration-300"
              >
                <div className="mb-6 bg-gray-50 p-6 rounded-full group-hover:bg-amber-500/10 group-hover:scale-110 transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-500 font-light">{value.description}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </section>
      </main>
    </div>
  );
}
