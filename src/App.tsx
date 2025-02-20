import "@fontsource/roboto";
import "./App.css";

import { getProducts, ProductCard, type Product } from "./Product";
import { Suspense, useEffect, useState } from "react";

const Contact = () => (
  <div className="contact">
    <p>
      Hey! I'm moving out of the country at the start of March, so I'm selling
      my furniture
    </p>
    <p>Feel free to reach out if you are interested</p>
    <p>Everything is in Amstelveen, Randwijck</p>

    <ul>
      <li>
        Whatsapp:{" "}
        <a href="https://wa.me/310617669739" rel="noreferrer" target="_blank">
          06 1766 9739
        </a>
      </li>
      <li>
        Email:{" "}
        <a href="mailto:mattelias+nl@live.com" rel="noreferrer" target="_blank">
          mattelias+nl@live.com
        </a>
      </li>
    </ul>
  </div>
);

function App() {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    getProducts().then(setProducts)
  }, []);

  return (
    <div className="App">
      <div>
        <header>Laiza&#39;s Garage Sale</header>
        <Contact />

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
