import React from "react";
import produtos from "../../data/productsData.json";
import { ProductList } from "../ProductList/ProductList";
import { SearchFilter } from "../SearchFilter/SearchFilter";

export function Main() {
  const categories = ["Bebidas", "Frios", "Higiene", "Padaria", "Feira"];

  const filteredProductsByCategory = (category: string) =>
    produtos.filter((produto) => produto.category === category);

  return (
    <main>
      <SearchFilter data={produtos} />
      {categories.map((category) => (
        <ProductList
          key={category}
          products={filteredProductsByCategory(category.toLocaleLowerCase())}
          category={category}
        />
      ))}
    </main>
  );
}
