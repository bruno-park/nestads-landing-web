"use client";

import Text from "@/components/ui/text";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import LabelInput from "@/components/molecule/label-input";
import { Button } from "@/components/ui/button";
import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const InquiryModal = ({
  buttonClassName,
  variant = "default",
  buttonText,
}: {
  buttonClassName?: string;
  variant?: "default" | "outline";
  buttonText?: string | ReactNode;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          className={buttonClassName}
          onClick={() => setOpen(true)}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="p-5 pb-10">
        <DialogHeader className="px-[1.875rem]">
          <DialogTitle className="relative">
            <div className="mb-[1.25rem] mt-[2.8125rem] flex justify-between">
              <span className="font-stretch-[100%] text-[1.5625rem] font-semibold leading-[2.375rem] tracking-[-0.02em]">
                Nest Ads Manager 문의 신청
              </span>
              <X
                className="absolute right-[-1.875rem] top-0 cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="flex w-full flex-col">
              <span className="font-regular font-stretch-[100%] mb-10 text-[1rem] leading-[1.625rem] tracking-[-0.02em]">
                서비스 이용을 원하시는 고객사께서는 아래 정보를 남겨 주시면
                담당자를 통해 연락드리겠습니다.
              </span>

              <div className="mb-[1.875rem] flex items-center justify-center gap-[0.9375rem]">
                <LabelInput labelText="담당자명" />
                <LabelInput labelText="회사명" />
              </div>
              <div className="mb-10 flex items-center justify-center gap-[0.9375rem]">
                <LabelInput labelText="서비스명" />
                <LabelInput labelText="Email" />
              </div>

              <div className="flex w-full flex-col gap-[0.9375rem]">
                <Label required>약관동의</Label>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label className="font-regular font-stretch-[100%] text-[0.9375rem] tracking-[-0.02em]">
                    [필수] 개인정보 수집 및 이용에 동의합니다.
                  </Label>
                </div>
                <div className="rounded-xl border bg-gray-100 p-6">
                  <div className="flex flex-col gap-4">
                    <Text variant="privacyText">
                      NEST AD MANAGER 서비스 가입 문의 등 고객 상담을 위하여
                      아래와 같이 개인정보를 수집·이용하고자 합니다.
                      <br />
                      내용을 자세히 읽으신 후 동의 여부를 결정해 주시기
                      바랍니다.
                    </Text>

                    <Text variant="privacyText">
                      1. 개인정보 수집·이용 목적 : 고객 상담을 위한 개인 정보
                      수집 <br />
                      2. 개인정보 수집 범위 : 담당자명, 회사명, 서비스명, 이메일{" "}
                      <br />
                      3. 개인정보의 보유 및 이용기간 : 문의사항 작성일로부터
                      해결 완료 시까지 서비스 제공을 위해 이용되며, <br />
                      고객의 요청이 있을 경우 즉시 파기
                    </Text>

                    <Text variant="privacyText">
                      ※ 위의 개인정보 수집·이용에 대한 동의를 거부할 권리가
                      있습니다.
                      <br />
                      그러나 동의를 거부할 경우 귀하의 문의에 대한 답변에 제한을
                      받을 수 있습니다.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="mt-10 flex w-full items-center justify-center">
            <Button
              className="h-[2.8125rem] w-[10.3125rem] rounded-full bg-black"
              onClick={() => setOpen(false)}
            >
              신청하기
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
