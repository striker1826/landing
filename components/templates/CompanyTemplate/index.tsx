import CompanyHero from "@/components/organisms/CompanyHero";
import CompanyHistory from "@/components/organisms/CompanyHistory";
import CompanyIndicators from "@/components/organisms/CompanyIndicators";
import CompanyIntro from "@/components/organisms/CompanyIntro";
import CompanyPartner from "@/components/organisms/CompanyPartner";

const CompanyTemplate = () => {
  return (
    <>
      <CompanyHero />
      <CompanyIntro />
      <CompanyIndicators />
      <CompanyHistory />
      <CompanyPartner />
    </>
  );
};

export default CompanyTemplate;
