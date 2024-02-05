import styles from './Cart.module.scss';

export function Cart() {
  
  return (
    <aside className={styles.aside}>
      <div className={styles.apresentation}>
        <span className={styles.pedido}>Seu pedido em</span>
        <h2 className={styles.title}>Mercado prático</h2>
        <p className={styles.text}>O supermercado do seu dia-a-dia</p>
      </div>

      <div className={styles.divisor}></div> 

      <div className={styles.produto}>
        <p className={styles.nome}>Nome do prudoto</p>
        <p className={styles.preco}>R$ 10,99</p>
        <button className={styles.remover}>Remover</button>
        <span className={styles.quantidade}>2</span>
      </div>

      <div className={styles.divisor}></div>

      <div className={styles.valor}>
        <div>
          <p className={styles.subtotal}>subtotal</p>
          <p className={styles.subtotal}>taxa de entrega</p>
          <p className={styles.total}>Total</p>
        </div>
        <div>
          <span className={styles.subtotal}>R$ 50,00</span>
          <span className={styles.subtotal}>R$ 11,99</span>
          <span className={styles.total}>R$ 61,99</span>
        </div>
      </div>
    </aside>
  )
}