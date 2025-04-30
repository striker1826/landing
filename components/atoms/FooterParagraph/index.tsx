import React from "react";

interface FooterParagraphProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
}

const FooterParagraph = ({
  text,
  fontSize = "14",
  fontWeight = "600",
  onClick = () => {},
}: FooterParagraphProps) => {
  return (
    <p
      onClick={onClick}
      className="text-[#7e7e7e] cursor-pointer text-[14px] leading-[128%] tracking-[-0.42px]"
      style={{ fontSize, fontWeight }}
    >
      {text}
    </p>
  );
};

export default FooterParagraph;
