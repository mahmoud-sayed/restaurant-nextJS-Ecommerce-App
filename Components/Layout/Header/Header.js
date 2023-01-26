import React, { Fragment } from 'react';
import Featured from './Featured/Featured';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <Fragment>
      <NavBar />
      <Featured />
    </Fragment>
  );
};

export default Header;