import React from 'react';
import './Header.modules.css';

import HeroSection from '../HeroSection/HeroSection';
import Nav from '../Nav/Nav';
import  './Header.modules.css';

const Header: React.FC = () => {
  return (
    <header className={`header`}>
      <div className={`topheader`}>
        <Nav />
        <a href={`basket`}  className={`cart`}>Корзина 🛒</a>
      </div>
      <HeroSection />
    </header>
  );
};

export default Header;
