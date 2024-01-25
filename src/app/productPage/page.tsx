import { Header } from "@/components/Header/header";
import { formatPrice } from "@/hooks/formatPrice";
import { ProductItemType } from "@/types/productItem";
import Image from "next/image";
import styles from './page.module.scss';

interface ProductPageProps {
  product: ProductItemType
}

export default function Page() {

  const produto = {
    "preco": 3.90,
    "title": "Refrigerante de cola",
    "description": "Garrafa 290ml",
    "thumb": "/products/drinks/refrigerante-thumb.jpeg",
    "image": "/products/drinks/refrigerante.jpeg",
    "category": "bebidas",
    "id": 10
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <button className={styles.backbtn}>⬅️ Voltar</button>
        <section className={styles.section}>
          <Image
            src={produto.image}
            alt={produto.title}
            width={500}
            height={500}
          />
          <div className={styles.container}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <h3>{formatPrice(produto.preco)}</h3>
            <button>Adicionar ao carrinho</button>
          </div>
        </section>
      </main>
    </>
  )
}