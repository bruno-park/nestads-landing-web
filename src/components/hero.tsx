import React from "react";
import Image from "next/image";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Label from "@/components/ui/label";

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
          <div className="absolute left-0 top-0 mx-auto flex h-full w-full items-center justify-between gap-2 px-[8.75rem]">
            {/* Text Section */}
            <div className="max-w-lg">
              <Label variant="title" className="!mb-8 block">
                Your Ads Business Comes Alive <br />
                @NEST ADS MANAGER
              </Label>
              <Label variant={"bodyRegular"} className="mb-10 block w-[25rem]">
                <Label variant={"bodySemiBold"}>
                  NEST AD MANAGER는 SDK 및 API 기반의 광고 서버 및 운영 플랫폼
                  서비스입니다.
                </Label>
                통합 SDK로 실제 연동부터 광고 송출까지 4주 이내 개발 가능하며,
                고객사 맞춤 커스텀 기능으로 원하는 UI 및 광고 상품 형태에 맞춰
                구축 가능합니다.
              </Label>
              <Button className="h-[2.8125rem] w-[10.3125rem] rounded-full bg-primary">
                <Label variant="bodyButton">소개서 보기</Label>
              </Button>
            </div>

            <div className="relative h-[20.9375rem] w-[32.1875rem]">
              <Image
                src="/images/main/hero.png"
                alt="hero"
                fill
                style={{
                  objectFit: "fill",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
