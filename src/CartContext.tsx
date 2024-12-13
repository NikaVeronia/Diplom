import React, { createContext, useContext, useState, useEffect } from "react";

// Типы данных для товара в корзине
type CartItem = {
  id: number;
  title: string;
  price: number|string;
  imgUrl: string;
  quantity: number; // Количество добавленных товаров
  size?: number; 
  
};

type CartContextProps = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

// Провайдер корзины
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Инициализация из localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Сохранение изменений в localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Добавление товара в корзину
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Если товар уже есть, увеличиваем количество
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // Если товара нет, добавляем с quantity = 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Удаление товара из корзины
  const removeFromCart = (id: number) => {
    setCartItems((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  // Очистка корзины
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования контекста корзины
export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart должен использоваться внутри CartProvider");
  }
  return context;
};
