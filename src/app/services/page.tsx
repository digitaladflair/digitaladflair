import SEO from "@/components/seo/seo";
import ServicesSection from "@/components/services/ServicesSection";
import { servicesPageMetadata } from "@/constants/seo.config";

const Index = () => {
  return (
    <>
      <SEO {...servicesPageMetadata} />
      <div className="min-h-screen">
        <ServicesSection />
      </div>
    </>
  );
};

export default Index;
