import React, { useState } from "react";
import "./ProductDetailModal.modules.css";
import { useCart } from "../../CartContext";
import { useNavigate } from "react-router-dom";

type ProductDetailModalProps = {
  product: {
    id: number;
    vendorCode?: string; 
    inStock: number | string;
    title: string;
    description: string;
    stars: number;
    imgUrl: string;
    sizes: number[]; 
    price: number | string;
    oldPrice?: number | string;
    gender: string;
    color: string;
    compound: string;
    country: string;
  };
  onClose: () => void;
};

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Пожалуйста, выберите размер перед добавлением в корзину.");
      return;
    }
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      imgUrl: product.imgUrl,
      size: selectedSize, // Учет размера при добавлении в корзину
    });
    onClose(); // Закрытие модального окна
  };

  const handleNavigateBack = (e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращение закрытия окна при переходе назад
    navigate(-1); // Возврат на предыдущую страницу
  };

  const handleSizeClick = (size: number) => {
    setSelectedSize(size); // Устанавливаем выбранный размер
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleNavigateBack}>
          ✖
        </button>
        <img src={product.imgUrl} alt={product.title} className="modal-image" />
        <div className="artTovar">
          <p>
            <strong>Код товара:</strong> {product.vendorCode}
          </p>
          <p>
            <strong>В наличии:</strong> {product.inStock}
          </p>
        </div>
        <h2>{product.title}</h2>
        <div className="rating">★★★★★</div>
        <label>Выберите размер:</label>
        <div className="sizeS">
          {[35, 36, 37, 38, 39, 40, 41, 42, 43].map((size) => (
            <button
              key={size}
              className={`sizeSButton ${selectedSize === size ? "active" : ""}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="price">
          <p>
            <strong>Цена:</strong> {Number(product.price).toLocaleString()} ₽
          </p>
          {product.oldPrice && (
            <p>
              <strong>Старая цена:</strong>{" "}
              <span className="old-price">{Number(product.oldPrice).toLocaleString()} ₽</span>
            </p>
          )}
        </div>
        <button className="buttonAdd" onClick={handleAddToCart}>
          Заказать
        </button>
        <ul className="delivery-info">
          <li>Бесплатная доставка до двери</li>
          <li>Оплата заказа при получении</li>
          <li>Обмен в течение двух недель</li>
        </ul>

        <div className="attrCont">
          <div className="description">
            <h1>Описание</h1>
            <p>{product.description}</p>
          </div>
          <div className="attrBlock">
            <h1>Характеристики</h1>
            <p>
              <strong>Пол:</strong> {product.gender}
            </p>
            <p>
              <strong>Цвет:</strong> {product.color}
            </p>
            <p>
              <strong>Состав:</strong> {product.compound}
            </p>
            <p>
              <strong>Страна:</strong> {product.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
