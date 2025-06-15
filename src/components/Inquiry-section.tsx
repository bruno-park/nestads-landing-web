import React from "react";
import Section from "@/components/layout/section";
import Container from "@/components/layout/container";
import Image from "next/image";
import Text from "@/components/ui/text";
import InquiryModal from "@/components/modal/inquiry-modal";

const InquirySection = () => {
  return (
    <Section id="inquiry" className="bg-white text-center">
      <Container className="mb-[8.75rem] flex flex-col items-center justify-center">
        <Text variant="summaryRegular" className="my-[6.25rem] block">
          NEST ADS MANAGER는 전방위적인 지원을 통해
          <br />
          <Text variant="summaryBold">고객사의 광고 사업 성공을 실현</Text>
          합니다.
        </Text>

        <div className="relative mb-[1.875rem] h-[5.5rem] w-[8.75rem]">
          <Image
            src="/images/logo.png"
            alt="NEST ADS MANAGER"
            fill
            style={{
              objectFit: "fill",
            }}
          />
        </div>

        <Text variant="title" className="mb-[2.5rem] block text-center">
          NEST ADS MANAGER, <br />
          광고 비즈니스의 새로운 장이 열립니다.
        </Text>
        <InquiryModal
          buttonClassName="h-[2.8125rem] w-[10.3125rem] rounded-full bg-black"
          buttonText={<Text variant="bodyButton">도입 문의</Text>}
        />
      </Container>
    </Section>
  );
};

export default InquirySection;
