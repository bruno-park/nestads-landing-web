import React from "react";
import Section from "@/components/layout/section";
import Container from "@/components/layout/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const InquirySection = () => {
  return (
    <Section id="inquiry" className="bg-white py-20 text-center">
      <Container>
        <p className="text-lg font-medium text-black">
          NEST AD MANAGER는 전방위적인 지원을 통해
          <br />
          <strong className="font-bold">고객사의 광고 사업 성공을 실현</strong>
          합니다.
        </p>

        <div className="my-12">
          <Image
            src="/images/logo.png"
            alt="NEST AD MANAGER 로고"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        <h2 className="text-2xl font-extrabold text-black md:text-3xl">
          NEST AD MANAGER,
        </h2>
        <p className="mt-2 text-xl font-bold text-black md:text-2xl">
          광고 비즈니스의 새로운 장이 열립니다.
        </p>

        <Button className="mt-10 rounded-full bg-black px-8 py-3 text-lg font-semibold text-white transition hover:bg-gray-800">
          도입 문의
        </Button>
      </Container>
    </Section>
  );
};

export default InquirySection;
