import React from "react";
import { useLocation } from "react-router-dom";
import ProductDetailModal from "../components/ProductDetailModal/ProductDetailModal";

const DetailPage: React.FC = () => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div>
      <ProductDetailModal product={product} onClose={() => {}} />
    </div>
  );
};

export default DetailPage;
