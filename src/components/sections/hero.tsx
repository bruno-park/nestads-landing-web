import React from "react";
import Image from "next/image";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import DownloadButtonWrapper from "../molecule/download-button-wrapper";
import Section from "@/components/layout/section";

const Hero = () => {
  return (
    <Section id="hero" className="relative mt-[7.5rem] bg-white md:mt-20">
      {/* Background Image */}
      <Container>
        {/*mobile View*/}
        <div className="mb-[3.125rem] flex flex-wrap items-center justify-center px-[1.875rem] md:hidden">
          <Text variant="title" className="block md:!mb-8">
            Your Ads Business Comes Alive <br />
            @NEST ADS MANAGER
          </Text>
          <div className="relative h-[15rem] w-full md:h-[20rem]">
            <Image
              src="/images/mobile/hero-mobile.png"
              alt="Hero"
              fill
              objectFit="contain"
            />
          </div>
          <Text
            variant={"bodyRegular"}
            className="mb-10 block w-full text-center"
          >
            <Text variant={"bodySemiBold"}>
              NEST ADS MANAGER는 SDK 및 API 기반의
              <br />
              광고 서버 및 운영 플랫폼 서비스입니다.
            </Text>
            <br />
            통합 SDK로 실제 연동부터 광고 송출까지 4주 이내
            <br /> 개발 가능하며, 고객사 맞춤 커스텀 기능으로 원하는 <br /> UI
            및 광고 상품 형태에 맞춰 구축 가능합니다.
          </Text>
          <DownloadButtonWrapper>
            <Button className="rounded-full bg-primary" size="body-small">
              <Text variant="bodyButton">소개서 보기</Text>
            </Button>
          </DownloadButtonWrapper>
        </div>

        {/* desktop View*/}
        <div className="relative hidden h-[41.875rem] md:block">
          <Image
            src="/images/main/hero-bg.png" // 업로드한 이미지 경로에 맞게 수정
            alt="background"
            fill
            style={{ objectFit: "fill" }}
          />

          {/* Content Layer */}
          <div className="absolute left-0 top-0 mx-auto flex h-full w-full items-center justify-between gap-2 px-[4.6875rem] md:px-[8.75rem]">
            {/* Text Section desktop*/}
            <div className="max-w-lg">
              <Text variant="title" className="!mb-8 block">
                Your Ads Business Comes Alive <br />
                @NEST ADS MANAGER
              </Text>
              <Text variant={"bodyRegular"} className="mb-10 block w-[25rem]">
                <Text variant={"bodySemiBold"}>
                  NEST ADS MANAGER는 SDK 및 API 기반의 광고 서버 및 운영 플랫폼
                  서비스입니다.
                </Text>
                통합 SDK로 실제 연동부터 광고 송출까지 4주 이내 개발 가능하며,
                고객사 맞춤 커스텀 기능으로 원하는 UI 및 광고 상품 형태에 맞춰
                구축 가능합니다.
              </Text>
              <DownloadButtonWrapper>
                <Button className="rounded-full bg-primary" size="body">
                  <Text variant="bodyButton">소개서 보기</Text>
                </Button>
              </DownloadButtonWrapper>
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
    </Section>
  );
};

export default Hero;
