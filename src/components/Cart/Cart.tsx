import { useCart, useTotalValue } from '@/contexts/CartContext';
import styles from './Cart.module.scss';
import { formatPrice } from '@/hooks/formatPrice';

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
      </div>

      <div className={styles.divisor}></div>
      <ul className={styles.produto}>
        {cartItems.map((item, index) => (
          <li key={index}>
            <p className={styles.nome}>{item.nome}</p>
            <p className={styles.preco}>{formatPrice(item.preco)}</p>
            <button className={styles.remover}>Remover</button>
            <span className={styles.quantidade}>{item.quantidade}</span>
            <div className={styles.divisor}></div>
          </li>
        ))}
      </ul>

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