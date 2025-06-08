"use client";

import Link from "next/link";
import React from "react";

import Container from "./layout/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
            <Button variant="default" className="text-white">
              소개서 보기
            </Button>
            <Button variant="outline">도입 문의</Button>
          </div>

          {/*/!* Mobile Menu Button *!/*/}
          {/*<div className="md:hidden flex items-center">*/}
          {/*    <button*/}
          {/*        onClick={toggleMenu}*/}
          {/*        type="button"*/}
          {/*        className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"*/}
          {/*        aria-controls="mobile-menu"*/}
          {/*        aria-expanded={isOpen}*/}
          {/*    >*/}
          {/*        {isOpen ? (*/}
          {/*            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />*/}
          {/*        ) : (*/}
          {/*            <HiBars3 className="h-6 w-6" aria-hidden="true" />*/}
          {/*        )}*/}
          {/*        <span className="sr-only">Toggle navigation</span>*/}
          {/*    </button>*/}
          {/*</div>*/}
        </nav>
      </Container>

      {/*/!* Mobile Menu with Transition *!/*/}
      {/*<Transition*/}
      {/*    show={isOpen}*/}
      {/*    enter="transition ease-out duration-200 transform"*/}
      {/*    enterFrom="opacity-0 scale-95"*/}
      {/*    enterTo="opacity-100 scale-100"*/}
      {/*    leave="transition ease-in duration-75 transform"*/}
      {/*    leaveFrom="opacity-100 scale-100"*/}
      {/*    leaveTo="opacity-0 scale-95"*/}
      {/*>*/}
      {/*    <div id="mobile-menu" className="md:hidden bg-white shadow-lg">*/}
      {/*        <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">*/}
      {/*            {menuItems.map(item => (*/}
      {/*                <li key={item.text}>*/}
      {/*                    <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>*/}
      {/*                        {item.text}*/}
      {/*                    </Link>*/}
      {/*                </li>*/}
      {/*            ))}*/}
      {/*            <li>*/}
      {/*                <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>*/}
      {/*                    Get Started*/}
      {/*                </Link>*/}
      {/*            </li>*/}
      {/*        </ul>*/}
      {/*    </div>*/}
      {/*</Transition>*/}
    </header>
  );
};

export default Header;
