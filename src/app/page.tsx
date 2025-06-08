import Hero from "@/components/hero";
import ServiceSection from "@/components/service-section";
import AdManagerSection from "@/components/ad-manager-section";
import InquirySection from "@/components/Inquiry-section";
import Container from "@/components/layout/container";

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
        <ServiceSection />
        <AdManagerSection />
        <InquirySection />
      </Container>
    </>
  );
};

export default HomePage;
