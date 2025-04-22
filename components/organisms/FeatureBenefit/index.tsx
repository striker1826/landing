import Feature from "@/components/molecules/Feature";
import Image from "next/image";

const FeatureBenefit = () => {
  return (
    <div className="pb-[82px] flex flex-col items-center justify-center pt-[80px] bg-[url('/images/featureBenefit/bg.svg')] bg-cover bg-center bg-no-repeat">
      <Feature
        subText="리워드라이브"
        mainText={
          <>
            켜놓고 운전만 해도
            <br />
            보상을 지급해요
          </>
        }
      >
        <div className="mt-[40px] sm:mt-[112px] w-full flex flex-col sm:flex-row gap-[16px] items-center justify-center">
          <div className="relative w-[260px] h-[260px] sm:w-[396px] sm:h-[396px] sm:aspect-[396/384] md:w-[487px] md:h-[487px] md:aspect-[487/473] lg:w-[556px] lg:h-[540px] lg:aspect-[139/135]">
            <Image
              src={"/images/featureBenefit/rewardrive.svg"}
              fill
              alt="rewardrive"
            />
          </div>
          <div className="relative w-[288px] h-[288px] aspect-[36/35] sm:w-[396px] sm:h-[396px] sm:aspect-[396/384] md:w-[487px] md:h-[487px] md:aspect-[487/473] lg:w-[556px] lg:h-[540px] lg:aspect-[139/135]">
            <Image
              src={"/images/featureBenefit/benefits.svg"}
              fill
              alt="rewardrive"
            />
          </div>
        </div>
      </Feature>
    </div>
  );
};

export default FeatureBenefit;
