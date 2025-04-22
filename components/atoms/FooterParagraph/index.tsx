import React from "react";

interface FooterParagraphProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
}

const FooterParagraph = ({
  text,
  fontSize = "14",
  fontWeight = "600",
}: FooterParagraphProps) => {
  return (
    <p
      className="text-[#7e7e7e] text-[14px] leading-[128%] tracking-[-0.42px]"
      style={{ fontSize, fontWeight }}
    >
      {text}
    </p>
  );
};

export default FooterParagraph;
