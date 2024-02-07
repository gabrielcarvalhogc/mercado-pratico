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
  increaseQuantity: (item: ProductProps) => void;
  decreaseQuantity: (item: ProductProps) => void;
  removeItem: (item: ProductProps) => void
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
  const totalValue = cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);
  return totalValue;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  const addToCart = (item: ProductProps) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.nome === item.nome);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantidade += item.quantidade;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const increaseQuantity = (item: ProductProps) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.nome === item.nome ? { ...cartItem, quantidade: cartItem.quantidade + 1 } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item: ProductProps) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.nome === item.nome && cartItem.quantidade > 1
        ? { ...cartItem, quantidade: cartItem.quantidade - 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const removeItem = (item: ProductProps) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.nome !== item.nome);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
