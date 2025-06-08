import Image from "next/image";

const MarketingContent = () => {
  return (
    <div className="mt-4 space-y-4 text-sm text-gray-800">
      <ul className="list-disc pl-5">
        <li>
          LG U+의 다양한 서비스 대상으로 다수의 외부 광고를 연동하고 광고
          수익화를 최적화하며,집행 광고 통합 성과 관리가 가능한SSP를
          구축했습니다.
        </li>
        <li>
          •원스토어의 입점 개발사들이 광고 집행부터 성과 관리,비용 정산까지
          원스톱으로 진행할 수 있는Self-Served플랫폼을 구축했습니다.
        </li>
      </ul>

      <div className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
        {/* Dashboard Example */}
        <div className="flex flex-col items-center">
          <span className="mb-2 rounded-full bg-black px-4 py-1 text-white">
            LG U+ SSP
          </span>
          <div className="relative h-60 w-80 md:w-[400px]">
            <Image
              src="/images/marketing/uplus-ssp.png"
              alt="dashboard example"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Ad Example */}
        <div className="flex flex-col items-center">
          <span className="mb-2 rounded-full bg-black px-4 py-1 text-white">
            원스토어 광고센터
          </span>
          <div className="relative h-60 w-80 md:w-[400px]">
            <Image
              src="/images/marketing/onestore-ad-center.png"
              alt="ad example"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingContent;
