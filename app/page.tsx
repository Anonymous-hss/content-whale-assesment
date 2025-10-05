import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import PricingCalculator from "@/app/components/PricingCalculator";
import FeaturesStats from "./components/FeaturesStats";
import FeaturedMentions from "./components/FeaturedMentions";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import ResourcesSection from "./components/ResourcesSection";
import FAQSection from "./components/FAQs";
import FinalSe from "./components/FinalSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />

      <PricingCalculator />
      <FeaturesStats withCurves={true} />
      <FeaturedMentions />
      <CaseStudies />
      <Testimonials />
      <ResourcesSection />
      <FAQSection />
      <FinalSe />
      {/* SEO Packages */}
    </main>
  );
}
