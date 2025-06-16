import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type LabelInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  error?: boolean;
};

const LabelInput = React.forwardRef<HTMLInputElement, LabelInputProps>(
  ({ labelText, placeholder, error, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-2 text-left md:gap-4">
        {/*기본 text-xs md 이상은 Label에 표기*/}
        <Label required className="text-xs">
          {labelText}
        </Label>
        <Input ref={ref} placeholder={placeholder} {...props} error={error} />
      </div>
    );
  },
);

LabelInput.displayName = "LabelInput";
export default LabelInput;
