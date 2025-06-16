"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "font-normal font-stretch-[100%] md:text-[1.0625rem] tracking-[-0.02em] text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
  requiredIndicator?: React.ReactNode; // Optional: allow custom indicator
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(
  (
    {
      className,
      children,
      required,
      requiredIndicator = <span className="text-red-500">*</span>,
      ...props
    },
    ref,
  ) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    >
      {children}
      {required && requiredIndicator}
    </LabelPrimitive.Root>
  ),
);

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
