import { IconButton, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Close';
import styles from './ProductModal.module.scss';
import { formatPrice } from '@/hooks/formatPrice';
import Image from 'next/image';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  preco: number;
  image: string;
  onAddToCart: () => void;
}

export function ProductModal({ open, onClose, title, description, preco, image, onAddToCart }: ModalProps) {
  return (
    <Modal 
      open={open} 
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className={styles.main}>
        <section className={styles.section}>
          <IconButton 
            aria-label='close' 
            className={styles.closebtn} 
            onClick={onClose}
            size='large'
          >
            <DeleteIcon/>
          </IconButton>
          <Image src={image} alt={title} width={500} height={500} />
          <div className={styles.container}>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{formatPrice(preco)}</h3>
            <IconButton onClick={onAddToCart}>Adicionar ao carrinho</IconButton>
          </div>
        </section>
      </div>
    </Modal>
  )
}