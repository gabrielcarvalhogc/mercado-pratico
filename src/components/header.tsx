import { ShoppingBasket } from './ShoppingBasket';
import styles from './Header.module.scss';
import { ShoppingCart } from './ShoppingCart';

export function Header() {
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
    </header>
  )
}