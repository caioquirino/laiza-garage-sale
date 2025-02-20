import swell, { Product as SwellProduct, Attribute as SwellAttribute, ResultsResponse } from "swell-js";
import { Product } from "./types";
import "../config/Swell"

const getOriginalProductUrl = (attributes: Record<string,SwellAttribute>): string | undefined => {
  if (!(attributes && attributes.originalProductUrl)) return undefined;

  return attributes.originalProductUrl.value as string;
};

// export const getProducts1 = async (): Promise<Product[]> => 
//     (await swell.products.list({
//       limit: 25, // Max. 100
//       page: 1,
//       expand: ['variants']
//     })).results.map((p: SwellProduct): Product => ({
//       id: p.id!,
//       name: p.name,
//       price: p.salePrice!,
//       originalPrice: p.price!,
//       active: p.active! || true,
//       imageUrls: p.images!.map((i) => i.file!.url!),
//       quantity: p.stockLevel!,
//       url: getOriginalProductUrl(p.attributes!)!,
//       description: p.description!,
//     })).sort((a, b) => a.price - b.price).map(p => {
//       console.log(p)
//       return p;
//     });

export const getProducts = async (): Promise<Product[]> => 
  (await swell.get<ResultsResponse<SwellProduct>>('/products', {
    fields: [
      'name',
      'slug',
      'active',
      'images',
      'sku',
      'description',
      'stock',
      'price',
      'sale_price',
      'purchase_options'
    ]
  })).results.map(p => {
    console.log("Original",p)
    return p;
  }).map((p: SwellProduct): Product => ({
    id: p.id!,
    name: p.name,
    price: p.price!,
    originalPrice: p.orig_price!,
    active: p.active || true,
    imageUrls: p.images!.map((i) => i.file!.url!),
    quantity: p.stock_level || 1,
    url: getOriginalProductUrl(p.attributes!)!,
    description: p.description!,
  })).sort((a, b) => a.price - b.price).map(p => {
    console.log("Transformed", p)
    return p;
  });
