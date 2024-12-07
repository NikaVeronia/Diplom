import React from "react";
import { useCart } from "../../CartContext";
import { useNavigate } from "react-router-dom"; // Новый хук для навигации
import "./CartModal.modules.css";

const CartModal: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate(); // Хук для управления навигацией

  const handleClose = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        {/* Кнопка закрытия */}
        <button className="modal-close" onClick={handleClose}>
          ✖
        </button>

        <h2>Ваша корзина</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Корзина пуста</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.imgUrl} alt={item.title} width="50" />
                <span>{item.title}</span>
                <span>{item.price} ₽</span>
                <span>Кол-во: {item.quantity}</span>
                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartModal;
