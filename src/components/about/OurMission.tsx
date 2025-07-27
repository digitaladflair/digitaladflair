import { Smile, PenTool, Rocket, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const coreValues = [
  {
    icon: Smile,
    title: "Keep it Human",
    description: "From design to partnerships, our commitment is human-first.",
    bgColor: "bg-pink-100",
  },
  {
    icon: PenTool,
    title: "Hone Your Craft",
    description: "We view our work as an ongoing practice, always improving.",
    bgColor: "bg-green-100",
  },
  {
    icon: Rocket,
    title: "Push Boundaries",
    description: "We create safe spaces to challenge norms and innovate.",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Users,
    title: "Go Further Together",
    description: "Through collaboration, we empower and grow with each other.",
    bgColor: "bg-blue-100",
  },
];

const OurMission = () => {
  return (
    <section className="bg-muted py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Side: Heading */}
        <div className="md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg">
            The principles that guide everything we do.
          </p>
        </div>

        {/* Right Side: Animated Circle Cards */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10 pt-10 md:pt-20">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="bg-card text-card-foreground rounded-full size-[20rem] aspect-square mx-auto flex flex-col items-center justify-center text-center p-8 shadow-md border border-border animate-float"
                style={{ animationDelay: `${idx * 0.3}s` }}
              >
                <div className={cn("mb-4 p-4 rounded-full", value.bgColor)}>
                  <Icon className="size-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
