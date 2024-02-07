import { ProductItemType } from '@/types/productItem';
import Image from 'next/image';
import styles from './Product.module.scss';
import { formatPrice } from '@/hooks/formatPrice';
import Link from 'next/link';

interface ProductProps extends ProductItemType {
  onAddToCart: () => void;
}

export function Product({ title, preco, thumb, description,id, onAddToCart }: ProductProps) {

  return (
    <div className={styles.div}>
      <Link className={styles.container} href={`/productPage/${id}`}>
        <div className={styles.view}>
          <Image
            src={thumb}
            alt={description}
            width={200}
            height={200}
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.price}>{formatPrice(preco)}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
      <button className={styles.btn} onClick={onAddToCart}>
        <div className={styles.hor}></div>
        <div className={styles.ver}></div>
      </button>
    </div>
  )
}