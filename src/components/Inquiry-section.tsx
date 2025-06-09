import React from "react";
import Section from "@/components/layout/section";
import Container from "@/components/layout/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Label from "@/components/ui/label";

const InquirySection = () => {
  return (
    <Section id="inquiry" className="bg-white text-center">
      <Container className="mb-[8.75rem] flex flex-col items-center justify-center">
        <Label variant="summaryRegular" className="my-[6.25rem] block">
          NEST AD MANAGER는 전방위적인 지원을 통해
          <br />
          <Label variant="summaryBold">고객사의 광고 사업 성공을 실현</Label>
          합니다.
        </Label>

        <div className="relative mb-[1.875rem] h-[5.5rem] w-[32.1875rem]">
          <Image
            src="/images/logo.png"
            alt="NEST AD MANAGER 로고"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <Label variant="title" className="mb-[2.5rem] block text-center">
          NEST AD MANAGER, <br />
          광고 비즈니스의 새로운 장이 열립니다.
        </Label>

        <Button className="h-[2.8125rem] w-[10.3125rem] rounded-full bg-black">
          <Label variant="bodyButton">도입 문의</Label>
        </Button>
      </Container>
    </Section>
  );
};

export default InquirySection;
