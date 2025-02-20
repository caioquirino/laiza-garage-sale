
export type ProductDetailsProps = {
  name: string
  price: number
  originalPrice: number
  url: string
  quantity: number
  description: string
}
export const ProductDetails = ({
  name,
  price,
  originalPrice,
  url,
  quantity,
  description,
}: ProductDetailsProps) => {
  const discount = Math.round(100 - (price / originalPrice) * 100);

  return (
    <div className="product-details">
      <h3>{name}</h3>
      {discount > 0 && <span className="discount">-{discount}%</span>}

      {Boolean(url) && (
        <a className="original" href={url} target="_blank" rel="noreferrer">
          Original price
        </a>
      )}

      {quantity && <h4>Quantity: {quantity}</h4>}

      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
};
