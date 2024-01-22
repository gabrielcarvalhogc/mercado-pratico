import { ProductItemType } from '@/types/productItem';
import Image from 'next/image';
import styles from './Product.module.scss';

export function Product(product: ProductItemType) {
  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <Image
          src={product.thumb}
          alt={product.description}
          width={200}
          height={200}
          className={styles.img}
        />
        <button className={styles.btn}>
          <div className={styles.hor}></div>
          <div className={styles.ver}></div>
        </button>
      </div>
      <div className={styles.info}>
        <p className={styles.price}>{product.preco}</p>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.description}>{product.description}</p>
      </div>
    </div>
  )
}