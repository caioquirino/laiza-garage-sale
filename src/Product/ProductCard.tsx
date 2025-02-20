import { ProductDetails } from "./ProductDetails";
import { ProductStatus } from "./ProductStatus";
import { ProductImage } from "./ProductImage";

import { formatPrice } from "../utils/Price";
import { mapImageUrls } from "../utils/Image";

export type ProductCardProps = {
  active: boolean
  imageUrls: string[]
  name: string
  price: number
  originalPrice: number
  url: string
  quantity: number
  description: string
}

export const ProductCard = ({
  active,
  imageUrls,
  name,
  price,
  originalPrice,
  url,
  quantity,
  description,
}: ProductCardProps) => {
  return (
    <div className="product">
      <ProductStatus active={active} />
      <ProductImage imageUrls={mapImageUrls(imageUrls)} />

      <ProductDetails
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
