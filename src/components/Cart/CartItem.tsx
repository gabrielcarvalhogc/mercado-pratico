import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/hooks/formatPrice";
import styles from "./CartItem.module.scss";

interface CartItemProps {
  item: {
    quantidade: number
    nome: string
    preco: number
  }
}

export function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const handleIncreaseQuantity = () => {
    increaseQuantity(item);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(item);
  };

  const handleRemoveItem = () => {
    removeItem(item);
  };

  return (
    <li className={styles.lista}>
      <p className={styles.nome}>{item.nome}</p>
      <p className={styles.preco}>{formatPrice(item.preco)}</p>
      <button className={styles.remover} onClick={handleRemoveItem}>
        Remover
      </button>
      <div className={styles.quantidade}>
        <button onClick={handleDecreaseQuantity}>-</button>
        <span>{item.quantidade}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <div className={styles.divisor}></div>
    </li>
  );
}