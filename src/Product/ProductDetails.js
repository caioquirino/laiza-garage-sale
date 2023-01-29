export const ProductDetails = ({
  details,
  name,
  price,
  originalPrice,
  url,
}) => {
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

      {/* <ul>
        {details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul> */}
    </div>
  );
};
