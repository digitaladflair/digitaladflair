"use client";

import { AreasWeServe } from "@/components/contact/AreasWeServe";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { OfficeLocation } from "@/components/contact/ContactLocation";
import { FAQ } from "@/components/contact/FAQ";
import { HeroSection } from "@/components/contact/HeroSection";
import { SocialMedia } from "@/components/contact/SocialMedia";
import { WhyChooseUs } from "@/components/contact/WhyChooseUs";
import { WhoShouldContact } from "@/components/contact/WhyShouldContact";
import SEO from "@/components/seo/seo";
import { contactPageMetadata } from "@/constants/seo.config";

const ContactPage = () => {
  return (
    <>
      <SEO {...contactPageMetadata} />
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ContactInfo />
        <OfficeLocation />
        <ContactForm />
        <FAQ />
        <WhoShouldContact />
        <WhyChooseUs />
        <AreasWeServe />
        <SocialMedia />
      </div>
    </>
  );
};

export default ContactPage;
