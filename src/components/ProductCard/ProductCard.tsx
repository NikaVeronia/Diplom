import React, { useState } from "react";
import "./ProductCard.modules.css";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

type ProductCardProps = {
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
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      imgUrl: product.imgUrl,
    });
  };


  return (
    <>
    
      <div className="card " onClick={openModal}>
     <div className="options">
     <Link  to={`/product/${product.id}`} state={{ product }} className="show">
  <button className="add">
    <img src="src\icon\Смотреть товар.svg" alt="show sneakers" />
  </button>
</Link>
          <button className="add"onClick={handleAddToCart}>
            <img src="src\icon\Добавить в корзину.svg" alt="add to basket" />
          </button>
        </div>
        <img src={product.imgUrl} alt={product.title} className="image" />
        <h3 className="name">{product.title}</h3>
        <p className="price">{product.price.toLocaleString()} ₽</p>
      </div>

      {isModalOpen && (
        <ProductDetailModal product={product} onClose={closeModal} />
      )}
    </>
  );
};

export default ProductCard;
