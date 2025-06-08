"use client";

import React from "react";
import Section from "@/components/layout/section";
import Container from "@/components/layout/container";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const AdManagerSection = () => {
  return (
    <Section id="ad-manager-service" className="bg-[#f3f3f3] py-20">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="space-y-20 px-[140px]">
            {/* 상단 SDK 설명 영역 */}
            <motion.div
              variants={containerVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
                <motion.div className="flex w-full" variants={childVariants}>
                  <div className="space-y-4 md:w-1/2">
                    <h2 className="text-xl font-bold text-gray-800">
                      하나의 SDK로 광고 사업에 필요한 모든 기능을 제공합니다.
                    </h2>
                    <p className="text-base font-semibold text-gray-900">
                      NEST AD MANAGER SDK 하나로 직접 판매 광고와 다양한 DSP,
                      네트워크 광고 등을 통합 지원합니다.
                    </p>
                    <p className="text-sm text-gray-700">
                      고객사는 광고 사업에 필수적인 플랫폼들을 각각 연동할
                      필요가 없기 때문에 매우 쉽고 간편하게 광고 수익을 극대화할
                      수 있습니다.
                    </p>
                  </div>

                  {/* 이미지 영역 */}
                  <div className="relative h-[300px] w-full md:w-1/2">
                    <Image
                      src="/images/nest-ad-manager/ad-manager-1.png"
                      alt="SDK 구조도"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* 하단 과금 방식 영역 */}
            <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-start">
              {/* 왼쪽: 과금 방식 선택 예시 */}
              <div className="relative h-[300px] w-full md:w-1/2">
                <Image
                  src="/images/nest-ad-manager/ad-manager-2.png"
                  alt="과금 방식"
                  fill
                  className="object-contain"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="space-y-4 md:w-1/2">
                <h2 className="text-xl font-bold text-gray-800">
                  모든 과금 방식을 지원합니다.
                </h2>
                <p className="text-base font-semibold text-gray-900">
                  기본적인 구좌형 상품부터 노출 보장 CPM 상품, 입찰형 상품까지
                  모든 타입의 광고 상품을 지원합니다.
                </p>
                <p className="text-sm text-gray-700">
                  고객사는 원하는 광고 유형을 즉시 적용할 수 있어 광고 사업을
                  성공적으로 이끌 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-20 px-[140px]">
            {/* 상단 SDK 설명 영역 */}
            <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
              {/* 텍스트 영역 */}
              <div className="space-y-4 md:w-1/2">
                <h2 className="text-xl font-bold text-gray-800">
                  고객사 맞춤형 광고 상품을 만들어드립니다.
                </h2>
                <p className="text-base font-semibold text-gray-900">
                  확장형 동영상,동영상 스플래시,컨텐츠 같은Native UI등 서비스에
                  가장 적합한 광고UI를제공합니다.
                </p>
                <p className="text-sm text-gray-700">
                  또한,서비스 자체 데이터를 활용한 타겟팅 시스템,광고 송출 로직
                  고도화 등의 커스텀 개발도 가능합니다.
                </p>
              </div>

              {/* 이미지 영역 */}
              <div className="relative h-[300px] w-full md:w-1/2">
                <Image
                  src="/images/nest-ad-manager/ad-manager-3.png"
                  alt="SDK 구조도"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 하단 과금 방식 영역 */}
            <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-start">
              {/* 왼쪽: 과금 방식 선택 예시 */}
              <div className="relative h-[300px] w-full md:w-1/2">
                <Image
                  src="/images/nest-ad-manager/ad-manager-4.png"
                  alt="과금 방식"
                  fill
                  className="object-contain"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="space-y-4 md:w-1/2">
                <h2 className="text-xl font-bold text-gray-800">
                  와이즈버즈에서광고 사업지원을 해드립니다.
                </h2>
                <p className="text-sm text-gray-700">
                  전담 광고사업팀이 없다면 상품기획,상품소개서 제작,인바운드문의
                  대응,매체 설명회까지NEST AD MANAGER전담팀에서광고 사업을
                  총괄해 드립니다.또한, 5,000억 원 이상의 광고 취급고를 가진
                  와이즈버즈와애드이피션시의 주요 광고주에게 매체 소개와 제안 등
                  광고 영업지원도 함께 진행합니다.NEST AD MANAGER 는 전방위적인
                  지원을 통해
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AdManagerSection;
