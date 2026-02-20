import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    category: "Electronics",
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    description:
      "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 80,
    category: "Fashion",
    rating: 4.2,
    image: "https://via.placeholder.com/300",
    description:
      "Comfortable running shoes suitable for everyday workouts.",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 150,
    category: "Electronics",
    rating: 4.7,
    image: "https://via.placeholder.com/300",
    description:
      "Track fitness, notifications, and health metrics easily.",
  },
  {
    id: 4,
    name: "Backpack",
    price: 45,
    category: "Accessories",
    rating: 4.1,
    image: "https://via.placeholder.com/300",
    description:
      "Durable backpack perfect for travel and daily use.",
  },
];