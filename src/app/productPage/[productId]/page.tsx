"use client"

import { useParams, useRouter } from 'next/navigation';
import { Header } from '@/components/Header/header';
import { formatPrice } from '@/hooks/formatPrice';
import { ProductItemType } from '@/types/productItem';
import Image from 'next/image';
import styles from '../page.module.scss';
import { getProductById } from '@/hooks/getProductsById';
import { useCart } from '@/contexts/CartContext';

export default function Page() {
  const router = useRouter();
  const params = useParams<{ productId: string }>();
  const produto = getProductById(Number(params.productId)) as ProductItemType;
  const { addToCart } = useCart();

  const handleAddToCart = (produto: ProductItemType) => {
    addToCart({
      nome: produto.title,
      preco: produto.preco,
      quantidade: 1,
    });
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <button className={styles.backbtn} onClick={() => router.back()}>
          ⬅️ Voltar
        </button>
        <section className={styles.section}>
          <Image src={produto.image} alt={produto.title} width={500} height={500} />
          <div className={styles.container}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <h3>{formatPrice(produto.preco)}</h3>
            <button onClick={() => handleAddToCart(produto)}>Adicionar ao carrinho</button>
          </div>
        </section>
      </main>
    </>
  );
}
