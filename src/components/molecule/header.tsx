"use client";

import Link from "next/link";
import React from "react";

import Container from "../layout/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import InquiryModal from "@/components/modal/inquiry-modal";
import DownloadButtonWrapper from "@/components/molecule/download-button-wrapper";

const Header: React.FC = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto h-20 w-full bg-transparent bg-white">
      <Container className="!px-0">
        <nav className="mx-auto flex h-20 items-center justify-between bg-white px-5 md:px-10">
          {/* Logo */}
          <Link
            href="/public"
            className="relative flex h-[2rem] w-[8rem] items-center gap-2 md:h-[22px] md:w-40"
          >
            <Image
              src="/images/header-logo.png"
              alt="logo"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="flex hidden items-center gap-2 md:flex">
            <DownloadButtonWrapper>
              <Button variant="default" size="header">
                <Text variant="headButton">소개서 보기</Text>
              </Button>
            </DownloadButtonWrapper>
            <InquiryModal
              variant="outline"
              buttonClassName="w-[8.125rem]"
              buttonText={<Text variant="headButton">도입 문의</Text>}
            />
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <DownloadButtonWrapper>
              <Button
                variant="default"
                size="header"
                className="relative flex h-10 w-10 rounded-full bg-primary"
              >
                <Image
                  src="/images/mobile/download-icon.svg"
                  alt="download"
                  fill
                  className="p-2"
                  objectFit="contain"
                />
              </Button>
            </DownloadButtonWrapper>
            <InquiryModal type="mobile" />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
