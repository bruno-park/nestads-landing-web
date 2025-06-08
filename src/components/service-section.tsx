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

type serviceType = "MANAGER" | "SERVER" | "MARKETING";

const serviceData = [
  {
    title: "NEST AD MANAGER",
    type: "MANAGER" as serviceType,
    logos: [
      "/images/nest-ad-manager/blind.png",
      "/images/nest-ad-manager/dailyshot.png",
      "/images/nest-ad-manager/saramin.png",
    ],
  },
  {
    title: "AD SERVER 구축",
    type: "SERVER" as serviceType,
    logos: ["/images/ad-server/meta.png", "/images/ad-server/band.png"],
  },
  {
    title: "마케팅 솔루션",
    type: "MARKETING" as serviceType,
    logos: ["/images/marketing/uplus.png", "/images/marketing/onestore.png"],
  },
];

const ServiceSection = () => {
  return (
    <Section id="service" className="bg-[#efefef] py-20">
      <Container>
        <div className="px-[140px]">
          <div className="mb-16 text-center">
            <p className="text-lg text-gray-800">
              와이즈버즈는 국내 주요 서비스 기업의
            </p>
            <p className="text-2xl font-bold text-gray-900">
              광고 시스템을 성공적으로 개발 및 정착시켜 왔습니다.
            </p>
          </div>

          <div className="space-y-4 divide-y divide-black/70">
            <Accordion type="single" collapsible className="w-full">
              {serviceData.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="w-full"
                >
                  <AccordionTrigger className="w-full px-4 py-6">
                    <div className="flex w-full items-center justify-between gap-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="mr-2 flex items-center gap-2">
                        {item.logos.map((logo, i) => (
                          <div key={i} className="relative h-8 w-8">
                            <Image
                              src={logo}
                              alt={`logo-${i}`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6">
                    {item.type === "MANAGER" && <AdManagerContent />}
                    {item.type === "SERVER" && <AdServerContent />}
                    {item.type === "MARKETING" && <MarketingContent />}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServiceSection;
