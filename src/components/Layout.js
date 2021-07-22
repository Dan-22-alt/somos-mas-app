import React from "react";
import HeaderComponent from "../epics/web-publica/header/HeaderComponent";
import FooterComponent from "../epics/web-publica/footer/FooterComponent";

const Layout = ({ children, organizationData }) => {
  return (
    <>
      <HeaderComponent organizationData={organizationData}/>
      <div>{children}</div>
      <FooterComponent organizationData={organizationData}/>
    </>
  );
};

export default Layout;
