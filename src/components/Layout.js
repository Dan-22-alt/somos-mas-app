import React from 'react';
import FooterComponent from '../epics/web-publica/footer/FooterComponent';
import HeaderComponent from '../epics/web-publica/header/HeaderComponent';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
