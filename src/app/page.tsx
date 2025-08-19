"use client";

import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Technologies } from "@/components/home/Technologies";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import SEO from "@/components/seo/seo";
import { homePageMetadata } from "@/constants/seo.config";

export default function Home() {
  return (
    <>
      <SEO {...homePageMetadata} />
      <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-primary/5">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Industries />
        <Technologies />
        <Process />
        <Testimonials />
        <FAQ />
      </div>
    </>
  );
}
