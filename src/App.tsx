import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import ProductGrid from "./components/product/ProductGrid";
import FilterPanel from "./components/product/FilterPanel";
import SortDropdown from "./components/product/SortDropdown";
import CartDrawer from "./components/cart/CartDrawer";

import ProductDetails from "./pages/ProductDetails";

import { products } from "./data/products";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "priceLow":
          return a.price - b.price;
        case "priceHigh":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <>
      {/* ✅ FIXED NAVBAR */}
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* ✅ PAGE CONTENT (important padding) */}
      <div className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <main className="max-w-7xl mx-auto px-4 space-y-6">
                <FilterPanel
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />

                <SortDropdown
                  sortOption={sortOption}
                  onSortChange={setSortOption}
                />

                <ProductGrid products={filteredProducts} />
              </main>
            }
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </div>

      {/* ✅ CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default App;