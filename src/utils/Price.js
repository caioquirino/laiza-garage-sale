export const formatPrice = (price = "") =>
  price.toLocaleString("en-US", { style: "currency", currency: "EUR" });
