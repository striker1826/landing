"use client";

import useInViewVisibility from "@/hooks/useInViewVisibility";
import { motion } from "framer-motion";

import React from "react";

interface CompanyFeatureProps {
  reverse?: boolean;
  mainText: React.ReactNode;
  subText: string;
  children: React.ReactNode;
}

const CompanyFeature = ({
  mainText,
  subText,
  children,
  reverse = false,
}: CompanyFeatureProps) => {
  const [ref, isvisible] = useInViewVisibility();

  return (
    <div
      ref={ref}
      className="flex flex-col gap-[54px] sm:gap-[112px] items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isvisible ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <p
          className={`text-[16px] lg:text-[20px] text-center font-[700] leading-[128%] tracking-[-0.48px] ${
            reverse ? "text-[#fff]" : "text-purple"
          }`}
        >
          {subText}
        </p>
        <p
          className={`mt-[12px] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-center font-[700] leading-[136%] tracking-[-0.78px] ${
            reverse ? "text-[#fff]" : "text-black"
          }`}
        >
          {mainText}
        </p>
      </motion.div>
      <motion.div
        className="w-full flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isvisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CompanyFeature;
