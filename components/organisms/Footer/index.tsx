import FooterParagraph from "@/components/atoms/FooterParagraph";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-[44px] pl-[32px] bg-[#131313] flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="flex flex-col gap-[16px]">
        <p className="text-[#fff] text-[16px] font-[700] leading-[128%] tracking-[-0.48px]">
          요즘피플
        </p>
        <div className="flex flex-col gap-[8px]">
          <FooterParagraph text="© YOZMPEOPLE. All Rights Reserved." />
          <FooterParagraph text={`경기 구리시 건원대로 67, 3층`} />
        </div>
      </div>

      <div className="mt-[36px] flex flex-col gap-[16px]">
        <FooterParagraph text="개인(위치)정보처리방침" fontWeight="700" />
        <FooterParagraph text="이용약관" fontWeight="700" />
        <FooterParagraph text="위치기반서비스이용약관" fontWeight="700" />
      </div>

      <Image
        className="mt-[24px]"
        src={"/images/footer/instagram.svg"}
        width={40}
        height={40}
        alt="instagram"
      />
    </div>
  );
};

export default Footer;
