import { ProductItemType } from '@/types/productItem';
import Image from 'next/image';
import styles from './Product.module.scss';
import { formatPrice } from '@/hooks/formatPrice';
import { Modal } from '@mui/material';
import { useState } from 'react';
import { ProductModal } from '../ProductModal/ProductModal';

interface ProductProps extends ProductItemType {
  onAddToCart: () => void;
}

export function Product({ title, preco, thumb, description, id, onAddToCart, image }: ProductProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles.div}>
        <div className={styles.container} onClick={handleOpen}>
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
        </div>
        <button className={styles.btn} onClick={onAddToCart}>
          <div className={styles.hor}></div>
          <div className={styles.ver}></div>
        </button>
      </div>
      <ProductModal
        open={open}
        onClose={handleClose}
        title={title}
        description={description}
        preco={preco}
        image={image}
        onAddToCart={onAddToCart}
      />
    </>
  )
}