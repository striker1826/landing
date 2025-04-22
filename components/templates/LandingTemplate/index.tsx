"use client";

import Download from "@/components/organisms/Download";
import FeatureBenefit from "@/components/organisms/FeatureBenefit";
import FeatureCoupon from "@/components/organisms/FeatureCoupon";
import FeatureEgg from "@/components/organisms/FeatureEgg";
import FeaturePlace from "@/components/organisms/FeaturePlace";
import FeatureReward from "@/components/organisms/FeatureReward";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Intro from "@/components/organisms/Intro";

const LandingTemplate = () => {
  return (
    <div className="min-w-[360px]">
      <Header />
      <Hero />
      <Intro />
      <FeaturePlace />
      <FeatureBenefit />
      <FeatureReward />
      <FeatureEgg />
      <FeatureCoupon />
      <Download />
      <Footer />
    </div>
  );
};

export default LandingTemplate;
