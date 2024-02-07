"use client"

import React, { ReactNode, createContext, useState, useContext } from "react";

interface CartProviderProps {
  children: ReactNode;
}

export type ProductProps = {
  nome: string;
  preco: number;
  quantidade: number;
};

interface CartContextProps {
  cartItems: ProductProps[];
  addToCart: (item: ProductProps) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export function useTotalValue() {
  const { cartItems } = useCart();
  const totalValue = cartItems.reduce((total, item) => total + item.preco, 0);
  return totalValue;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  const addToCart = (item: ProductProps) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
