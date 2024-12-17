import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./FooterNav.modules.css";

const FooterNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <div className="logo">SneakMax</div>

      {/* Иконка бургера */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      {/* Навигация */}
      <div className={`footnav ${menuOpen ? "open" : ""}`}>
        <ScrollLink to="catalog" smooth={true} duration={500} offset={-50}>
          Каталог
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} offset={-50}>
          О нас
        </ScrollLink>
        <ScrollLink to="quiz" smooth={true} duration={500} offset={-50}>
          Подбор товара
        </ScrollLink>
        <ScrollLink to="comand" smooth={true} duration={500} offset={-50}>
          Наша команда
        </ScrollLink>
        <ScrollLink to="delivery" smooth={true} duration={500} offset={-50}>
          Доставка и оплата
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} offset={-50}>
          Контакты
        </ScrollLink>
      </div>

      {/* Корзина */}
      <Link to="/basket" className="cart">
        Корзина 🛒
      </Link>
    </div>
  );
};

export default FooterNav;
