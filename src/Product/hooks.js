import { products } from "../data";

export const useProducts = () => {
  return products.sort((a, b) => a.price - b.price);
}