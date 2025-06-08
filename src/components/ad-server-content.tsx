import Image from "next/image";

const adServerContent = () => {
  return (
    <div className="mt-4 space-y-4 text-sm text-gray-800">
      <ul className="list-disc pl-5">
        <li>
          국내No1라이브스트리밍 플랫폼SOOP TV의 성과형 광고 플랫폼SOOP ADS
          manager와 광고서버를 구축하였으며,다양한 광고상품 확장 및매체 데이터를
          활용한 타겟팅 기능 등 지속적인 고도화를 제공하였습니다.
        </li>
        <li>
          BAND의 캠페인 직접 관리가 가능한 광고센터와 대량 트래픽도 안정적으로
          처리하는 광고서버 구축을 진행했습니다.또한,와이즈버즈 광고사업
          그룹의세일즈 서포트로 매출 성장을 이루며 시장에 안착할 수 있었습니다.
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
              src="/images/ad-server/dashboard.png"
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
              src="/images/ad-server/placement.png"
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

export default adServerContent;
