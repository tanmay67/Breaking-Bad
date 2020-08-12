import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <div className="text-center mt-4">
      <img
        src={logo}
        alt="logo"
        style={{
          width: '200px',
        }}
      />
    </div>
  );
};

export default Header;
