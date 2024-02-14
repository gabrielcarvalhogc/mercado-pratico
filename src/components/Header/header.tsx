"use client"

import { ShoppingBasket } from '../Icons/ShoppingBasket';
import styles from './Header.module.scss';
import { ShoppingCart } from '../Icons/ShoppingCart';
import { useEffect, useState } from 'react';
import { Cart } from '../Cart/Cart';
import { MenuLinks } from './MenuLinks';
import { useTotalValue } from '@/contexts/CartContext';
import { formatPrice } from '@/hooks/formatPrice';

export function Header() {
  const [showCart, setShowCart] = useState(false);
  const [prevCartValue, setPrevCartValue] = useState(0);
  const cartValue = useTotalValue();

  const toggleCart = () => {
    setShowCart(!showCart);
  }

  useEffect(() => {
    if (cartValue !== prevCartValue) {
      document.getElementById('cartButton')?.classList.add(styles.swing);

      setTimeout(() => {
        document.getElementById('cartButton')?.classList.remove(styles.swing);
      }, 500);

      setPrevCartValue(cartValue);
    }
  }, [cartValue, prevCartValue]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <ShoppingBasket/>
          <h1>Mercado prático</h1>
        </a>
        <button 
          className={styles.cartButton} 
          onClick={toggleCart} 
          id="cartButton"
        >
          <ShoppingCart/>
          <span>{formatPrice(cartValue)}</span>
        </button>
      </div>

      <MenuLinks/>

      {showCart && <Cart/>}
    </header>
  );
}
