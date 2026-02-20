import Navbar from "./components/Layout/Navbar";
import { products } from "./data/products";

function App() {
  return (
    <>
      <Navbar cartCount={0} />

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Product Catalog
        </h1>

        {products.map((product) => (
          <p key={product.id}>
            {product.name} — ${product.price}
          </p>
        ))}
      </main>
    </>
  );
}

export default App;