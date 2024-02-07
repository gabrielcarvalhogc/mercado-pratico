"use client"

import Slider from "react-slick";
import styles from './ProductList.module.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Product } from "../Product/Product";
import { ProductItemType } from "@/types/productItem";
import { useCart } from "../../contexts/CartContext";

interface ProductListProps {
  category: string;
  products: ProductItemType[];
}

export function ProductList({ products, category }: ProductListProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (product: ProductItemType) => {
    addToCart({
      nome: product.title,
      preco: product.preco,
      quantidade: 1,
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className={styles.section} id={category}>
      <h2>{category}</h2>
      <Slider {...settings} className={styles.slider}>
        {products.map((product) => (
          <Product
            {...product}
            key={product.id}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </Slider>
    </section>
  );
}
