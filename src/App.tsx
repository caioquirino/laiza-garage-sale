import "@fontsource/roboto";
import "./App.css";
import { ReactComponent as Contact } from './Contact.md'

import { getProducts, ProductCard, type Product } from "./Product";
import { Suspense, useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    getProducts().then(setProducts)
  }, []);

  return (
    <div className="App">
      <div>
        <header>Laiza&#39;s Garage Sale</header>
        <div className="contact">
          <Contact />
        </div>

        <div className="container">

        <Suspense fallback={<div>Loading...</div>}>
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
