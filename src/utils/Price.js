export const formatPrice = (product) =>
  product.toLocaleString("en-US", { style: "currency", currency: "EUR" });
