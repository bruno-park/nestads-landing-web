import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/text";

const Footer = () => {
  return (
    <footer className="item-center flex justify-center bg-[#231815] px-[2.5rem] py-[3.125rem] text-white">
      <div className="flex max-w-7xl items-center gap-[5.625rem]">
        {/* 로고 및 주소 */}
        <div className="flex flex-col gap-10">
          <Image
            src="/images/footer-logo.png" // 실제 로고 이미지 경로로 교체
            alt="Wisebirds Logo"
            width={100}
            height={24}
          />

          <div className="whitespace-pre-line py-2 text-sm leading-relaxed text-white">
            <Text variant="footerText">주식회사 와이즈버즈</Text>
            <br />
            <Text variant="footerText">
              경기도 성남시 수정구 금토로 69 다우디지털스퀘어 5층
            </Text>
          </div>
        </div>

        {/* 연락처 */}
        <div className="self-end py-2 text-sm leading-relaxed text-white">
          <Text variant="footerText">
            Tel. 02-538-8897 / Email. sales@nestads.com
          </Text>
          <br />
          <Text variant="footerText">
            대표자명 : 김종원, 최호준&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            사업자등록번호 : 703-86-00909
          </Text>
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-2.5 self-end py-2">
          <Link href="/privacy-policy">
            <Text
              variant="footerButton"
              className="rounded-full border border-white px-4 py-1 text-sm transition hover:bg-white hover:text-black"
            >
              개인정보처리방침
            </Text>
          </Link>
          <Link href="https://www.wisebirds.ai" target="_blank">
            <Text
              variant="footerButton"
              className="rounded-full border border-white px-4 py-1 text-sm transition hover:bg-white hover:text-black"
            >
              Wisebirds
            </Text>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
