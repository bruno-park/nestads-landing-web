import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import PrivacyModal from "@/components/modal/privacy-modal";

const Footer = () => {
  return (
    <footer className="item-center flex justify-center bg-[#231815] px-[2.5rem] py-[3.125rem] text-footer-gray">
      <div className="flex max-w-7xl items-center gap-[5.625rem]">
        {/* 로고 및 주소 */}
        <div className="flex flex-col gap-10">
          <Image
            src="/images/footer-logo.png" // 실제 로고 이미지 경로로 교체
            alt="Wisebirds Logo"
            width={100}
            height={24}
          />

          <div className="whitespace-pre-line py-2 text-sm leading-relaxed">
            <Text variant="footerText">주식회사 와이즈버즈</Text>
            <br />
            <Text variant="footerText">
              경기도 성남시 수정구 금토로 69 다우디지털스퀘어 5층
            </Text>
          </div>
        </div>

        {/* 연락처 */}
        <div className="self-end py-2 text-sm leading-relaxed">
          <div className="flex gap-2">
            <Text variant="footerText">Tel. 02-538-8897</Text>|
            <Text variant="footerText">Email. sales@nestads.com</Text>
          </div>

          <div className="flex gap-2">
            <Text variant="footerText">대표자명 : 김종원, 최호준</Text> |
            <Text variant="footerText">사업자등록번호 : 703-86-00909</Text>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-2.5 self-end py-2">
          <PrivacyModal />
          <Link href="https://www.wisebirds.ai" target="_blank">
            <Button
              variant="outline"
              size="footer"
              className="border-footer-gray bg-transparent"
            >
              <Text variant="footerButton">Wisebirds</Text>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
