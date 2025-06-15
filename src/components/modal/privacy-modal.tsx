"use client";

import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PrivacyModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() => setOpen(true)}
          className="h-[1.875rem] border-footer-gray bg-transparent text-[0.875rem] font-normal tracking-[0em]"
        >
          개인정보처리방침
        </Button>
      </DialogTrigger>
      <DialogContent className="p-5">
        <DialogHeader className="px-[1.875rem]">
          <DialogTitle className="relative">
            <div className="mb-[1.25rem] mt-[2.8125rem] flex justify-between">
              <span className="font-stretch-[100%] text-[1.5625rem] font-semibold leading-[2.375rem] tracking-[-0.02em]">
                개인정보 수집·이용 동의
              </span>
              <X
                className="absolute right-[-1.875rem] top-0 cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="mb-[2.8125rem] flex w-full flex-col gap-10">
              <Label className="text-[0.9375rem] font-normal leading-[1.625rem] tracking-[-0.0125em]">
                ▣ 개인정보의 수집목적 및 이용목적 <br />
                와이즈버즈가 고객으로부터 개인정보를 수집하는 이유와 개인정보의
                사용목적은 NEST ADS MANAGER 사이트(http://nestads.com)를 통해
                접수되는 고객 문의사항에 응대하기 위한 것 입니다. <br />
                와이즈버즈는 고객이 전달하신 각종 문의사항에 대해 신속하고
                정확한 답변을 드리기 위해 개인정보를 요구하고 있습니다.
              </Label>
              <Label className="text-[0.9375rem] font-normal leading-[1.625rem] tracking-[-0.0125em]">
                ▣ 개인정보 수집 항목 및 수집방법 <br />
                와이즈버즈는 적법하고 공정한 수단을 통해 서비스 계약의 성립 및
                이행에 필요한 최소한의 개인정보를 수집합니다. <br />
                회사가 이용자의 개인식별이 가능한 개인정보를 수집할 때에는
                반드시 적법한 절차에 따라 이용자의 동의를 받습니다. <br />
                와이즈버즈는 이용자가 문의사항 입력 시 직접 입력하신 다음의
                항목을 수집합니다: 담당자명, 회사명, 서비스명, Email <br />
                와이즈버즈는 이용자의 기본적 인권을 현저하게 침해할 우려가 있는
                내용을 포함하는 개인정보를 수집하지 않습니다. 다만,
                <br /> 이용자의 적법한 동의가 있거나 법령의 규정에 의한 경우는
                예외로 합니다.
              </Label>

              <Label className="text-[0.9375rem] font-normal leading-[1.625rem] tracking-[-0.0125em]">
                ▣ 개인정보의 보유 및 이용기간 <br />
                와이즈버즈에 제공한 고객님의 개인정보는 문의사항 작성일로부터
                해결 완료 시까지 서비스 제공을 위해 이용되며, 고객의 요청이 있을
                경우 즉시 파기됩니다.
                <br /> 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통해
                파기되며, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수
                없는 기술적 방법을 사용하여 삭제합니다.
                <br /> 단, 문의 내역의 해결이 완료된 경우라도 이용 요금의 정산,
                소송이나 분쟁의 대비 등을 위해 일정 기간 회원님의 개인정보는
                보유되며, 이때 보유되는 개인정보의 열람 및 이용은 해당 사유로
                국한됩니다.
              </Label>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyModal;
