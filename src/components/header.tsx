"use client";

import Link from "next/link";
import React from "react";

import Container from "./layout/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Label from "@/components/ui/label";

const Header: React.FC = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto h-20 w-full bg-transparent bg-white md:absolute">
      <Container className="!px-0">
        <nav className="mx-auto flex h-20 items-center justify-between bg-white px-10 shadow-md md:bg-transparent md:shadow-none">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex h-[22px] w-40 items-center gap-2"
          >
            <Image
              src="/images/header-logo.png"
              alt="logo"
              fill
              style={{
                objectFit: "fill",
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="flex hidden items-center gap-2 md:flex">
            <Button variant="default" className="text w-[8.125rem]">
              <Label variant="headButton">소개서 보기</Label>
            </Button>
            <Button variant="outline" className="w-[8.125rem]">
              <Label variant="headButton">도입 문의</Label>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
