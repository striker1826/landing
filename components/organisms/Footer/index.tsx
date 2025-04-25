"use client";

import FooterParagraph from "@/components/atoms/FooterParagraph";
import { div } from "framer-motion/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-[#131313] flex justify-center items-center">
      <div className="py-[44px] pl-[32px] gap-[36px] sm:gap-[104px] md:gap-[329px] lg:gap-[445px] sm:pl-[0px] sm:py-[100px] lg:py-[125px] sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <div className="flex flex-col gap-[16px] sm:gap-[24px]">
          <p className="text-[#fff] text-[16px] sm:text-[18px] lg:text-[20px] font-[700] leading-[128%] tracking-[-0.48px]">
            요즘피플
          </p>
          <div className="flex flex-col gap-[14px]">
            <FooterParagraph text="© YOZMPEOPLE. All Rights Reserved." />
            <FooterParagraph text={`경기 구리시 건원대로 67, 3층`} />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center sm:items-end">
          <div className="sm:mt-[0px] flex flex-col sm:flex-row gap-[16px] sm:gap-[48px]">
            <FooterParagraph text="개인(위치)정보처리방침" fontWeight="700" />
            <FooterParagraph text="이용약관" fontWeight="700" />
            <FooterParagraph text="위치기반서비스이용약관" fontWeight="700" />
          </div>

          <Image
            onClick={() =>
              router.push(
                "https://www.instagram.com/chaduck.official/reels/?locale=ko"
              )
            }
            className="mt-[24px]"
            src={"/images/footer/instagram.svg"}
            width={40}
            height={40}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
