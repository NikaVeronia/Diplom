import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Nav.modules.css";

const Nav: React.FC = () => {
  return (
    <div className="container">
      <div className="logo">SneakMax</div>
      <div className="nav">
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
      <Link to="/basket" className="cart">
        Корзина 🛒
      </Link>
    </div>
  );
};

export default Nav;
