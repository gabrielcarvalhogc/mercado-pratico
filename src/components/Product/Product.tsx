import { ProductItemType } from '@/types/productItem';
import Image from 'next/image';
import styles from './Product.module.scss';
import { formatPrice } from '@/hooks/formatPrice';
import Link from 'next/link';

export function Product(product: ProductItemType) {

  return (
    <Link className={styles.container} href={`/productPage/${product.id}`}>
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
        <p className={styles.price}>{formatPrice(product.preco)}</p>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.description}>{product.description}</p>
      </div>
    </Link>
  )
}