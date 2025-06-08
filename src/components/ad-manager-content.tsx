import Image from "next/image";

const AdManagerContent = () => {
  return (
    <div className="mt-4 space-y-4 text-sm text-gray-800">
      <ul className="list-disc pl-5">
        <li>
          블라인드는 NEST AD MANAGER를 통해 운영 대시보드 구축 및 신규 지면
          (동영상 피드 광고, 알림 목록 배너 등) 확장을 진행했습니다.
        </li>
        <li>
          데일리샷과 사람인은 광고 서버 연동부터 맞춤 광고 UI 구현까지 전반적인
          과정을 함께했으며, 광고 사업 총괄 대응하여 세일즈부터 운영까지
          진행하였습니다.
        </li>
      </ul>

      <div className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
        {/* Dashboard Example */}
        <div className="flex flex-col items-center">
          <span className="mb-2 rounded-full bg-black px-4 py-1 text-white">
            대시보드 예시
          </span>
          <div className="relative h-60 w-80 md:w-[400px]">
            <Image
              src="/images/nest-ad-manager/dashboard.png"
              alt="dashboard example"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Ad Example */}
        <div className="flex flex-col items-center">
          <span className="mb-2 rounded-full bg-black px-4 py-1 text-white">
            광고 지면 예시
          </span>
          <div className="relative h-60 w-80 md:w-[400px]">
            <Image
              src="/images/nest-ad-manager/placement.png"
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

export default AdManagerContent;
