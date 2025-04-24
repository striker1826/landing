import Feature from "@/components/molecules/Feature";
import Image from "next/image";

const FeaturePlace = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F6F8] px-[32px] py-[80px] sm:py-[128px] md:py-[176px] lg:py-[200px] sm:px-[135px]">
      <Feature
        mainText={
          <>
            지도와 주차장 정보를
            <br />다 알려드려요
          </>
        }
        subText="장소 탐색에 용이하게"
      >
        <div className="flex flex-col mt-[36px] sm:mt-[56px] md:mt-[68px] lg:mt-[70px] sm:flex-row items-center justify-center gap-[16px] sm:gap-[20px]">
          <div
            className="rounded-[16px] bg-[#fff] px-[28px] py-[36px] flex items-center gap-[44px]"
            style={{ boxShadow: "12px 9px 12px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="text-[#000] text-[20px] font-[700] leading-[136%] tracking-[-0.6px]">
              로드뷰와
              <br />
              네비게이션
            </div>
            <div className="relative w-[110px] h-[72px]">
              <Image
                src={"/images/featurePlace/maker.svg"}
                fill
                alt="maker image"
              />
            </div>
          </div>

          <div
            className="rounded-[16px] bg-[#fff] px-[28px] py-[36px] flex items-center gap-[44px]"
            style={{ boxShadow: "12px 9px 12px 0px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="text-[#000] text-[20px] font-[700] leading-[136%] tracking-[-0.6px]">
              공영주차장
              <br />
              정보까지
            </div>
            <div className="relative w-[110px] h-[72px]">
              <Image
                src={"/images/featurePlace/car.svg"}
                fill
                alt="maker image"
              />
            </div>
          </div>
        </div>
      </Feature>
    </div>
  );
};

export default FeaturePlace;
