import { Rocket, Layout, Compass } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Rocket,
    title: "Multi-disciplinary Excellence",
    description:
      "Metaminds is a multi-disciplinary team at the intersection of design, product development and marketing.",
  },
  {
    icon: Layout,
    title: "Smooth Systems",
    description:
      "Our mission is to create a smooth working system that will serve various needs.",
  },
  {
    icon: Compass,
    title: "Digital Navigation",
    description:
      "We navigate you through the digital creation process to build rich experiences.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Title and Image */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Stylish Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight relative inline-block pb-3 border-b-4 border-primary w-fit">
              Who we are
            </h2>

            {/* Image */}
            <div className="w-full h-[25rem] relative rounded-xl overflow-hidden shadow-lg border">
              <Image
                src="/about-hero.jpg"
                alt="About Hero"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side - Features */}
          <div className="w-full lg:w-1/2 space-y-10 mt-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 group hover:transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
