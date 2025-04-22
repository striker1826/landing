"use client";

import landingEgg from "@/public/landing_egg.json";
import Feature from "@/components/molecules/Feature";
import dynamic from "next/dynamic";
import Image from "next/image";

const FeatureEgg = () => {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

  return (
    <div className="flex flex-col px-[30px] bg-[#fff] items-center justify-center pb-[80px] sm:pb-[128px] md:pb-[176px]">
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
        <div className="relative max-w-[1369px] w-full flex justify-center items-center">
          <Lottie
            className="mt-[56px] w-[200px] w-full h-[440px] sm:w-[280px] sm:h-[616px] md:w-[320px] md:h-[705px] lg:w-[360px] lg:h-[792px]"
            animationData={landingEgg}
          />
          <Image
            src={"/images/featureEgg/confetti.svg"}
            className="w-full"
            fill
            alt="confetti"
          />
          <Image
            className="absolute top-[283px] left-[8px]"
            src={"/images/featureEgg/leftCoin.svg"}
            width={100}
            height={100}
            alt="coin"
          />
          <Image
            className="absolute top-[140px] right-[8px]"
            src={"/images/featureEgg/rightCoin.svg"}
            width={100}
            height={100}
            alt="coin"
          />
        </div>
      </Feature>
    </div>
  );
};

export default FeatureEgg;
