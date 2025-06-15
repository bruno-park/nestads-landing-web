"use client";
import React from "react";
import Section from "@/components/layout/section";
import Container from "@/components/layout/container";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AdManagerContent from "@/components/ad-manager-content";
import AdServerContent from "@/components/ad-server-content";
import MarketingContent from "@/components/marketing-content";
import Text from "@/components/ui/text";
import { motion } from "framer-motion";

type serviceType = "MANAGER" | "SERVER" | "MARKETING";

const serviceData = [
  {
    title: "NEST ADS MANAGER",
    type: "MANAGER" as serviceType,
    logos: [
      "/images/nest-ad-manager/blind.svg",
      "/images/nest-ad-manager/dailyshot.svg",
      "/images/nest-ad-manager/saramin.svg",
    ],
  },
  {
    title: "AD SERVER 구축",
    type: "SERVER" as serviceType,
    logos: ["/images/ad-server/soop.svg", "/images/ad-server/band.svg"],
  },
  {
    title: "마케팅 솔루션",
    type: "MARKETING" as serviceType,
    logos: ["/images/marketing/uplus.svg", "/images/marketing/onestore.svg"],
  },
];

const ServiceSection = () => {
  return (
    <Section id="service" className="bg-gray-light py-[6.25rem]">
      <Container>
        <div className="px-[8.75rem]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Text
              variant={"summaryRegular"}
              className="mb-[6.25rem] block text-center"
            >
              <p>와이즈버즈는 국내 주요 서비스 기업의</p>
              <Text variant={"summaryBold"}>
                광고 시스템을 성공적으로 개발 및 정착
              </Text>
              시켜 왔습니다.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {serviceData.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="w-full first:border-t"
                >
                  <AccordionTrigger className="w-full py-[1.8125rem] pl-[2.5rem]">
                    <div className="flex w-full items-center justify-between gap-4">
                      <Text variant={"subHeadline"}>{item.title}</Text>
                      <div className="mr-2 flex items-center gap-[0.3125rem]">
                        {item.logos.map((logo, i) => (
                          <div key={i} className="relative h-8 w-8 rounded-xl">
                            <Image
                              src={logo}
                              alt={`logo-${i}`}
                              fill
                              className="rounded-md object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-[2.5rem]">
                    {item.type === "MANAGER" && <AdManagerContent />}
                    {item.type === "SERVER" && <AdServerContent />}
                    {item.type === "MARKETING" && <MarketingContent />}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ServiceSection;
