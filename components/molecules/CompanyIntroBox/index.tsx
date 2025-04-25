import React from "react";

interface CompanyIntroBoxProps {
  number: string;
  text: React.ReactNode;
}

const CompanyIntroBox = ({ number, text }: CompanyIntroBoxProps) => {
  return (
    <div
      className="w-full py-[28px] px-[32px] sm:py-[44px] sm:px-[48px] flex items-center gap-[28px] md:gap-[40px] lg:gap-[68px] rounded-[20px] border border-[1px] border-[#592FD4] bg-[#fff]"
      style={{ boxShadow: "12px 12px 12px 0px rgba(0, 0, 0, 0.08)" }}
    >
      <p className="text-[#592FD4] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[44px] font-[700] leading-[136%] tracking-[-0.72px]">
        {number}
      </p>
      <p className="text-black text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-[700] leading-[136%] tracking-[-0.54px]">
        {text}
      </p>
    </div>
  );
};

export default CompanyIntroBox;
