"use client"

import { ShoppingBasket } from '../Icons/ShoppingBasket';
import styles from './Header.module.scss';
import { ShoppingCart } from '../Icons/ShoppingCart';
import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import { MenuLinks } from './MenuLinks';
import { useTotalValue } from '@/contexts/CartContext';
import { formatPrice } from '@/hooks/formatPrice';
import { Drawer } from "@mui/material";

export function Header() {
  const cartValue = useTotalValue();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <ShoppingBasket/>
          <h1>Mercado prático</h1>
        </a>
        <button
          className={styles.cartButton}
          onClick={toggleDrawer(true)}
          id="cartButton"
        >
          <ShoppingCart/>
          <span>{formatPrice(cartValue)}</span>
        </button>
      </div>

      <MenuLinks/>

      <Drawer 
        open={open} 
        onClose={toggleDrawer(false)}
        anchor='right'
      >
        {<Cart/>}
      </Drawer>
    </header>
  );
}
