// import CTA from "./../components/ui/CTA";
// import FAQs from "./../components/ui/FAQs";
// import Features from "./../components/ui/Features";
// import Hero from "./../components/ui/Hero";
// import Pricing from "./../components/ui/Pricing";
// import Testimonial from "./../components/ui/Testimonial";
// import VisualFeatures from "./../components/ui/VisualFeatures";

import FAQ from "../landing/Faq";
import CTA from "./CTA";
import Features from "./Features";
import Hero from "./Hero";
import LotOfFeatures from "./LotOfFeatures";

export default function NewLandingPage() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Features />
      <LotOfFeatures />
      <CTA />
      <FAQ />
      {/* <Hero />
      <VisualFeatures />
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQs /> */}
    </div>
  );
}
