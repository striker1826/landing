"use client";

import CompanyIntroBox from "@/components/molecules/CompanyIntroBox";
import useInViewVisibility from "@/hooks/useInViewVisibility";
import { motion } from "framer-motion";

const CompanyIntro = () => {
  const [ref, isvisible] = useInViewVisibility();

  return (
    <div
      ref={ref}
      className="bg-[#fff] pt-[80px] sm:pt-[128px] md:pt-[176px] lg:mt-[216px] pb-[44px] sm:pb-[128px] md:pb-[216px] flex flex-col sm:flex-row gap-[46px] sm:gap-[100px] md:gap-[156px] lg:gap-[330px] items-center justify-center sm:justify-center sm:items-start px-40px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isvisible ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col"
      >
        <p className="text-purple text-[16px] md:text-[20px] font-[700] leading-[120%] tracking-[-0.48px]">
          우리가 하는 일
        </p>
        {/* mobile */}
        <p className="sm:hidden mt-[12px] text-black text-[26px] sm:text-[32px] font-[700] leading-[136%] tracking-[-0.78px]">
          새로운 자동차 여행
          <br />
          경험 제작에 집중합니다
        </p>

        {/* pc */}
        <p className="hidden sm:block sm:mt-[20px] md:mt-[26px] text-black text-[26px] md:text-[40px] lg:text-[48px] font-[700] leading-[136%] tracking-[-0.78px]">
          새로운 자동차 여행
          <br />
          경험 제작에
          <br />
          집중합니다
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isvisible ? 1 : 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-[16px] sm:gap-[20px] items-center justify-start"
      >
        <CompanyIntroBox
          number="01"
          text={
            <>
              차량 주행 빅데이터를
              <br />
              통한 가치 창출
            </>
          }
        />
        <CompanyIntroBox
          number="02"
          text={
            <>
              주행 데이터 기반 AI
              <br />
              드라이브 코스 추천
            </>
          }
        />
        <CompanyIntroBox
          number="03"
          text={
            <>
              사용자 이동 동선에
              <br />
              최적화된 여행 컨텐츠
            </>
          }
        />
        <CompanyIntroBox
          number="04"
          text={
            <>
              리워드를 지급해
              <br />
              고객의 소비를 촉진
            </>
          }
        />
        <CompanyIntroBox
          number="05"
          text={
            <>
              로컬 관광지와 상점에
              <br />
              실질적 유입 효과 제공
            </>
          }
        />
      </motion.div>
    </div>
  );
};

export default CompanyIntro;
