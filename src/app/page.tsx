// src/app/page.tsx
import {HeroSection} from "../components/HeroSection";
import {WhyChoose} from "../components/WhyChoose";
 import {ServicesSection} from "../components/ServicesSection";
 import {IndustriesSection} from "../components/IndustriesSection";
import {TechnologiesSection} from "../components/TechnologiesUsed";
 import {ProcessSection} from "../components/ProcessSection";
 import {TestimonialsSection} from "../components/TestimonialsSections";
import {FAQSection} from "../components/FAQSection";
 import {CTASection} from "@/components/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
       <WhyChoose />
      <ServicesSection />
      <IndustriesSection />
      <TechnologiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection /> 
    </main>
  );
}
