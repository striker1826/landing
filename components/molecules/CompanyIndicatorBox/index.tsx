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
    <div className="w-full py-[24px] pl-[28px] sm:py-[36px] sm:pl-[48px] md:py-[56px] md:pl-[56px] lg:py-[64px] lg:pl-[64px] bg-[#F2F2F2] rounded-[16px] flex flex-col gap-[4px]">
      <div className="flex items-center gap-[8px]">
        <Image src={titleIconPath} width={24} height={24} alt="title icon" />
        <p className="text-[#696986] text-[16px] font-[700] leading-[128%] tracking-[-0.48p]">
          {title}
        </p>
      </div>

      <p className="text-black text-[40px] font-[700] leading-[136%] tracking-[-1.2px]">
        {count}
      </p>
    </div>
  );
};

export default CompanyIndicatorBox;
