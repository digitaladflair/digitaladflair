export const metadata = {
  title: "Digital Marketing Company in Coimbatore | SEO, Google Ads & SMM",
  description:
    "Top digital marketing company in Coimbatore offering SEO, PPC, social media marketing & lead generation. Affordable plans for local businesses & startups.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.digitaladflair.com/digital-marketing/coimbatore",
  },
};

import { AreasSection } from "../../../components/digitalmarketing/AreaSection";
import { TestimonialsSection } from "../../../components/digitalmarketing/TestimonialsSection";
import { ContactSection } from "../../../components/digitalmarketing/ContactSection";
import { FAQSection } from "../../../components/digitalmarketing/FAQSection";
import { HeroSection } from "../../../components/digitalmarketing/HeroSection";
import { PackagesSection } from "../../../components/digitalmarketing/PackagesSection";
import { ServicesSection } from "../../../components/digitalmarketing/ServiceSection";
import { WhySection } from "../../../components/digitalmarketing/WhySection";
import { IndustriesSection } from "../../../components/digitalmarketing/IndustriesSection";

import {
  heroCoimbatore,
  whyCoimbatore,
  servicesCoimbatore,
  industriesCoimbatore,
  testimonialsCoimbatore,
  areasCoimbatore,
  packagesCoimbatore,
  faqsCoimbatore,
  contactCoimbatore,
} from "../../../data/digitalmarketing/coimbatore";

export default function CoimbatorePage() {
  return (
    <>
      <HeroSection {...heroCoimbatore} />
      <main className="container mx-auto">
        <WhySection {...whyCoimbatore} />
        <ServicesSection {...servicesCoimbatore} />
        <IndustriesSection {...industriesCoimbatore} />
        <TestimonialsSection {...testimonialsCoimbatore} />
        <AreasSection {...areasCoimbatore} />
        <PackagesSection {...packagesCoimbatore} />
        <FAQSection {...faqsCoimbatore} />
        <ContactSection {...contactCoimbatore} />
      </main>
    </>
  );
}
