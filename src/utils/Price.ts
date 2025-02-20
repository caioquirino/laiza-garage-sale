const formatter = new Intl.NumberFormat('default', {
  style: 'currency',
  currency: 'EUR',
});

export const formatPrice = (price: number): string =>
  formatter.format(price)
