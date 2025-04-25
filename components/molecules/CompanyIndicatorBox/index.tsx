import Image from "next/image";
import React from "react";

interface CompanyIndicatorBoxProps {
  titleIconPath: string;
  title: string;
  count: string;
}

const CompanyIndicatorBox = ({
  titleIconPath,
  title,
  count,
}: CompanyIndicatorBoxProps) => {
  return (
    <div className="w-full py-[24px] pl-[28px] sm:py-[28px] sm:pl-[48px] md:py-[48px] md:pl-[56px] lg:py-[56px] lg:pl-[56px] bg-[#F2F2F2] rounded-[16px] flex flex-col gap-[4px]">
      <div className="flex items-center gap-[8px]">
        <div className="relative w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]">
          <Image src={titleIconPath} fill alt="title icon" />
        </div>
        <p className="text-[#696986] text-[16px] md:text-[24px] lg:text-[32px] font-[700] leading-[128%] tracking-[-0.48p]">
          {title}
        </p>
      </div>

      <p className="text-black text-[40px] md:text-[56px] lg:text-[64px] font-[700] leading-[136%] tracking-[-1.2px]">
        {count}
      </p>
    </div>
  );
};

export default CompanyIndicatorBox;
