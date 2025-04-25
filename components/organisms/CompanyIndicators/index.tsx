"use client";

import CompanyFeature from "@/components/molecules/CompanyFeature";
import CompanyIndicatorBox from "@/components/molecules/CompanyIndicatorBox";

const CompanyIndicators = () => {
  return (
    <div className="bg-[#fff] pt-[80px] sm:pt-[128px] sm:pb-[128px] pb-[52px] px-[20px]">
      <CompanyFeature
        subText="우리의 지표"
        mainText={
          <>
            특허와 데이터에 기반해
            <br />
            문제를 해결합니다
          </>
        }
      >
        <div className="w-full sm:mt-[-42px] flex flex-col max-w-[1232px] gap-[16px] sm:grid sm:grid-cols-2 sm:gap-[20px]">
          <CompanyIndicatorBox
            titleIconPath="/images/company/indicator/medal.svg"
            title="특허권"
            count="8개"
          />
          <CompanyIndicatorBox
            titleIconPath="/images/company/indicator/tag.svg"
            title="상표권"
            count="4개"
          />
          <CompanyIndicatorBox
            titleIconPath="/images/company/indicator/car.svg"
            title="차량 주행 빅데이터"
            count="9,932건"
          />
          <CompanyIndicatorBox
            titleIconPath="/images/company/indicator/marker.svg"
            title="여행 장소 데이터"
            count="4,126건"
          />
        </div>
      </CompanyFeature>
    </div>
  );
};

export default CompanyIndicators;
