import Feature from "@/components/molecules/Feature";
import Image from "next/image";

const FeatureCoupon = () => {
  return (
    <div className="flex flex-col py-[80px]">
      <Feature
        mainText={
          <>
            획득한 포인트로
            <br />
            기프티콘과 쿠폰을 구매해요
          </>
        }
        subText="포인트로 구매하기기"
      >
        <div className="w-full mt-[62px] sm:flex">
          {/* mobile */}
          <div className="sm:hidden">
            <div className="flex justify-center items-center gap-[24px]">
              <Image
                src={"/images/featureCoupon/coffee.svg"}
                width={168}
                height={168}
                alt="coffee image"
              />
              <Image
                src={"/images/featureCoupon/iceCream.svg"}
                width={168}
                height={168}
                alt="iceCream image"
              />
            </div>
            <div className="mt-[24px] flex justify-center items-center gap-[24px]">
              <Image
                src={"/images/featureCoupon/naverCoin.svg"}
                width={168}
                height={168}
                alt="coffee image"
              />
              <Image
                src={"/images/featureCoupon/chicken.svg"}
                width={168}
                height={168}
                alt="chicken image"
              />
            </div>
          </div>

          {/* pc */}
          <div className="hidden sm:flex justify-center items-center gap-[24px]">
            <Image
              src={"/images/featureCoupon/coffee.svg"}
              width={200}
              height={200}
              alt="coffee image"
            />
            <Image
              src={"/images/featureCoupon/iceCream.svg"}
              width={200}
              height={200}
              alt="iceCream image"
            />
            <Image
              src={"/images/featureCoupon/naverCoin.svg"}
              width={200}
              height={200}
              alt="naverCoin image"
            />
            <Image
              src={"/images/featureCoupon/chicken.svg"}
              width={200}
              height={200}
              alt="chicken image"
            />
          </div>
        </div>
      </Feature>
    </div>
  );
};

export default FeatureCoupon;
