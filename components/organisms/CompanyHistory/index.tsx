import CompanyHistoryParagraph from "@/components/atoms/CompanyHistoryParagraph";
import CompanyFeature from "@/components/molecules/CompanyFeature";
import Image from "next/image";
import React from "react";

const CompanyHistory = () => {
  return (
    <div className="py-[80px] bg-[#2D2D2D] w-full px-[32px] sm:py-[128px] md:py-[180px] lg:py-[220px]">
      <CompanyFeature
        reverse
        subText="우리의 연혁"
        mainText={
          <>
            활발한 움직임으로
            <br />새 역사를 쓰고자 합니다
          </>
        }
      >
        <div className="w-full flex justify-start">
          {/* mobile */}
          <div className="flex sm:hidden w-full flex justify-center">
            <div className="max-w-[287px] flex flex-col">
              <div className="w-full flex gap-[16px] justify-start items-start">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={"/images/company/history/circle.svg"}
                    width={12}
                    height={12}
                    alt="stepper circle"
                  />
                  <div className="h-[204px] w-[2px] bg-[#5B5461]" />
                </div>

                <div>
                  <p className="text-[#fff] text-[20px] font-[700] leading-[10px] tracking-[-0.6px]">
                    2025
                  </p>
                  <div className="w-full mt-[28px]">
                    <div className="flex flex-col gap-[24px]">
                      <CompanyHistoryParagraph
                        month="4월"
                        description={
                          <>
                            강원창조경제혁신센터 관광 콘텐츠
                            <br /> 지원사업 선정
                          </>
                        }
                      />
                      <CompanyHistoryParagraph
                        month="2월"
                        description={<>차덕 리워드 서비스 도입</>}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex gap-[16px] justify-center items-start">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={"/images/company/history/circle.svg"}
                    width={12}
                    height={12}
                    alt="stepper circle"
                  />
                  <div className="h-[300px] w-[2px] bg-[#5B5461]" />
                </div>

                <div>
                  <p className="text-[#fff] text-[20px] font-[700] leading-[10px] tracking-[-0.6px]">
                    2024
                  </p>
                  <div className="w-full mt-[28px]">
                    <div className="flex flex-col gap-[16px]">
                      <CompanyHistoryParagraph
                        month="12월"
                        description={<>광운대산학협력단 광운대 총장 표창</>}
                      />
                      <CompanyHistoryParagraph
                        month="11월"
                        description={<>벤처기업 인증 (혁신성장형)</>}
                      />
                      <CompanyHistoryParagraph
                        month="9월"
                        description={<>&nbsp;&nbsp;차덕 정식 버전 출시</>}
                      />
                      <CompanyHistoryParagraph
                        month="6월"
                        description={
                          <>&nbsp;&nbsp;W스타트업 어워즈 사업화 지원 선정</>
                        }
                      />
                      <CompanyHistoryParagraph
                        month="4월"
                        description={
                          <>&nbsp;&nbsp;한국관광공사 관광벤처사업 선정</>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex gap-[16px] justify-start items-start">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={"/images/company/history/circle.svg"}
                    width={12}
                    height={12}
                    alt="stepper circle"
                  />
                </div>

                <div>
                  <p className="text-[#fff] text-[20px] font-[700] leading-[10px] tracking-[-0.6px]">
                    2023
                  </p>
                  <div className="w-full mt-[28px]">
                    <div className="flex flex-col gap-[16px]">
                      <CompanyHistoryParagraph
                        month="6월"
                        description={<>여성벤처 창업 케어 프로그램 선정</>}
                      />
                      <CompanyHistoryParagraph
                        month="5월"
                        description={<>예비창업패키지 우수기업 선정</>}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* pc */}
          <div className="hidden sm:flex flex justify-center w-full">
            <div className="max-w-[1200px]">
              <div className="w-full flex flex-col items-start">
                <div className="flex gap-[40px] items-start">
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      className="mt-[4px]"
                      src={"/images/company/history/circle.svg"}
                      width={12}
                      height={12}
                      alt="stepper circle"
                    />
                    <div className="h-[200px] w-[2px] bg-[#5B5461]" />
                  </div>
                  <div className="flex gap-[80px] md:gap-[130px]">
                    <p className="text-[#fff] text-[20px] sm:text-[32px] md:text-[40px] font-[700] leading-[20px] tracking-[-0.6px]">
                      2025
                    </p>
                    <div className="flex flex-col gap-[28px]">
                      <CompanyHistoryParagraph
                        month="4월"
                        description={
                          <>강원창조경제혁신센터 관광 콘텐츠 지원사업 선정</>
                        }
                      />
                      <CompanyHistoryParagraph
                        month="2월"
                        description={<>차덕 리워드 서비스 도입</>}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-[40px] items-start">
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute top-[0px] left-1/2 -translate-x-1/2 h-[10px] w-[2px] bg-[#5B5461]" />
                    <Image
                      className="mt-[4px] z-10"
                      src={"/images/company/history/circle.svg"}
                      width={12}
                      height={12}
                      alt="stepper circle"
                    />
                    <div className="h-[350px] w-[2px] bg-[#5B5461]" />
                  </div>
                  <div className="flex gap-[80px] md:gap-[130px]">
                    <p className="text-[#fff] text-[20px] sm:text-[32px] md:text-[40px] font-[700] leading-[20px] tracking-[-0.6px]">
                      2024
                    </p>
                    <div className="flex flex-col gap-[28px]">
                      <CompanyHistoryParagraph
                        month="12월"
                        description={<>광운대산학협력단 광운대 총장 표창</>}
                      />
                      <CompanyHistoryParagraph
                        month="11월"
                        description={<>벤처기업 인증 (혁신성장형)</>}
                      />
                      <CompanyHistoryParagraph
                        month="9월"
                        description={<>&nbsp;&nbsp;차덕 정식 버전 출시</>}
                      />
                      <CompanyHistoryParagraph
                        month="6월"
                        description={
                          <>&nbsp;&nbsp;W스타트업 어워즈 사업화 지원 선정</>
                        }
                      />
                      <CompanyHistoryParagraph
                        month="4월"
                        description={
                          <>&nbsp;&nbsp;한국관광공사 관광벤처사업 선정</>
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-[40px] items-start">
                  <div className="relative flex flex-col justify-center items-center">
                    <div className="absolute top-[0px] left-1/2 -translate-x-1/2 h-[10px] w-[2px] bg-[#5B5461]" />
                    <Image
                      className="mt-[4px] z-10"
                      src={"/images/company/history/circle.svg"}
                      width={12}
                      height={12}
                      alt="stepper circle"
                    />
                  </div>
                  <div className="flex gap-[80px] md:gap-[130px]">
                    <p className="text-[#fff] text-[20px] sm:text-[32px] md:text-[40px] font-[700] leading-[20px] tracking-[-0.6px]">
                      2023
                    </p>
                    <div className="flex flex-col gap-[28px]">
                      <CompanyHistoryParagraph
                        month="6월"
                        description={<>여성벤처 창업 케어 프로그램 선정</>}
                      />
                      <CompanyHistoryParagraph
                        month="5월"
                        description={<>예비창업패키지 우수기업 선정</>}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CompanyFeature>
    </div>
  );
};

export default CompanyHistory;
