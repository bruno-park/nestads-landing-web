import Image from "next/image";
import Label from "@/components/ui/label";

const AdManagerContent = () => {
  return (
    <div className="text-gray-800">
      <ul className="mx-[2.5rem] list-disc pl-5">
        <li>
          <Label variant="bodyRegular">
            블라인드는 NEST AD MANAGER를 통해 운영 대시보드 구축 및 신규 지면
            (동영상 피드 광고, 알림 목록 배너 등) 확장을 진행했습니다.
          </Label>
        </li>
        <li>
          <Label variant="bodyRegular">
            데일리샷과 사람인은 광고 서버 연동부터 맞춤 광고 UI 구현까지
            전반적인 과정을 함께했으며, 광고 사업 총괄 대응하여 세일즈부터
            운영까지 진행하였습니다.
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
            대시보드 예시
          </Label>
          <div className="relative h-[24.6875rem] w-[31.25rem]">
            <Image
              src="/images/nest-ad-manager/dashboard.png"
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
            광고 지면 예시
          </Label>
          <div className="relative h-[24.6875rem] w-[31.25rem]">
            <Image
              src="/images/nest-ad-manager/placement.png"
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

export default AdManagerContent;
