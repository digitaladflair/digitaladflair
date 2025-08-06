"use client";

import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Technologies } from "@/components/home/Technologies";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
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
  );
}
