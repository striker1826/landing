import StoreBtn from "@/components/atoms/StoreBtn";
import AppStoreBtn from "@/components/atoms/StoreBtn/AppStoreBtn";
import GooglePlayBtn from "@/components/atoms/StoreBtn/GooglePlayBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full pt-[152px] bg-gradient-to-b from-[#F6F6F6] to-[#DFC6FF] flex flex-col justify-center items-center">
      <div className="w-full text-[32px] md:text-[56px] lg:text-[64px] font-[700] text-center">
        <p className="text-black leading-[136%] traking-[-0.96px]">
          운전자를 위한
        </p>
        <p
          className="leading-[136%] tracking-[-0.96px] bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(180deg, #A054FF 58.52%, #7825FF 118.18%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          드라이빙 리워드 앱
        </p>
      </div>

      <div className="w-full mt-[32px] flex gap-[8px] justify-center items-center">
        <AppStoreBtn bg="#FFFFFFA3" />
        <GooglePlayBtn bg="#FFFFFFA3" />
      </div>
      <div className="relative mt-[113px] w-[256px] h-[256px] sm:w-[288px] sm:h-[288px] md:w-[336px] md:h-[336px] lg:w-[432px] lg:h-[432px]">
        <Image src={"/images/hero/hero-main.svg"} fill alt="hero main img" />
      </div>
    </div>
  );
};

export default Hero;
