"use client"

import { ShoppingBasket } from '../Icons/ShoppingBasket';
import styles from './Header.module.scss';
import { ShoppingCart } from '../Icons/ShoppingCart';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cart } from '../Cart/Cart';

export function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  function switchLinks(category: string) {
    return `#${category}`;
  }

  const toggleCart = () => {
    setShowCart(!showCart);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <ShoppingBasket/>
          <h1>Mercado prático</h1>
        </a>
        <button className={styles.cartButton} onClick={toggleCart}>
          <ShoppingCart/>
          <span>R$ 00,00</span>
        </button>
      </div>

      <ul className={styles.list}>
        {['Bebidas', 'Frios', 'Higiene', 'Padaria', 'Feira'].map((category, index) => (
          <li key={index}>
            <Link
              href={switchLinks(category)}
              className={`${styles.link} ${activeSection === category ? styles.active : ''}`}
              >
              {category}
            </Link>
          </li>
        ))}
      </ul>
      {showCart && <Cart/>}
    </header>
  );
}
