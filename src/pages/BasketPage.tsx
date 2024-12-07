import React from 'react';
import CartModal from '../components/Cart/CartModal';

const BasketPage: React.FC = () => {
  return (
    <div>
      <h1>Корзина</h1>
      <p>Здесь будет отображаться содержимое вашей корзины.</p>
      <CartModal />
    </div>
  );
};

export default BasketPage;
