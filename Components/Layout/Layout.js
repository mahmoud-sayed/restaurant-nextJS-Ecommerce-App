import React, { Fragment } from 'react';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';


const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;