import Image from "next/image";
import Text from "@/components/ui/text";

const MarketingContent = () => {
  return (
    <div className="text-gray-800">
      <ul className="list-disc pl-5 md:mx-[2.5rem]">
        <li>
          <Text variant="bodyRegular">
            LG U+의 다양한 서비스 대상으로 다수의 외부 광고를 연동하고 광고
            수익화를 최적화하며,집행 광고 통합 성과 관리가 가능한SSP를
            구축했습니다.
          </Text>
        </li>
        <li>
          <Text variant="bodyRegular">
            원스토어의 입점 개발사들이 광고 집행부터 성과 관리,비용 정산까지
            원스톱으로 진행할 수 있는Self-Served플랫폼을 구축했습니다.
          </Text>
        </li>
      </ul>

      <div className="flex flex-col md:flex-row">
        {/* Dashboard Example */}
        <div className="flex flex-col items-center">
          <Text
            variant="headButton"
            className="mt-[1.875rem] flex h-6 w-32 items-center justify-center rounded-full bg-black px-4 py-1 text-xs text-white md:mb-[1.875rem] md:mt-[2.5rem] md:h-[2.1875rem] md:w-[10.3125rem]"
          >
            LG U+ SSP
          </Text>
          <div className="relative h-[18rem] w-[22rem] md:h-[24.6875rem] md:w-[31.25rem]">
            <Image
              src="/images/marketing/uplus-ssp.png"
              alt="dashboard example"
              fill
              objectFit="contain"
            />
          </div>
        </div>

        {/* Ad Example */}
        <div className="flex flex-col items-center">
          <Text
            variant="headButton"
            className="mt-[1.875rem] flex h-6 w-32 items-center justify-center rounded-full bg-black px-4 py-1 text-xs text-white md:mb-[1.875rem] md:mt-[2.5rem] md:h-[2.1875rem] md:w-[10.3125rem]"
          >
            원스토어 광고센터
          </Text>
          <div className="relative h-[18rem] w-[22rem] md:h-[24.6875rem] md:w-[31.25rem]">
            <Image
              src="/images/marketing/onestore-ad-center.png"
              alt="ad example"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingContent;
