"use clent";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import useInViewVisibility from "@/hooks/useInViewVisibility";

const Intro = () => {
  const [duckRef, duckInView] = useInViewVisibility();
  const [placeRef, placeInView] = useInViewVisibility();
  const [placeMobileImgRef, placeMobileImgInView] = useInViewVisibility();
  const [placePcImgRef, placePcImgInView] = useInViewVisibility();

  return (
    <div className="pt-[60px] pb-[117px] flex flex-col items-center justify-center">
      <motion.div
        ref={duckRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: duckInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center"
      >
        <div className="relative w-[96px] h-[96px] sm:w-[128px] sm:h-[128px] md:w-[152px] md:h-[152px] lg:w-[168px] lg:h-[168px]">
          <Image src={"/images/intro/duck.svg"} fill alt="duck icon" />
        </div>

        {/* mobile */}
        <p className="sm:hidden mt-[21px] sm:mt-[136px] md:mt-[176px] text-[#202020] text-center text-[26px] font-[700] leading-[136%] tracking-[-0.78px]">
          어디 갈지, 무엇을 할지,
          <br />
          주차는 가능할지,
          <br />더 이상&nbsp;
          <span
            style={{
              background:
                "linear-gradient(180deg, #A054FF 58.52%, #7825FF 118.18%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            고민마세요.
          </span>
        </p>

        {/* pc */}
        <p className="hidden sm:block mt-[21px] sm:mt-[41px] md:mt-[48px] lg:mt-[32px] text-[#202020] text-center text-[26px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-[700] leading-[136%] tracking-[-0.78px]">
          어디 갈지, 무엇을 할지,
          <br /> 주차는 가능할지, 더 이상&nbsp;
          <span
            style={{
              background:
                "linear-gradient(180deg, #A054FF 58.52%, #7825FF 118.18%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            고민마세요.
          </span>
        </p>
      </motion.div>

      <motion.div
        ref={placeRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: placeInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full flex flex-col items-center justify-center pt-[192px] sm:pt-[237px] md:pt-[328px] lg:pt-[376px]"
      >
        <p className="text-purple text-[16px] md:text-[18px] lg:text-[20px] font-[700] leading-[128%] tracking-[-0.48px]">
          차덕이 큐레이션 해주는
        </p>
        <p className="text-[#202020] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px ] font-[700] leading-[136%] tracking-[-0.78px] ">
          추천 장소로 떠나면
        </p>
        <div className="flex gap-[8px] items-center">
          <div className="relative w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] md:w-[56px] md:h-[56px] lg:w-[64px] lg:h-[64px] ">
            <Image src={"/images/intro/coin.svg"} fill alt="coin image" />
          </div>
          <p className="text-[#202020] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px ] font-[700] leading-[136%] tracking-[-0.78px]">
            <span
              style={{
                background:
                  "linear-gradient(180deg, #A054FF 58.52%, #7825FF 118.18%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              보상까지
            </span>
            쌓여요
          </p>
        </div>

        {/* mobile */}
        <motion.div
          ref={placeMobileImgRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: placeMobileImgInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="sm:hidden mt-[47px] mr-[68px] flex flex-col items-start justify-center gap-[47px]"
        >
          <div className="relative w-full">
            <Image
              className="relative z-10"
              src={"/images/intro/course.png"}
              width={190}
              height={190}
              alt="course image"
            />

            <Image
              className="absolute top-[95px] left-[130px] z-0"
              src={"/images/intro/place.png"}
              width={167}
              height={167}
              alt="place image"
            />
          </div>

          <Image
            src={"/images/intro/latte.png"}
            width={167}
            height={167}
            alt="latte image"
          />
        </motion.div>
        {/* pc */}
        <motion.div
          ref={placePcImgRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: placePcImgInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="hidden sm:flex w-full justify-center items-center mt-[60px] gap-[16px] md:mt-[78px] md:gap-[24px] lg:mt-[74px] lg:gap-[32px]"
        >
          <div className="relative w-[264px] h-[264px] md:w-[312px] md:h-[312px] lg:w-[406px] lg:h-[406px]">
            <Image
              src={"/images/intro/course.png"}
              fill
              alt="course image"
              className="object-contain"
            />
          </div>
          <div className="relative w-[264px] h-[264px] md:w-[312px] md:h-[312px] lg:w-[406px] lg:h-[406px]">
            <Image
              src={"/images/intro/place.png"}
              fill
              alt="place image"
              className="object-contain"
            />
          </div>
          <div className="relative w-[264px] h-[264px] md:w-[312px] md:h-[312px] lg:w-[406px] lg:h-[406px]">
            <Image
              src={"/images/intro/latte.png"}
              fill
              alt="latte image"
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
