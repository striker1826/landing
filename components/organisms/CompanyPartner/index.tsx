import CompanyFeature from "@/components/molecules/CompanyFeature";
import Image from "next/image";
import React from "react";

const CompanyPartner = () => {
  return (
    <div className="w-full bg-[#fff] px-[40px] py-[80px] sm:py-[128px] md:py-[176px] lg:py-[200px] flex flex-col items-center justify-center">
      <CompanyFeature
        subText="함께하는 이들"
        mainText={
          <>
            요즘피플과 함께하는
            <br />
            파트너 입니다
          </>
        }
      >
        {/* mobile */}
        <div className="sm:hidden max-w-[800px] w-full flex flex-col gap-[16px] flex-wrap justify-center items-center">
          <div className=" flex gap-[24px] items-center justify-center">
            <div className="py-[4px] px-[8px] sm:py-[6px] sm:px-[18px] md:py-[8px] md:px-[20px] lg:py-[8px] lg:px-[14px]">
              <div className="relative w-[95px] h-[46px] sm:w-[123px] sm:h-[60px] md:w-[143px] md:h-[69px] lg:w-[171px] lg:h-[82px]">
                <Image
                  src={"/images/company/partner/korea-tourism-organization.png"}
                  fill
                  alt="한국 관광공사"
                />
              </div>
            </div>

            <div className="py-[5px] px-[4px] sm:py-[6px] sm:px-[13px] md:py-[8px] md:px-[14px] lg:py-[8px] lg:px-[7px]">
              <div className="relative w-[102px] h-[46px] sm:w-[132px] sm:h-[60px] md:w-[154px] md:h-[69px] lg:w-[183px] lg:h-[82px]">
                <Image
                  src={"/images/company/partner/kwangwoon-university.png"}
                  fill
                  alt="광운대학교"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[24px] items-center justify-center">
            <div className="py-[19px] px-[10px] sm:py-[24px] sm:px-[20px] md:py-[28px] md:px-[22px] lg:py-[33px] lg:px-[17px]">
              <div className="relative w-[92px] h-[18px] sm:w-[120px] sm:h-[24px] md:w-[139px] md:h-[27px] lg:w-[165px] lg:h-[32px]">
                <Image
                  src={
                    "/images/company/partner/korea-venture-women-association.png"
                  }
                  fill
                  alt="한국 여성 벤쳐협회"
                />
              </div>
            </div>

            <div className="py-[6px] px-[13px] sm:py-[7px] sm:px-[24px] md:py-[9px] md:px-[28px] lg:py-[10px] lg:px-[23px]">
              <div className="relative w-[86px] h-[43px] sm:w-[110px] sm:h-[55px] md:w-[129px] md:h-[64px] lg:w-[153px] lg:h-[76px]">
                <Image
                  src={"/images/company/partner/kibo.png"}
                  fill
                  alt="kibo"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[24px] items-center justify-center">
            <div className="py-[21px] px-[20px] sm:py-[27px] sm:px-[33px] md:py-[31px] md:px-[38px] lg:py-[37px] lg:px-[36px]">
              <div className="relative w-[71px] h-[14px] sm:w-[91px] sm:h-[18px] md:w-[106px] md:h-[21px] lg:w-[127px] lg:h-[25px]">
                <Image
                  src={"/images/company/partner/kosme.png"}
                  fill
                  alt="KOSME"
                />
              </div>
            </div>

            <div className="py-[19px] px-[12px] sm:py-[24px] sm:px-[22px] md:py-[28px] md:px-[24px] lg:py-[33px] lg:px-[20px]">
              <div className="relative w-[88px] h-[20px] sm:w-[114px] sm:h-[25px] md:w-[133px] md:h-[30px] lg:w-[158px] lg:h-[35px]">
                <Image
                  src={"/images/company/partner/gyeonggi-startup-platform.png"}
                  fill
                  alt="경기 스타트업 플랫폼"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[24px] items-center justify-center">
            <div className="py-[20px] px-[20px] sm:py-[25px] sm:px-[34px] md:py-[30px] md:px-[38px] lg:py-[35px] lg:px-[36px]">
              <div className="relative w-[68px] h-[16px] sm:w-[88px] sm:h-[20px] md:w-[103px] md:h-[24px] lg:w-[123px] lg:h-[28px]">
                <Image
                  src={"/images/company/partner/gyeonggi-jop-foundation.png"}
                  fill
                  alt="경기도 일자리 재단"
                />
              </div>
            </div>

            <div className="py-[10px] px-[32px] sm:py-[12px] sm:px-[49px] md:py-[15px] md:px-[55px] lg:py-[17px] lg:px-[56px]">
              <div className="relative w-[48px] h-[33px] sm:w-[62px] sm:h-[42px] md:w-[72px] md:h-[49px] lg:w-[86px] lg:h-[58px]">
                <Image
                  src={"/images/company/partner/dream.png"}
                  fill
                  alt="꿈마루"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[24px] items-center justify-center">
            <div className="py-[20px] px-[16px] sm:py-[25px] sm:px-[30px] md:py-[30px] md:px-[33px] lg:py-[35px] lg:px-[30px]">
              <div className="relative w-[76px] h-[15px] sm:w-[98px] sm:h-[19px] md:w-[115px] md:h-[22px] lg:w-[136px] lg:h-[26px]">
                <Image
                  src={"/images/company/partner/kangwon.png"}
                  fill
                  alt="강원 창조 경제 혁신센터"
                />
              </div>
            </div>

            <div className="py-[5px] px-[12px] sm:py-[6px] sm:px-[23px] md:py-[10px] md:px-[26px] py-[8px] px-[21px]">
              <div className="relative w-[88px] h-[44px] sm:w-[113px] sm:h-[56px] md:w-[132px] md:h-[66px] lg:w-[157px] lg:h-[78px]">
                <Image
                  src={"/images/company/partner/etech-system.png"}
                  fill
                  alt="etech system"
                />
              </div>
            </div>
          </div>

          <div className="py-[22px] px-[26px] sm:py-[28px] sm:px-[40px] md:py-[33px] md:px-[47px] lg:py-[39px] lg:px-[47px]">
            <div className="relative w-[58] h-[11px] sm:w-[75px] sm:h-[14px] md:w-[87px] md:h-[16px] lg:w-[104px] lg:h-[19px]">
              <Image
                src={"/images/company/partner/giftshow-biz.png"}
                fill
                alt="figtshow biz"
              />
            </div>
          </div>
        </div>

        {/* pc */}
        <div className="hidden sm:flex w-full max-w-[1000px] flex flex-col gap-[16px] flex-wrap justify-center items-center">
          <div className="flex gap-[48px] items-center justify-center">
            <div className="py-[4px] px-[8px] sm:py-[6px] sm:px-[18px] md:py-[8px] md:px-[20px] lg:py-[8px] lg:px-[14px]">
              <div className="relative w-[95px] h-[46px] sm:w-[123px] sm:h-[60px] md:w-[143px] md:h-[69px] lg:w-[171px] lg:h-[82px]">
                <Image
                  src={"/images/company/partner/korea-tourism-organization.png"}
                  fill
                  alt="한국 관광공사"
                />
              </div>
            </div>

            <div className="py-[5px] px-[4px] sm:py-[6px] sm:px-[13px] md:py-[8px] md:px-[14px] lg:py-[8px] lg:px-[7px]">
              <div className="relative w-[102px] h-[46px] sm:w-[132px] sm:h-[60px] md:w-[154px] md:h-[69px] lg:w-[183px] lg:h-[82px]">
                <Image
                  src={"/images/company/partner/kwangwoon-university.png"}
                  fill
                  alt="광운대학교"
                />
              </div>
            </div>

            <div className="py-[19px] px-[10px] sm:py-[24px] sm:px-[20px] md:py-[28px] md:px-[22px] lg:py-[33px] lg:px-[17px]">
              <div className="relative w-[92px] h-[18px] sm:w-[120px] sm:h-[24px] md:w-[139px] md:h-[27px] lg:w-[165px] lg:h-[32px]">
                <Image
                  src={
                    "/images/company/partner/korea-venture-women-association.png"
                  }
                  fill
                  alt="한국 여성 벤쳐협회"
                />
              </div>
            </div>

            <div className="py-[20px] px-[16px] sm:py-[25px] sm:px-[30px] md:py-[30px] md:px-[33px] lg:py-[35px] lg:px-[30px]">
              <div className="relative w-[76px] h-[15px] sm:w-[98px] sm:h-[19px] md:w-[115px] md:h-[22px] lg:w-[136px] lg:h-[26px]">
                <Image
                  src={"/images/company/partner/kangwon.png"}
                  fill
                  alt="강원 창조 경제 혁신센터"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[48px] items-center justify-center">
            <div className="py-[6px] px-[13px] sm:py-[7px] sm:px-[24px] md:py-[9px] md:px-[28px] lg:py-[10px] lg:px-[23px]">
              <div className="relative w-[86px] h-[43px] sm:w-[110px] sm:h-[55px] md:w-[129px] md:h-[64px] lg:w-[153px] lg:h-[76px]">
                <Image
                  src={"/images/company/partner/kibo.png"}
                  fill
                  alt="kibo"
                />
              </div>
            </div>

            <div className="py-[21px] px-[20px] sm:py-[27px] sm:px-[33px] md:py-[31px] md:px-[38px] lg:py-[37px] lg:px-[36px]">
              <div className="relative w-[71px] h-[14px] sm:w-[91px] sm:h-[18px] md:w-[106px] md:h-[21px] lg:w-[127px] lg:h-[25px]">
                <Image
                  src={"/images/company/partner/kosme.png"}
                  fill
                  alt="KOSME"
                />
              </div>
            </div>

            <div className="py-[19px] px-[12px] sm:py-[24px] sm:px-[22px] md:py-[28px] md:px-[24px] lg:py-[33px] lg:px-[20px]">
              <div className="relative w-[88px] h-[20px] sm:w-[114px] sm:h-[25px] md:w-[133px] md:h-[30px] lg:w-[158px] lg:h-[35px]">
                <Image
                  src={"/images/company/partner/gyeonggi-startup-platform.png"}
                  fill
                  alt="경기 스타트업 플랫폼"
                />
              </div>
            </div>

            <div className="py-[22px] px-[26px] sm:py-[28px] sm:px-[40px] md:py-[33px] md:px-[47px] lg:py-[39px] lg:px-[47px]">
              <div className="relative w-[58] h-[11px] sm:w-[75px] sm:h-[14px] md:w-[87px] md:h-[16px] lg:w-[104px] lg:h-[19px]">
                <Image
                  src={"/images/company/partner/giftshow-biz.png"}
                  fill
                  alt="figtshow biz"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[48px] items-center justify-center">
            <div className="py-[20px] px-[20px] sm:py-[25px] sm:px-[34px] md:py-[30px] md:px-[38px] lg:py-[35px] lg:px-[36px]">
              <div className="relative w-[68px] h-[16px] sm:w-[88px] sm:h-[20px] md:w-[103px] md:h-[24px] lg:w-[123px] lg:h-[28px]">
                <Image
                  src={"/images/company/partner/gyeonggi-jop-foundation.png"}
                  fill
                  alt="경기도 일자리 재단"
                />
              </div>
            </div>

            <div className="py-[10px] px-[32px] sm:py-[12px] sm:px-[49px] md:py-[15px] md:px-[55px] lg:py-[17px] lg:px-[56px]">
              <div className="relative w-[48px] h-[33px] sm:w-[62px] sm:h-[42px] md:w-[72px] md:h-[49px] lg:w-[86px] lg:h-[58px]">
                <Image
                  src={"/images/company/partner/dream.png"}
                  fill
                  alt="꿈마루"
                />
              </div>
            </div>

            <div className="py-[5px] px-[12px] sm:py-[6px] sm:px-[23px] md:py-[10px] md:px-[26px] py-[8px] px-[21px]">
              <div className="relative w-[88px] h-[44px] sm:w-[113px] sm:h-[56px] md:w-[132px] md:h-[66px] lg:w-[157px] lg:h-[78px]">
                <Image
                  src={"/images/company/partner/etech-system.png"}
                  fill
                  alt="etech system"
                />
              </div>
            </div>
          </div>
        </div>
      </CompanyFeature>
    </div>
  );
};

export default CompanyPartner;
