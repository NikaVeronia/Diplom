import React from 'react';
import './HeroSection.modules.css';

const HeroSection: React.FC = () => {
  return (
    <section className={`hero`}>
      <h1 className={`title`}>
        Кроссовки известных брендов с доставкой по России и СНГ
      </h1>
      <p className={`subtitle`}>
        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok. Сомневаетесь? Мы предложим лучшие цены!
      </p>
      <a href="/#catalog" className={`button`}>
        Перейти к покупкам
      </a>
    </section>
  );
};

export default HeroSection;
