import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type LabelInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
};

const LabelInput = React.forwardRef<HTMLInputElement, LabelInputProps>(
  ({ labelText, placeholder, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-4">
        <Label required>{labelText}</Label>
        <Input ref={ref} placeholder={placeholder} {...props} />
      </div>
    );
  },
);

LabelInput.displayName = "LabelInput";
export default LabelInput;
