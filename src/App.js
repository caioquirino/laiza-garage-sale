import "@fontsource/roboto";
import "./App.css";

import { useProducts, ProductCard } from "./Product";

const Contact = () => (
  <div className="contact">
    <p>
      Hey! I'm moving out of the country at the start of March, so I'm selling
      my furniture
    </p>
    <p>Feel free to reach out if you are interested</p>
    <p>Everything is in Amstelveen, Randwijck</p>

    <ul>
      <li>Whatsapp: 06 1766 9739</li>
      <li>Email: mattelias+nl@live.com</li>
    </ul>
  </div>
);

function App() {
  const products = useProducts();

  return (
    <div className="App">
      <div>
        <header>Matheus&#39; Garage Sale</header>
        <Contact />

        <div className="container">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
