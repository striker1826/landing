import Image from "next/image";
import StoreBtn from "..";

interface AppStoreBtnProps {
  bg: string;
}

const AppStoreBtn = ({ bg }: AppStoreBtnProps) => {
  return (
    <StoreBtn
      bg={bg}
      onClick={() =>
        window.open(
          "https://apps.apple.com/us/app/%EC%B0%A8%EB%8D%95/id6443525283",
          "_blank"
        )
      }
    >
      <Image
        src={"/images/hero/apple-icon.svg"}
        width={20}
        height={20}
        alt="apple-store"
      />
      <p className="text-black text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[600] leading-[128%] tracking-[-0.42px]">
        App Store
      </p>
    </StoreBtn>
  );
};

export default AppStoreBtn;
