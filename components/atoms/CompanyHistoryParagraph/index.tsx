import React from "react";

interface Props {
  month: string;
  description: React.ReactNode;
}

const CompanyHistoryParagraph = ({ month, description }: Props) => {
  return (
    <div className="flex items-start gap-[24px] sm:gap-[44px]">
      <p className="text-[#7E7E7E] text-[14px] md:text-[20px] sm:text-[18px] font-[700] leading-[128%] tracking-[-0.42px]">
        {month}
      </p>
      <p className="text-[14px] sm:text-[18px] md:text-[20px] text-[#fff] font-[600] leading-[128%] tracking-[-0.42px]">
        {description}
      </p>
    </div>
  );
};

export default CompanyHistoryParagraph;
