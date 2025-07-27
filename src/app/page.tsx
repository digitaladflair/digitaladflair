"use client";

import { FAQ } from "@/components/home/FAQ";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Technologies } from "@/components/home/Technologies";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { use } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-primary/5">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Industries />
      <Technologies />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
