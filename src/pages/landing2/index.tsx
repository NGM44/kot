// // import CTA from "./../components/ui/CTA";
// // import FAQs from "./../components/ui/FAQs";
// // import Features from "./../components/ui/Features";
// // import Hero from "./../components/ui/Hero";
// // import Pricing from "./../components/ui/Pricing";
// // import Testimonial from "./../components/ui/Testimonial";
// // import VisualFeatures from "./../components/ui/VisualFeatures";

// import FAQ from "../landing/Faq";
// import CTA from "./CTA";
// import Features from "./Features";
// import Hero from "./Hero";
// import LotOfFeatures from "./LotOfFeatures";

// export default function NewLandingPage() {
//   return (
//     <div className="bg-gray-900">
//       <Hero />
//       <Features />
//       <LotOfFeatures />
//       <CTA />
//       <FAQ />
//       {/* <Hero />
//       <VisualFeatures />
//       <Features />
//       <CTA />
//       <Testimonial />
//       <Pricing />
//       <FAQs /> */}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const LandingPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'} text-center`}>
        <h1 className="text-6xl font-bold mb-8 text-blue-600">Sensormagics</h1>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <AlertCircle className="w-6 h-6 text-yellow-500" />
          <p className="text-xl font-semibold">Under Maintenance</p>
        </div>
        <p className="text-2xl mb-8">
          We're working on something magical!<br />
          We'll be back on <span className="font-bold text-blue-600">30th August</span>.
        </p>
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-blue-600 animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

const styles = `
@keyframes progress {
  0% { width: 0; }
  100% { width: 100%; }
}

.animate-progress {
  animation: progress 30s linear infinite;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);