import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import PrivacyModal from "@/components/modal/privacy-modal";

const Footer = () => {
  return (
    <footer className="items-center justify-center bg-footer px-5 py-[1.875rem] text-footer-gray md:flex md:py-10">
      <div className="flex flex-col flex-wrap items-center md:max-w-7xl md:flex-row md:flex-nowrap md:items-center md:gap-[5.625rem] md:px-[2.5rem] md:py-[3.125rem]">
        {/* 로고 및 주소 */}
        <div className="flex flex-col items-center md:items-start md:gap-10">
          <div className="relative h-[0.59375rem] w-[3.5625rem] md:h-[1.1875rem] md:w-[7.125rem]">
            <Image
              src="/images/footer-logo.png" // 실제 로고 이미지 경로로 교체
              alt="Wisebirds Logo"
              fill
              style={{ objectFit: "fill" }}
            />
          </div>

          <div className="flex flex-col pt-2 text-center md:py-2 md:text-left">
            <Text variant="footerText">주식회사 와이즈버즈</Text>
            <Text variant="footerText">
              경기도 성남시 수정구 금토로 69 다우디지털스퀘어 5층
            </Text>
          </div>
        </div>

        {/* 연락처 */}
        <div className="flex flex-col items-center pb-2 md:items-start md:self-end md:py-2">
          <div className="flex items-center gap-2">
            <Text variant="footerText">Tel. 02-538-8897</Text>
            <Text variant="footerText">|</Text>
            <Text variant="footerText">Email. sales@nestads.com</Text>
          </div>

          <div className="flex items-center gap-2">
            <Text variant="footerText">대표자명 : 김종원, 최호준</Text>
            <Text variant="footerText">|</Text>
            <Text variant="footerText">사업자등록번호 : 703-86-00909</Text>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="item-center flex gap-2.5 md:self-end md:py-2">
          <PrivacyModal />

          <Button
            variant="outline"
            size="footer"
            className="border-footer-gray bg-transparent"
          >
            <Link href="https://www.wisebirds.ai" target="_blank">
              <Text variant="footerButton">Wisebirds</Text>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
