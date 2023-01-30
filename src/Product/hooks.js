import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    products(limit: 20, _currency: "EUR") {
      results {
        id
        name
        origPrice
        price
        stockLevel
        images {
          file {
            url
          }
        }
        attributes
      }
    }
  }
`;

const getOriginalProductUrl = (attributes) => {
  if (!(attributes && attributes.originalProductUrl)) return null;

  return attributes.originalProductUrl.value;
};

export const useProducts = () => {
  const { loading, data } = useQuery(GET_PRODUCTS);

  if (loading) return [];

  const products = data.products.results.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    originalPrice: p.origPrice,
    imageUrls: p.images.map((i) => i.file.url),
    quantity: p.stockLevel,
    url: getOriginalProductUrl(p.attributes),
  }));

  return products.sort((a, b) => a.price - b.price);
};
