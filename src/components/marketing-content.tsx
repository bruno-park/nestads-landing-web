import Image from "next/image";
import Label from "@/components/ui/label";

const MarketingContent = () => {
  return (
    <div className="text-gray-800">
      <ul className="mx-[2.5rem] list-disc pl-5">
        <li>
          <Label variant="bodyRegular">
            LG U+의 다양한 서비스 대상으로 다수의 외부 광고를 연동하고 광고
            수익화를 최적화하며,집행 광고 통합 성과 관리가 가능한SSP를
            구축했습니다.
          </Label>
        </li>
        <li>
          <Label variant="bodyRegular">
            원스토어의 입점 개발사들이 광고 집행부터 성과 관리,비용 정산까지
            원스톱으로 진행할 수 있는Self-Served플랫폼을 구축했습니다.
          </Label>
        </li>
      </ul>

      <div className="flex">
        {/* Dashboard Example */}
        <div className="flex flex-col items-center">
          <Label
            variant="headButton"
            className="mb-2 mb-[1.875rem] mt-[2.5rem] flex h-[2.1875rem] w-[10.3125rem] items-center justify-center rounded-full bg-black px-4 py-1 text-white"
          >
            LG U+ SSP
          </Label>
          <div className="relative h-[24.6875rem] w-[31.25rem]">
            <Image
              src="/images/marketing/uplus-ssp.png"
              alt="dashboard example"
              fill
              style={{
                objectFit: "fill",
              }}
            />
          </div>
        </div>

        {/* Ad Example */}
        <div className="flex flex-col items-center">
          <Label
            variant="headButton"
            className="mb-2 mb-[1.875rem] mt-[2.5rem] flex h-[2.1875rem] w-[10.3125rem] items-center justify-center rounded-full bg-black px-4 py-1 text-white"
          >
            원스토어 광고센터
          </Label>
          <div className="relative h-[24.6875rem] w-[31.25rem]">
            <Image
              src="/images/marketing/onestore-ad-center.png"
              alt="ad example"
              fill
              style={{
                objectFit: "fill",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingContent;
