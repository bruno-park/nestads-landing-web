import React from "react";
import Image from "next/image";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative mt-20 bg-white">
      {/* Background Image */}
      <Container>
        <div className="relative h-[670px]">
          <Image
            src="/images/main/hero-bg.png" // 업로드한 이미지 경로에 맞게 수정
            alt="background"
            fill
            style={{ objectFit: "fill" }}
          />

          {/* Content Layer */}
          <div className="absolute left-0 top-0 mx-auto flex h-full w-full items-center justify-between px-[140px]">
            {/* Text Section */}
            <div className="max-w-xl">
              <h1 className="mb-6 text-3xl font-semibold leading-snug">
                Your Ads Business Comes Alive <br />
                <span className="font-bold">@NEST AD MANAGER</span>
              </h1>
              <p className="mb-8 text-base font-medium leading-relaxed">
                <span className="font-bold">
                  NEST AD MANAGER는 SDK 및 API 기반의 광고 서버 및 운영 플랫폼
                  서비스입니다.
                </span>{" "}
                통합 SDK로 실제 연동부터 광고 송출까지 4주 이내 개발 가능하며,
                고객사 맞춤 커스텀 기능으로 원하는 UI 및 광고 상품 형태에 맞춰
                구축 가능합니다.
              </p>
              <Button className="rounded-full bg-[#E94B2C] px-6 py-3 font-semibold text-white hover:bg-[#d43f23]">
                소개서 보기
              </Button>
            </div>

            {/* Illustration Section */}
            <div className="relative hidden h-auto w-[500px] lg:block">
              <Image
                src="/images/main/hero.png" // 오른쪽 다이어그램 일러스트
                alt="hero"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
