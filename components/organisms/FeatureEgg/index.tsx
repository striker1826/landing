"use client";

import Lottie from "lottie-react";
import landingEgg from "@/public/landing_egg.json";
import Feature from "@/components/molecules/Feature";

const FeatureEgg = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-[80px] sm:pb-[128px] md:pb-[176px]">
      <Feature
        mainText={
          <>
            앱 이용과 이벤트로 얻은
            <br />
            오리알로 포인트를 얻어요
          </>
        }
        subText="행운의 오리알"
      >
        <Lottie
          className="mt-[56px] w-[200px] h-[440px] sm:w-[280px] sm:h-[616px] md:w-[320px] md:h-[705px] lg:w-[360px] lg:h-[792px]"
          animationData={landingEgg}
        />
      </Feature>
    </div>
  );
};

export default FeatureEgg;
