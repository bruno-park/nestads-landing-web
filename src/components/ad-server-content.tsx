import Image from "next/image";
import Label from "@/components/ui/label";

const adServerContent = () => {
  return (
    <div className="text-gray-800">
      <ul className="mx-[2.5rem] list-disc pl-5">
        <li>
          <Label variant="bodyRegular">
            국내No1라이브스트리밍 플랫폼SOOP TV의 성과형 광고 플랫폼SOOP ADS
            manager와 광고서버를 구축하였으며,다양한 광고상품 확장 및매체
            데이터를 활용한 타겟팅 기능 등 지속적인 고도화를 제공하였습니다.
          </Label>
        </li>
        <li>
          <Label variant="bodyRegular">
            BAND의 캠페인 직접 관리가 가능한 광고센터와 대량 트래픽도 안정적으로
            처리하는 광고서버 구축을 진행했습니다.또한,와이즈버즈 광고사업
            그룹의세일즈 서포트로 매출 성장을 이루며 시장에 안착할 수
            있었습니다.
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
              src="/images/ad-server/dashboard.png"
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
              src="/images/ad-server/placement.png"
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

export default adServerContent;
