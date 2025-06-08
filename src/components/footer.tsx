import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#241c1a] px-4 py-6 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:items-start">
        {/* 로고 및 주소 */}
        <div className="flex flex-col gap-2">
          <Image
            src="/images/footer-logo.png" // 실제 로고 이미지 경로로 교체
            alt="Wisebirds Logo"
            width={100}
            height={24}
          />
          <div>
            <div className="whitespace-pre-line py-2 text-sm leading-relaxed text-white">
              주식회사 와이즈버즈
              <br />
              경기도 성남시 수정구 금토로 69 다우디지털스퀘어 5층
            </div>
          </div>
        </div>

        {/* 연락처 */}
        <div className="self-end py-2 text-sm leading-relaxed text-white">
          Tel. 02-538-8897 / Email. sales@nestads.com
          <br />
          대표자명 : 김종원, 최호준&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 사업자등록번호
          : 703-86-00909
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-2 self-end py-2">
          <Link href="/privacy-policy">
            <span className="rounded-full border border-white px-4 py-1 text-sm transition hover:bg-white hover:text-black">
              개인정보처리방침
            </span>
          </Link>
          <Link href="https://www.wisebirds.ai" target="_blank">
            <span className="rounded-full border border-white px-4 py-1 text-sm transition hover:bg-white hover:text-black">
              Wisebirds
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
