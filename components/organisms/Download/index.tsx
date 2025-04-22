import AppStoreBtn from "@/components/atoms/StoreBtn/AppStoreBtn";
import GooglePlayBtn from "@/components/atoms/StoreBtn/GooglePlayBtn";

const Download = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-[72px] sm:py-[84px] md:py-[142px] lg:py-[208px]"
      style={{
        background:
          "url('/images/download/bg.png') lightgray center / cover no-repeat",
      }}
    >
      <p className="text-[#fff] text-center text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-[700] leading-[136%] tracking-[-0.84px]">
        차덕과 함께
        <br />
        떠날 준비 되었나요?
      </p>
      <p className="mt-[12px] text-[#a2a2a2] text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-[600] leading-[128%] tracking-[-0.42px]">
        지금 다운로드 해보세요!
      </p>

      <div className="w-full mt-[32px] flex gap-[8px] sm:gap-[12px] md:gap-[20px] justify-center items-center">
        <AppStoreBtn bg="#fff" />
        <GooglePlayBtn bg="#fff" />
      </div>
    </div>
  );
};

export default Download;
