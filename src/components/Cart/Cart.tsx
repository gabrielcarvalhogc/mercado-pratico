import { useCart, useTotalValue } from '@/contexts/CartContext';
import styles from './Cart.module.scss';
import { formatPrice } from '@/hooks/formatPrice';
import { CartItem } from './CartItem';
import { CommentsField } from '../CommentsField/CommentsField';

export function Cart() {
  const { cartItems } = useCart();
  const totalValue = useTotalValue();
  const taxaEntrega = 7.99;
  const total = totalValue + taxaEntrega;

  return (
    <aside className={styles.aside}>
      <div className={styles.apresentation}>
        <span className={styles.pedido}>Seu pedido em</span>
        <h2 className={styles.title}>Mercado prático</h2>
        <p className={styles.text}>O supermercado do seu dia-a-dia</p>
        <div className={styles.divisor}></div>
      </div>

      <ul className={styles.produto}>
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item}/>
        ))}
      </ul>

      <CommentsField/>
      
      <div className={styles.valor}>
        <div>
          <p className={styles.subtotal}>subtotal</p>
          <p className={styles.subtotal}>taxa de entrega</p>
          <p className={styles.total}>Total</p>
        </div>
        <div>
          <span className={styles.subtotal}>{formatPrice(totalValue)}</span>
          <span className={styles.subtotal}>{formatPrice(taxaEntrega)}</span>
          <span className={styles.total}>{formatPrice(total)}</span>
        </div>
      </div>
    </aside>
  )
}