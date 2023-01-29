import { ProductDetails } from "./ProductDetails";
import { ProductStatus } from "./ProductStatus";
import { ProductImage } from "./ProductImage";

import { formatPrice } from "../utils/Price";
import { mapImageUrls } from "../utils/Image";

export const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <ProductStatus status={product.status} />
      <ProductImage imageUrls={mapImageUrls(product.imageUrls)} />

      <ProductDetails
        details={product.details}
        name={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
        url={product.url}
      />

      <div className="price">{formatPrice(product.price)}</div>
    </div>
  );
};
