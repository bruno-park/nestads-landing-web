"use client";

import Text from "@/components/ui/text";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronLeft, X } from "lucide-react";
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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { InquiryForm } from "@/actions/inquiry-action";
import Image from "next/image";

type deviceType = "desktop" | "mobile";

const schema = z.object({
  name: z.string().min(1, "*담당자명: 필수 정보입니다."),
  company: z.string().min(1, "*회사명: 필수 정보입니다."),
  service: z.string().min(1, "*서비스명: 필수 정보입니다."),
  email: z
    .string()
    .min(1, "*Email: 필수 정보입니다.")
    .email("*Email: 형식이 올바르지 않습니다."),
  agree: z.boolean().refine((val) => val, {
    message: "*필수 약관에 동의해 주세요.",
  }),
});

const InquiryModal = ({
  buttonClassName,
  variant = "default",
  type = "desktop",
  buttonText,
}: {
  buttonClassName?: string;
  variant?: "default" | "outline";
  type?: deviceType;
  buttonText?: string | ReactNode;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);
  const form = useForm<InquiryForm>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      company: "",
      service: "",
      email: "",
      agree: false,
    },
  });

  const handleSubmit = async (data: InquiryForm) => {
    try {
      console.log(data);
      //배포 후 주석 해제
      // const { result } = await sendInquiryMail(data);
      // if (result) {
      //   setResult(result);
      //   form.reset();
      // }
    } catch (error) {
      console.error("Error sending inquiry:", error);
    }
  };

  const handleModalClose = () => {
    form.reset();
    setOpen(false);
    setResult(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          handleModalClose();
        } else {
          setOpen(true);
        }
      }}
    >
      <DialogTrigger asChild>
        <>
          {type === "desktop" && (
            <Button
              variant={variant}
              className={buttonClassName}
              onClick={() => setOpen(true)}
            >
              {buttonText}
            </Button>
          )}
          {type === "mobile" && (
            <Button
              variant="default"
              size="header"
              onClick={() => setOpen(true)}
              className="relative flex h-10 w-10 rounded-full bg-black"
            >
              <Image
                src="/images/mobile/inquiry-icon.svg"
                alt="download"
                fill
                className="p-2"
                objectFit="contain"
              />
            </Button>
          )}
        </>
      </DialogTrigger>

      <DialogContent className="px-[1.25rem] pb-10 pt-0 md:p-5">
        {(result && (
          <DialogHeader className="pt-5 md:px-[1.875rem] md:pt-0">
            <DialogTitle className="relative">
              <div className="md:mb-[1.25rem] md:mt-[2.8125rem]">
                <X
                  className="absolute top-0 cursor-pointer md:right-[-1.875rem]"
                  onClick={handleModalClose}
                />
              </div>
            </DialogTitle>
            <DialogDescription asChild>
              <div className="flex h-full w-full flex-col items-center justify-center gap-5 md:!mb-[6.875rem] md:!mt-[4rem]">
                <div className="relative flex h-[4.375rem] w-[4.375rem] items-center justify-center">
                  <Image
                    src="/images/success.png"
                    alt="success Icon"
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </div>
                <Text variant="title" className="text-black">
                  신청 완료
                </Text>
                <Text variant="bodyRegular" className="text-center text-xs">
                  문의 신청이 완료되었습니다. <br />
                  접수하신 내용은 입력하신 메일을 통해 안내드리도록 하겠습니다.{" "}
                  <br />
                  감사합니다.
                </Text>
              </div>
            </DialogDescription>
          </DialogHeader>
        )) || (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <DialogHeader className="md:px-[1.875rem]">
                <DialogTitle className="relative pb-[1.875rem] md:pb-0">
                  <div className="flex h-[3.75rem] items-center gap-2 border-b border-black md:mb-[1.25rem] md:mt-[2.8125rem] md:h-auto md:border-0">
                    <ChevronLeft
                      className="cursor-pointer md:hidden"
                      onClick={handleModalClose}
                    />
                    <span className="font-stretch-[100%] text-lg font-semibold leading-[2.375rem] tracking-[-0.02em] md:text-[1.5625rem]">
                      Nest Ads Manager 문의 신청
                    </span>
                    <X
                      className="absolute right-[-1.875rem] top-0 hidden cursor-pointer md:block"
                      onClick={handleModalClose}
                    />
                  </div>
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="flex max-h-[75vh] w-full flex-col overflow-y-scroll px-[0.625rem] md:overflow-y-visible md:p-0">
                    <span className="font-regular font-stretch-[100%] mb-[1.875rem] text-left leading-[1.625rem] tracking-[-0.02em] md:mb-10 md:text-[1rem]">
                      서비스 이용을 원하시는 고객사께서는 아래 정보를 남겨
                      주시면 담당자를 통해 연락드리겠습니다.
                    </span>

                    <div className="mb-[0.625rem] flex items-center justify-center gap-[0.9375rem]">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <LabelInput
                                labelText="담당자명"
                                error={!!form.formState.errors.name?.message}
                                placeholder="예) 홍길동"
                                {...field}
                              />
                            </FormControl>
                            <div className="min-h-[1.25rem]">
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <LabelInput
                                labelText="회사명"
                                error={!!form.formState.errors.company?.message}
                                placeholder="예) ABC 주식회사"
                                {...field}
                              />
                            </FormControl>
                            <div className="min-h-[1.25rem]">
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[0.9375rem] md:mb-5 md:flex-row">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <LabelInput
                                labelText="서비스명"
                                error={!!form.formState.errors.service?.message}
                                placeholder="예) ABC 서비스"
                                {...field}
                              />
                            </FormControl>
                            <div className="min-h-[1.25rem]">
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <LabelInput
                                labelText="Email"
                                error={!!form.formState.errors.email?.message}
                                placeholder="예) example@abc.com"
                                {...field}
                              />
                            </FormControl>
                            <div className="min-h-[1.25rem]">
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex w-full flex-col gap-2 text-left md:gap-[0.9375rem]">
                      <Label required className="text-xs">
                        약관동의
                      </Label>

                      <FormField
                        control={form.control}
                        name="agree"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <div className="flex items-center gap-2">
                                <Checkbox
                                  checked={field.value}
                                  error={!!form.formState.errors.agree?.message}
                                  onCheckedChange={field.onChange}
                                />
                                <Label className="font-regular font-stretch-[100%] text-xs tracking-[-0.02em] md:text-[0.9375rem]">
                                  [필수] 개인정보 수집 및 이용에 동의합니다.
                                </Label>
                                <FormMessage />
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div className="rounded-xl border bg-gray-100 p-3 text-xs md:p-6">
                        <div className="flex flex-col md:gap-4">
                          <Text variant="privacyText">
                            NEST ADS MANAGER 서비스 가입 문의 등 고객 상담을
                            위하여 아래와 같이 개인정보를 수집·이용하고자
                            합니다.
                            <br />
                            내용을 자세히 읽으신 후 동의 여부를 결정해 주시기
                            바랍니다.
                          </Text>

                          <Text variant="privacyText">
                            1. 개인정보 수집·이용 목적 : 고객 상담을 위한 개인
                            정보 수집 <br />
                            2. 개인정보 수집 범위 : 담당자명, 회사명, 서비스명,
                            이메일 <br />
                            3. 개인정보의 보유 및 이용기간 : 문의사항
                            작성일로부터 해결 완료 시까지 서비스 제공을 위해
                            이용되며, <br />
                            고객의 요청이 있을 경우 즉시 파기
                          </Text>

                          <Text variant="privacyText">
                            ※ 위의 개인정보 수집·이용에 대한 동의를 거부할
                            권리가 있습니다.
                            <br />
                            그러나 동의를 거부할 경우 귀하의 문의에 대한 답변에
                            제한을 받을 수 있습니다.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <div className="flex w-full items-center justify-center py-4 md:mt-10">
                  <Button
                    type="submit"
                    className="h-8 w-24 rounded-full bg-black text-xs md:h-[2.8125rem] md:w-[10.3125rem] md:text-[1rem]"
                  >
                    <Text variant="bodyButton">신청 하기</Text>
                  </Button>
                </div>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
