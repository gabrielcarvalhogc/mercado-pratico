"use client"

import { ShoppingBasket } from './ShoppingBasket';
import styles from './Header.module.scss';
import { ShoppingCart } from './ShoppingCart';
import { useState } from 'react';

export function Header() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleLinkClick(index: number) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <ShoppingBasket/>
          <h1>Mercado prático</h1>
        </a>
        <button className={styles.cartButton}>
          <ShoppingCart/>
          <span>R$ 00,00</span>
        </button>
      </div>

      <ul className={styles.list}>
        {['Bebidas', 'Frios', 'Limpeza', 'Padaria', 'Feira', 'Doces'].map((category, index) => (
          <li key={index}>
            <a
              href="#"
              className={`${styles.link} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => handleLinkClick(index)}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
