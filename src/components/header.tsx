'use client';

import Link from 'next/link';
import React from 'react';

import Container from './Container';
import Image from 'next/image';
import {Button} from "@/components/ui/button";

const Header: React.FC = () => {

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full h-20 bg-white">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center px-10 h-20 bg-white">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 w-40 h-[22px] relative">
                        <Image src="/images/header-logo.png" alt="logo" fill  style={{
                            objectFit: "fill",
                        }}/>

                    </Link>

                    {/* Desktop Menu */}
                    <div className="flex items-center gap-2 hidden md:flex">
                    <Button variant="default" className="text-white">소개서 보기</Button>
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
