import React from "react";

type LabelVariant =
  | "headButton"
  | "title"
  | "bodyRegular"
  | "bodySemiBold"
  | "bodyButton"
  | "summaryRegular"
  | "summaryBold"
  | "subHeadline"
  | "footerText"
  | "footerButton"
  | "privacyText";

type LabelSize = "sm" | "md" | "lg" | "default";

interface LabelProps {
  variant: LabelVariant;
  children: React.ReactNode;
  className?: string;
  size?: LabelSize;
}

const sizeStyles: Record<LabelSize, string> = {
  sm: "text-xs md:text-sm",
  md: "text-base md:text-lg",
  lg: "text-xl md:text-2xl",
  default: "",
};

const typographyStyles: Record<LabelVariant, string> = {
  headButton: "md:font-semibold md:text-[1rem] md:font-stretch-[95%])",
  title:
    "font-bold text-md  tracking-[-0.02em] font-stretch-[98%] md:text-[2rem] md:leading-[2.6875rem]",
  bodyRegular:
    "font-normal text-sm  tracking-[0em] font-stretch-[100%] md:text-[1rem] md:leading-[1.6875rem]",
  bodySemiBold:
    "font-semibold text-sm  tracking-[0em] font-stretch-[100%] md:text-[1rem] md:leading-[1.6875rem]",
  bodyButton: "font-semibold text-md font-stretch-[95%] md:text-[1.25rem]",
  summaryRegular:
    "font-normal text-md tracking-[-0.02em] font-stretch-[98%] md:text-[1.5625rem] md:leading-[2.375rem] md:tracking-[0.02em] md:font-stretch-[100%]",
  summaryBold:
    "font-bold text-md tracking-[-0.02em] font-stretch-[98%] md:text-[1.5625rem] md:leading-[2.375rem] md:tracking-[0.02em] md:font-stretch-[100%]",
  subHeadline:
    "font-bold font-stretch-[100%] text-md md:text-[1.375rem] md:tracking-[-0.02em]",
  footerText:
    "font-normal text-xs tracking-[0em] font-stretch-[100%] md:text-[0.9375rem] md:leading-[1.625rem]",
  footerButton: "font-normal text-xs font-stretch-[100%] md:text-[0.875rem]",
  privacyText:
    "font-normal md:block md:text-black md:font-stretch-[100%] md:text-[0.875rem] md:leading-[1.375rem] md:tracking-[-0.02em])",
};

export default function Text({
  variant,
  children,
  className = "",
  size = "default",
}: LabelProps) {
  const baseStyle = typographyStyles[variant] || "";
  const sizeStyle = sizeStyles[size] || "";

  return (
    <span className={`${baseStyle} ${sizeStyle} ${className}`}>{children}</span>
  );
}
