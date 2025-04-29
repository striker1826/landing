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
          <div className="relative w-[288px] h-[280px] aspect-[36/35] sm:w-[396px] sm:h-[384px] sm:aspect-[396/384] md:w-[487px] md:h-[473px] md:aspect-[487/473] lg:w-[556px] lg:h-[540px] lg:aspect-[139/135]">
            <Image
              src={"/images/featureBenefit/rewardrive.svg"}
              fill
              alt="rewardrive"
            />
          </div>
          <div className="relative flex flex-col gap-[16px] items-center justify-center sm:gap-[19px] md:gap-[23px] lg:gap-[27px]">
            <div className="relative w-[288px] h-[151px] aspect-[288/151] sm:w-[339px] sm:h-[178px] sm:aspect-[339/178] md:w-[417px] md:h-[219px] md:aspect-[417/219] lg:w-[476px] lg:h-[250px] lg:aspect-[238/125]">
              <Image
                src={"/images/featureBenefit/benefits-parameters.svg"}
                fill
                alt="benefit parameter"
              />
            </div>
            <div className="relative w-[288px] h-[157px] aspect-[288/157] sm:w-[340px] sm:h-[185px] sm:aspect-[340/185] md:w-[418px] md:h-[227px] md:aspect-[418/227] lg:w-[477px] lg:h-[260px] lg:aspect-[477/260]">
              <Image
                src={"/images/featureBenefit/benefits-reward.svg"}
                fill
                alt="benefit reward"
              />
            </div>
          </div>
        </div>
      </Feature>
    </div>
  );
};

export default FeatureBenefit;
