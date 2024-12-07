import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import Basket from '../pages/BasketPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={<MainPage />} />
      
      {/* Страница деталей товара */}
      <Route path="/product/:id" element={<DetailPage />} />
      
      {/* Корзина */}
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};

export default AppRoutes;
