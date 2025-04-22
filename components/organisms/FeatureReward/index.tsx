import Feature from "@/components/molecules/Feature";
import Image from "next/image";

const FeatureReward = () => {
  return (
    <div className="bg-[#fff] pt-[128px] sm:pt-[176px] md:pt-[200px] pb-[128px] sm:pb-[176px] md:pb-[200px] flex flex-col items-center justify-center">
      <Feature
        mainText={
          <>
            방문할 장소에 도착해도
            <br />
            보상을 지급해요
          </>
        }
        subText="방문체크인"
      >
        <div className="relative mt-[56px] sm:mt-[77px] w-[280px] md:w-[320px] lg:w-[360px] h-[616px] md:h-[705px] lg:h-[792px]">
          <Image
            src={"/images/featureReward/phone.png"}
            fill
            alt="phone image"
          />
        </div>
      </Feature>
    </div>
  );
};

export default FeatureReward;
