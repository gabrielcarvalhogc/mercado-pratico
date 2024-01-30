import {ProductItemType} from "../types/productItem";
import array from "../data/productsData.json"

export function getProductById(idProcurado: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === idProcurado) {
      return array[i];
    }
  }
}