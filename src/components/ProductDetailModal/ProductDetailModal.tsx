import React from "react";
import "./ProductDetailModal.modules.css";
import { useCart } from "../../CartContext";
import { useNavigate } from "react-router-dom"; 

type ProductDetailModalProps = {
  product: {
    id: number;
    vendorСode: string;
    inStock: number | string;
    title: string;
    description: string;
    stars: number;
    imgUrl: string;
    sizes: number[];
    price: number | string;
    oldPrice: number | string;
    gender: string;
    color: string;
    compound: string;
    country: string;
  };
  onClose: () => void;
};

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      imgUrl: product.imgUrl,
    });
    onClose();
  };
  const navigate = useNavigate(); // Хук для управления навигацией

  const handleClose = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={handleClose}>
          ✖
        </button>
        <img src={product.imgUrl} alt={product.title} className="modal-image" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>Цена:</strong> {product.price.toLocaleString()} ₽</p>
        {product.oldPrice && (
          <p>
            <strong>Старая цена:</strong>{" "}
            <span className="old-price">{product.oldPrice.toLocaleString()} ₽</span>
          </p>
        )}
        <p><strong>Код товара:</strong> {product.vendorСode}</p>
        <p><strong>В наличии:</strong> {product.inStock}</p>
        <p><strong>Цвет:</strong> {product.color}</p>
        <p><strong>Пол:</strong> {product.gender}</p>
        <p><strong>Размеры:</strong> {product.sizes.join(", ")}</p>
        <p><strong>Состав:</strong> {product.compound}</p>
        <p><strong>Страна:</strong> {product.country}</p>
        <button onClick={handleAddToCart}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
