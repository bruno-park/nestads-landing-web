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

interface LabelProps {
  variant: LabelVariant;
  children: React.ReactNode;
  className?: string;
}

const typographyStyles: Record<LabelVariant, string> = {
  headButton: "font-semibold text-[1rem] tracking-[-0.05em]",
  title: "font-bold text-[2rem] leading-[2.6875rem] tracking-[-0.02em]",
  bodyRegular: "font-normal text-[1rem] leading-[1.6875rem] tracking-[0em]",
  bodySemiBold: "font-semibold text-[1rem] leading-[1.6875rem] tracking-[0em]",
  bodyButton: "font-semibold text-[1.25rem] tracking-[-0.05em]",
  summaryRegular:
    "font-normal text-[1.5625rem] leading-[2.375rem] tracking-[0.02em]",
  summaryBold:
    "font-bold text-[1.5625rem] leading-[2.375rem] tracking-[0.02em]",
  subHeadline: "font-bold text-[1.375rem] tracking-[-0.02em]",
  footerText: "font-normal text-[0.9375rem] leading-[1.625rem] tracking-[0em]",
  footerButton: "font-normal text-[0.875rem] tracking-[0em]",
  privacyText:
    "block text-black font-stretch-[100%] text-[0.875rem] font-normal leading-[1.375rem] tracking-[-0.02em]",
};

export default function Text({
  variant,
  children,
  className = "",
}: LabelProps) {
  const baseStyle = typographyStyles[variant] || "";

  return <span className={`${baseStyle} ${className}`}>{children}</span>;
}
// <Text variant="bodyButton">도입 문의</Text>
