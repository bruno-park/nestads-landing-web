import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LabelInput = ({ labelText }: { labelText?: string }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <Label required>{labelText}</Label>
      <Input />
    </div>
  );
};

export default LabelInput;
