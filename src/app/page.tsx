import Hero from "@/components/hero";
import ServiceSection from "@/components/service-section";
import AdManagerSection from "@/components/ad-manager-section";
import InquirySection from "@/components/Inquiry-section";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServiceSection />
      {/*<AdManagerSection />*/}
      <InquirySection />
    </>
  );
};

export default HomePage;
