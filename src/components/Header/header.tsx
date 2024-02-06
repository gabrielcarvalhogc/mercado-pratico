"use client"

import { ShoppingBasket } from '../Icons/ShoppingBasket';
import styles from './Header.module.scss';
import { ShoppingCart } from '../Icons/ShoppingCart';
import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import { MenuLinks } from './MenuLinks';

export function Header() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <ShoppingBasket/>
          <h1>Mercado prático</h1>
        </a>
        <button className={styles.cartButton} onClick={toggleCart}>
          <ShoppingCart/>
          <span>R$ 00,00</span>
        </button>
      </div>

      <MenuLinks/>

      {showCart && <Cart/>}
    </header>
  );
}
