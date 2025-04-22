"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderProps {
  reverse?: boolean;
}

const Header = ({ reverse = false }: HeaderProps) => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // 50px 이상 스크롤 시 true
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 w-full flex justify-center ${
        scrolled ? "bg-[#fff]" : "bg-transparent"
      }`}
    >
      <div
        className={`w-full max-w-[1152px] px-[20px] py-[12px] flex justify-between items-center`}
      >
        <Image
          className="cursor-pointer"
          onClick={() => router.push("/")}
          src={
            reverse && !scrolled ? "/images/logo-white.svg" : "/images/logo.svg"
          }
          width={80}
          height={40}
          alt="logo"
        />
        <p
          onClick={() => router.push("/company")}
          className={`text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[120%] tracking-[-0.32px] cursor-pointer ${
            reverse && scrolled && "text-black"
          } ${reverse && !scrolled && "text-[#fff]"} ${
            !reverse && "text-black"
          }`}
        >
          회사 소개
        </p>
      </div>
    </div>
  );
};

export default Header;
