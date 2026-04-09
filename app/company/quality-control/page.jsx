import { constructMetadata } from "@/lib/metadata";
import { MotionDiv, MotionSection, MotionH1, fadeIn, staggerContainer } from "@/components/MotionWrapper";
import { CheckCircle2, ShieldCheck, Microscope, Award } from "lucide-react";

export const metadata = constructMetadata({
  title: "Quality Control | Brihaspati Non-Ferrous Metal Foundry",
  description: "Our rigorous quality control processes ensure every casting meets international standards. From spectrometer analysis to dimensional inspection.",
});

export default function QualityControl() {
  const qualitySteps = [
    {
      title: "Spectro-Chemical Analysis",
      description: "Every heat is tested using advanced spectrometers to ensure precise chemical composition matches customer specifications.",
      icon: <Microscope className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Physical Testing",
      description: "We conduct tensile strength, hardness, and elongation tests to guarantee the mechanical integrity of our components.",
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Dimensional Inspection",
      description: "Using precision instruments, we verify all critical dimensions to ensure perfect fit and functionality.",
      icon: <CheckCircle2 className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Final Certification",
      description: "Every shipment is accompanied by a comprehensive Test Certificate (TC) providing full traceability.",
      icon: <Award className="w-8 h-8 text-amber-500" />
    }
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <MotionH1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-4"
          >
            Quality Without Compromise
          </MotionH1>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-27 h-1 bg-amber-500 mx-auto"
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto mb-16">
          <MotionSection {...fadeIn} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 italic text-gray-700">"Excellence is not an act, but a habit."</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Brihaspati Foundry, quality is the cornerstone of our operations. Our state-of-the-art laboratory and experienced Quality Assurance team work tirelessly to ensure that every casting leaving our facility is flawless.
            </p>
          </MotionSection>

          <MotionDiv
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {qualitySteps.map((step, index) => (
              <MotionDiv
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>

        <MotionSection {...fadeIn} className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Testing Capabilities</h2>
              <ul className="space-y-4">
                {[
                  "Optical Emission Spectrometer (24 Elements)",
                  "Digital Brinell & Rockwell Hardness Testers",
                  "Dye Penetrant Inspection (LPI/DP)",
                  "Ultrasonic Testing (UT) upon request",
                  "Micro-structure Analysis",
                  "Hydraulic Pressure Testing up to 300 Bar"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img src="/assets/1.jpg" alt="Testing Facility" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-multiply" />
            </div>
          </div>
        </MotionSection>
      </main>
    </div>
  );
}
