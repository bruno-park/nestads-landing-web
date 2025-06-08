import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="mt-20">
      <div className="relative h-[670px] px-[140px]">
        <Image
          src="/images/main/hero-bg.png"
          alt="background"
          fill
          style={{
            objectFit: "fill",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
