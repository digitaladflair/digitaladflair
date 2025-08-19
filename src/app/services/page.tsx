import ServicesSection from "@/components/services/ServicesSection";
import { servicesPageMetadata } from "@/constants/seo.config";
import { Metadata } from "next";

export const metadata: Metadata = servicesPageMetadata;
const Index = () => {
  return (
    <>
      <div className="min-h-screen">
        <ServicesSection />
      </div>
    </>
  );
};

export default Index;
