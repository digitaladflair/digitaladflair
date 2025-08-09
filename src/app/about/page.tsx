"use client";

import OurMission from "@/components/about/OurMission";
import WhoWeAre from "@/components/about/WhoWeAre";
import { Header } from "@/components/home/Header";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { WordRotate } from "@/components/magicui/word-rotate";
import { cn } from "@/lib/utils";
import React from "react";

const page = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-secondary via-background to-primary/5 relative">
      <div className="mt-10">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
            )}
          />
          <div className="flex flex-col">
            <WordRotate
              className="text-[8rem] font-bold text-black dark:text-white"
              words={[
                "Digital Adflair",
                "We Create",
                "We Shape",
                "We Innovate",
                "We Uplift",
              ]}
            />
          </div>
          <div className="flex flex-col gap-5 max-w-[90rem]">
            <p className="text-2xl text-muted-foreground ">
              Digital Adflair is a full-service digital marketing and IT
              solutions agency based in Bangalore, India. We help businesses
              grow online with smart strategies, powerful technology, and
              creative marketing.
            </p>
            <p className="text-2xl text-muted-foreground ">
              Founded by passionate digital experts, we’ve worked with startups,
              small businesses, and large enterprises across India and abroad.
              Whether you're just starting out or looking to scale, we have the
              tools and team to make it happen.
            </p>
          </div>
        </div>
      </div>

      <WhoWeAre />
      <OurMission />
    </div>
  );
};

export default page;
