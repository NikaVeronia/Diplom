import React from 'react';
import './Header.modules.css';

import HeroSection from '../HeroSection/HeroSection';
import Nav from '../Nav/Nav';
import  './Header.modules.css';

type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={`header`}>
      <div className={`topheader`}>
        < Nav />
        <hr />
        </div>
        <div >
      <HeroSection className='heroSection' />
      </div>
    </header>
  );
};

export default Header;
