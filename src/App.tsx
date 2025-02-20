import "@fontsource/roboto";
import "./App.css";
import { ReactComponent as Contact } from './Contact.md'

import { getProducts, ProductCard, type Product } from "./Product";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
    }).catch(error => {
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
    
  }, []);

  return (
    <div className="App">
      <div>
        <header>Laiza&#39;s Garage Sale</header>
        <div className="contact">
          <Contact />
        </div>

        <div className="container">
          {loading && <div>Loading products...</div>}
          {error && <div>Error Loading products.</div>}

          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
