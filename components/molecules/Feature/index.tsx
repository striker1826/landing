"use client";

import useInViewVisibility from "@/hooks/useInViewVisibility";
import { motion } from "framer-motion";

interface FeatureProps {
  mainText: React.ReactNode;
  subText: string;
  children: React.ReactNode;
}

const Feature = ({ mainText, subText, children }: FeatureProps) => {
  const [ref, isVisible] = useInViewVisibility();

  return (
    <motion.div
      ref={ref}
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <p className="w-full text-center text-purple text-[16px] md:text-[18px] lg:text-[20px] font-[700] leading-[128%] tracking-[-0.48px]">
        {subText}
      </p>
      <p className="mt-[16px] sm:mt-[20px] md:mt-[24px] lg:mt-[26px] text-center text-black text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-[700] leading-[136%] tracking-[-0.78px]">
        {mainText}
      </p>

      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Feature;
