import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Adflair – Complete IT & Digital Solutions for Modern Businesses",
  description: "Explore Digital Adflair's full-suite IT & digital services – web, apps, cloud, AI, marketing & more. One-stop solutions to power your business growth.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.digitaladflair.com/',
  },
};

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
    <>
    <HeroSection />
     <main className="container mx-auto">
       <WhyChoose />
      <ServicesSection />
      <IndustriesSection />
      <TechnologiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection /> 
    </main>
    </>
  );
}
