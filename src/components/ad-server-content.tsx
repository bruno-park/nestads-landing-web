import Image from "next/image";
import Text from "@/components/ui/text";

const adServerContent = () => {
  return (
    <div className="text-gray-800">
      <ul className="list-disc pl-5 md:mx-[2.5rem]">
        <li>
          <Text variant="bodyRegular">
            국내No1라이브스트리밍 플랫폼SOOP TV의 성과형 광고 플랫폼SOOP ADS
            manager와 광고서버를 구축하였으며,다양한 광고상품 확장 및매체
            데이터를 활용한 타겟팅 기능 등 지속적인 고도화를 제공하였습니다.
          </Text>
        </li>
        <li>
          <Text variant="bodyRegular">
            BAND의 캠페인 직접 관리가 가능한 광고센터와 대량 트래픽도 안정적으로
            처리하는 광고서버 구축을 진행했습니다.또한,와이즈버즈 광고사업
            그룹의세일즈 서포트로 매출 성장을 이루며 시장에 안착할 수
            있었습니다.
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
            대시보드 예시
          </Text>
          <div className="relative h-[18rem] w-[22rem] md:h-[24.6875rem] md:w-[31.25rem]">
            <Image
              src="/images/ad-server/dashboard.png"
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
            광고 지면 예시
          </Text>
          <div className="relative h-[18rem] w-[22rem] md:h-[24.6875rem] md:w-[31.25rem]">
            <Image
              src="/images/ad-server/placement.png"
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

export default adServerContent;
