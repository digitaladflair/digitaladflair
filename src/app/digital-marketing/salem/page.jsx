
export const metadata = {
  title: "Digital Marketing Company in Salem | SEO, Google Ads & SMM",
  description:
    "Top digital marketing company in Salem offering SEO, PPC, social media marketing & lead generation. Affordable plans for local businesses & startups.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.digitaladflair.com/digital-marketing/salem/",
  },
};

import { AreasSection } from "../../../components/digitalmarketing/AreaSection";
import { CaseStudiesSection } from "../../../components/digitalmarketing/CaseStudiesSection";
import { ContactSection } from "../../../components/digitalmarketing/ContactSection";
import { FAQSection } from "../../../components/digitalmarketing/FAQSection";
import { HeroSection } from "../../../components/digitalmarketing/HeroSection";
import { PackagesSection } from "../../../components/digitalmarketing/PackagesSection";
import { ServicesSection } from "../../../components/digitalmarketing/ServiceSection";
import { WhySection } from "../../../components/digitalmarketing/WhySection";
import { caseStudiesSalem, contactSalem, faqsSalem, heroSalem, packagesSalem, servicesSalem, whySalem } from "../../../data/digitalmarketing/salem";

export default function SalemPage() {
  return (
    <>
    <HeroSection {...heroSalem}/>
    <main className="container mx-auto">
    <WhySection {...whySalem}/>
  <ServicesSection {...servicesSalem}/>
  <CaseStudiesSection {...caseStudiesSalem}/>
  <AreasSection {...AreasSection}/>
  <PackagesSection {...packagesSalem}/>
  <FAQSection {...faqsSalem}/>
  <ContactSection {...contactSalem}/>
    </main>
    </>
  );
}