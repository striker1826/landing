import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import React from "react";

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header reverse />
      {children}
      <Footer />
    </>
  );
}
