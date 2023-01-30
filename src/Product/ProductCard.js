import { ProductDetails } from "./ProductDetails";
import { ProductStatus } from "./ProductStatus";
import { ProductImage } from "./ProductImage";

import { formatPrice } from "../utils/Price";
import { mapImageUrls } from "../utils/Image";

export const ProductCard = ({
  status,
  imageUrls,
  details,
  name,
  price,
  originalPrice,
  url,
  quantity,
  description,
}) => {
  return (
    <div className="product">
      <ProductStatus status={status} />
      <ProductImage imageUrls={mapImageUrls(imageUrls)} />

      <ProductDetails
        details={details}
        name={name}
        price={price}
        originalPrice={originalPrice}
        url={url}
        quantity={quantity}
        description={description}
      />

      <div className="price">{formatPrice(price)}</div>
    </div>
  );
};
