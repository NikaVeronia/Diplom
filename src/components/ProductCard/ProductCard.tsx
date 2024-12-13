import React, { useState } from "react";
import "./ProductCard.modules.css";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";

type ProductCardProps = {
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
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  
const navigate = useNavigate(); // Инициализация хука

const handleAddToCart = (e: React.MouseEvent) => {
  e.stopPropagation(); // Предотвращаем срабатывание onClick родителя

  addToCart({
    id: product.id,
    title: product.title,
    price: product.price,
    imgUrl: product.imgUrl,
  });

  navigate("/basket"); // Переход на страницу корзины
};

  return (
    <>
      <div className="card" onClick={openModal}>
        <div className="options">
          <Link to={`/product/${product.id}`} state={{ product }} className="show">
            <button className="add">
              <img src="/src/icon/show.svg" alt="show sneakers" />
            </button>
          </Link>
          <button className="add" onClick={handleAddToCart}>
            <img src="/src/icon/add-to-basket.svg" alt="add to basket" />
          </button>
        </div>
        <img src={product.imgUrl} alt={product.title} className="image" />
        <h3 className="name">{product.title}</h3>
        <p className="price">{Number(product.price).toLocaleString()} ₽</p>
      </div>

      {isModalOpen && (
        <ProductDetailModal product={product} onClose={closeModal} />
      )}
    </>
  );
};

export default ProductCard;
