import Hero from "@/components/sections/hero";
import ServiceSection from "@/components/sections/service-section";
import InquirySection from "@/components/sections/Inquiry-section";
import AdManagerSection from "@/components/sections/ad-manager-section";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServiceSection />
      <AdManagerSection />
      <InquirySection />
    </>
  );
};

export default HomePage;
