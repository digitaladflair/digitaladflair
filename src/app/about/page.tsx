import OurMission from "@/components/about/OurMission";
import WhoWeAre from "@/components/about/WhoWeAre";
import { WordRotate } from "@/components/magicui/word-rotate";
import { aboutPageMetadata } from "@/constants/seo.config";
import { Metadata } from "next";

export const metadata: Metadata = aboutPageMetadata;

const page = () => {
  return (
    <>
      <div className=" min-h-screen bg-gradient-to-br from-secondary via-background to-primary/5 relative ">
        <div className="mt-10">
          <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden rounded-lg bg-background bg-[url('/blur-mesh.svg')] py-20">
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
            </div>
            <div className="flex flex-col">
              <WordRotate
                className="text-5xl md:text-7xl font-semibold mb-8 leading-tight text-primary"
                words={["We Create", "We Shape", "We Innovate", "We Uplift"]}
              />
            </div>
            <div className="flex flex-col gap-5 text-xl text-center text-gray-600 leading-relaxed max-w-4xl mx-auto">
              <p className="text-2xl text-muted-foreground ">
                Digital Adflair is a full-service digital marketing and IT
                solutions agency based in Bangalore, India. We help businesses
                grow online with smart strategies, powerful technology, and
                creative marketing.
              </p>
              <p className="text-2xl text-muted-foreground ">
                Founded by passionate digital experts, we’ve worked with
                startups, small businesses, and large enterprises across India
                and abroad. Whether you're just starting out or looking to
                scale, we have the tools and team to make it happen.
              </p>
            </div>
          </div>
        </div>

        <WhoWeAre />
        <OurMission />
      </div>
    </>
  );
};

export default page;
