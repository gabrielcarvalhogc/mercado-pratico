"use client"

import searchIcon from '../../../public/search-icon.png'
import Image from 'next/image'
import styles from './SearchFilter.module.scss'
import { useState } from 'react';
import { ProductItemType } from '@/types/productItem';
import { Product } from '../Product/Product';

interface SearchFIlterProps {
  data: ProductItemType[]
}

export function SearchFilter({ data }: SearchFIlterProps) {
  const [items, setItems] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredItems = data.filter(item =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );

    setItems(filteredItems);
  };

  const isInputChange = searchTerm !== '';

  return (
    <>
      <div className={styles.container}>
        <Image
          src={searchIcon}
          width={25}
          height={25}
          alt='Icone de procura'
          className={styles.image}
        />
        <input
          type="text"
          placeholder="busque por um item"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.filtered}>
        {isInputChange && items.map(item => (
          <Product {...item} key={item.title} />
          // Adicione aqui a lógica para renderizar outros detalhes do item
        ))}
      </div>
    </>
  )
}