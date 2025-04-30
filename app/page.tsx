import LandingTemplate from "@/components/templates/LandingTemplate";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "떨면뭐하니 - 실전 모의 면접 플랫폼",
  description:
    "기술 면접 준비, 떨지 말고 시작하세요. 실전처럼 연습하고 AI 피드백도 받아보세요.",
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
    title: "떨면뭐하니 - 실전 모의 면접 플랫폼",
    description:
      "기술 면접 준비, 떨지 말고 시작하세요. 실전처럼 연습하고 AI 피드백도 받아보세요.",
    url: "https://dmmhn-next-js.vercel.app/",
    siteName: "떨면뭐하니",
    images: [
      {
        url: "https://dmmhn-next-js.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "떨면뭐하니 대표 이미지",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "떨면뭐하니",
    description: "실전처럼 연습하고 AI 피드백도 받아보세요.",
    images: ["https://dmmhn-next-js.vercel.app/og-image.png"],
  },
};

export default function Home() {
  return <LandingTemplate />;
}
