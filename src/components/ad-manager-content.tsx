import Image from "next/image";
import Text from "@/components/ui/text";

const AdManagerContent = () => {
  return (
    <div className="text-gray-800">
      <ul className="list-disc pl-5 md:mx-[2.5rem]">
        <li>
          <Text variant="bodyRegular">
            블라인드는 NEST ADS MANAGER를 통해 운영 대시보드 구축 및 신규 지면
            (동영상 피드 광고, 알림 목록 배너 등) 확장을 진행했습니다.
          </Text>
        </li>
        <li>
          <Text variant="bodyRegular">
            데일리샷과 사람인은 광고 서버 연동부터 맞춤 광고 UI 구현까지
            전반적인 과정을 함께했으며, 광고 사업 총괄 대응하여 세일즈부터
            운영까지 진행하였습니다.
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
              src="/images/nest-ad-manager/dashboard.png"
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
              src="/images/nest-ad-manager/placement.png"
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

export default AdManagerContent;
