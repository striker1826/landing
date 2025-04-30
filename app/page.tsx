import LandingTemplate from "@/components/templates/LandingTemplate";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "차덕 | 드라이빙 플랫폼",
  description: "운전자를 위한 보상형 드라이빙 여행 앱",
  keywords: [
    "리워드",
    "리워드앱",
    "앱테크",
    "드라이브코스",
    "드라이브",
    "차덕후",
    "차덕",
    "차덕앱",
    "여행",
    "여행앱",
    "여행어플",
    "맛집앱",
    "주차앱",
    "주차어플",
    "주차가능카페",
    "주차가능맛집",
  ],
  openGraph: {
    title: "차덕 | 드라이빙 플랫폼",
    description: "운전자를 위한 보상형 드라이빙 여행 앱",
    images: [
      {
        url: "/thum_img.png",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return <LandingTemplate />;
}
