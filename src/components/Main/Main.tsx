import produtos from "../../data/productsData.json";
import { ProductList } from "../ProductList/ProductList";
import { SearchFilter } from "../SearchFilter/SearchFilter";

export function Main() {

  const bebidas = produtos.filter((produto) => produto.category === 'bebidas');
  const frios = produtos.filter((produto) => produto.category === 'frios');

  return (
    <main>
      <SearchFilter data={produtos}/>
      <ProductList products={bebidas} category="Bebidas" />
      <ProductList products={frios} category="Frios" />
    </main>
  );
}