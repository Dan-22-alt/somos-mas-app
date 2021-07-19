import React from "react";
import HeaderComponent from "../epics/web-publica/header/HeaderComponent";
import FooterComponent from "../epics/web-publica/footer/FooterComponent";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <div>{children}</div>
      <FooterComponent />
    </>
  );
};

export default Layout;
