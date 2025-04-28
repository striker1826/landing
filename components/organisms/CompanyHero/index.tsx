const CompanyHero = () => {
  return (
    <div
      className={`py-[288px] sm:py-[300px] md:py-[352px] lg:py-[410px] flex justify-center items-center bg-[url('/images/company/hero/bg.svg')] sm:bg-[url('/images/company/hero/pc-bg.svg')] lg:bg-[url('/images/company/hero/pc-lg-bg.svg')] bg-[lightgray] bg-center bg-cover bg-no-repeat`}
    >
      <p className="sm:hidden text-[#fff] text-center text-[32px] font-[700] leading-[136%] tracking-[-0.96px]">
        요즘 사람들이
        <br /> 겪는 문제를
        <br /> 요즘 트렌드에 맞게
        <br /> 해결합니다
      </p>

      <p className="hidden sm:block text-[#fff] text-center sm:text-[40px] md:text-[48px] lg:text-[64px] font-[700] leading-[136%] tracking-[-0.96px]">
        요즘 사람들이 겪는 문제를
        <br /> 요즘 트렌드에 맞게
        <br /> 해결합니다
      </p>
    </div>
  );
};

export default CompanyHero;
