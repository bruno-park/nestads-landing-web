"use client";

import React from "react";
import Section from "@/components/layout/section";
import Container from "@/components/layout/container";
import Image from "next/image";
import Text from "@/components/ui/text";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const AdManagerSection = () => {
  return (
    <Section id="ad-manager-service" className="bg-section-3 py-[6.25rem]">
      <Container>
        <div className="flex flex-col gap-10">
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, amount: 0.2 }}
            transition={fadeUp.transition}
            className="px-[8.75rem]"
          >
            <Text variant={"summaryRegular"} className="block text-center">
              <p>국내 최고 수준의 서비스들이</p>
              <Text variant={"summaryBold"}>
                신뢰하고 선택한 Nest Ads Manager
              </Text>
              를 소개합니다.
            </Text>

            <div className="flex h-[6.25rem] w-full items-center justify-center">
              <div className="h-1 w-14 rounded-full bg-[#1da196]"></div>
            </div>

            {/* 상단 SDK 설명 영역 */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="mx-auto flex h-[25.625rem] w-full items-center justify-between"
            >
              <div className="max-w-lg">
                <Text variant="title" className="!mb-[1.875rem] block">
                  하나의 SDK로 광고 사업에 <br />
                  필요한 모든 기능을 제공합니다.
                </Text>
                <Text variant={"bodyRegular"} className="block w-[25rem]">
                  <Text variant={"bodySemiBold"} className="mb-2 block">
                    NEST AD MANAGER SDK 하나로 직접 판매 광고와 <br />
                    다양한 DSP, 네트워크 광고 등을 통합 지원합니다.
                  </Text>
                  고객사는 광고 사업에 필수적인 플랫폼들을 <br />
                  각각 연동할 필요가 없기 때문에 매우 쉽고 간편하게 <br />
                  광고 수익을 극대화할 수 있습니다.
                </Text>
              </div>
              <div className="relative h-full w-[32.1875rem]">
                <Image
                  src="/images/nest-ad-manager/ad-manager-1.png"
                  alt="sdk"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </motion.div>

            {/* 하단 과금 방식 영역 */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="mx-auto flex h-[25.625rem] w-full items-center justify-between"
            >
              <div className="relative h-full w-[32.1875rem]">
                <Image
                  src="/images/nest-ad-manager/ad-manager-2.png"
                  alt="price"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="max-w-lg">
                <Text variant="title" className="!mb-8 block">
                  모든 과금 방식을 지원합니다.
                </Text>
                <Text variant={"bodyRegular"} className="block w-[25rem]">
                  <Text variant={"bodySemiBold"} className="mb-2 block">
                    기본적인 구좌형 상품부터 노출 보장 CPM 상품, 입찰형 상품까지
                    모든 타입의 광고 상품을 지원합니다.
                  </Text>
                  고객사는 원하는 광고 유형을 즉시 적용할 수 있어 <br />
                  광고 사업을 성공적으로 이끌 수 있습니다.
                </Text>
              </div>
            </motion.div>

            {/* 맞춤형 광고 상품 영역 */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="mx-auto flex h-[25.625rem] w-full items-center justify-between"
            >
              <div className="max-w-lg">
                <Text variant="title" className="!mb-8 block">
                  고객사 맞춤형 광고 상품을 <br />
                  만들어드립니다.
                </Text>
                <Text variant={"bodyRegular"} className="block w-[25rem]">
                  <Text variant={"bodySemiBold"} className="mb-2 block">
                    확장형 동영상,동영상 스플래시,컨텐츠 같은 Native UI등
                    서비스에 가장 적합한 광고 UI를 제공합니다.
                  </Text>
                  또한,서비스 자체 데이터를 활용한 타겟팅 시스템,광고 송출 로직
                  고도화 등의 커스텀 개발도 가능합니다.
                </Text>
              </div>
              <div className="relative h-full w-[32.1875rem]">
                <Image
                  src="/images/nest-ad-manager/ad-manager-3.png"
                  alt="custom"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </motion.div>

            {/* 광고 사업 지원 영역 */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="mx-auto flex h-[25.625rem] w-full items-center justify-between"
            >
              <div className="relative h-full w-[32.1875rem]">
                <Image
                  src="/images/nest-ad-manager/ad-manager-4.png"
                  alt="support"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="max-w-lg">
                <Text variant="title" className="!mb-[1.875rem] block">
                  와이즈버즈에서
                  <br />
                  광고 사업지원을 해드립니다.
                </Text>
                <Text variant={"bodyRegular"} className="mb-2 block w-[25rem]">
                  전담 광고사업팀이 없다면 상품기획,상품소개서 제작,인바운드
                  문의 대응,매체 설명회까지
                  <Text variant={"bodySemiBold"}>
                    {" "}
                    NEST AD MANAGER 전담팀에서 광고 사업을 총괄
                  </Text>
                  해 드립니다.
                </Text>
                <Text variant={"bodyRegular"} className="block w-[25rem]">
                  또한, 5,000억 원 이상의 광고 취급고를 가진 와이즈버즈와
                  애드이피션시의 주요 광고주에게 매체 소개와 제안 등 광고 영업
                  지원도 함께 진행합니다.
                </Text>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default AdManagerSection;
