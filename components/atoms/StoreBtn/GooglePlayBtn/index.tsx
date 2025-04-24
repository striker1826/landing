import Image from "next/image";
import StoreBtn from "..";

const GooglePlayBtn = ({ bg }: { bg: string }) => {
  return (
    <StoreBtn
      bg={bg}
      onClick={() =>
        window.open(
          "https://play.google.com/store/apps/details?id=com.yozmpeople.chaple_app&hl=ko",
          "_blank"
        )
      }
    >
      <Image
        src={"/images/hero/googleplay-icon.svg"}
        width={20}
        height={20}
        alt="googleplay"
      />
      <p className="text-black text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[500] leading-[128%] tracking-[-0.42px]">
        Google Play
      </p>
    </StoreBtn>
  );
};

export default GooglePlayBtn;
