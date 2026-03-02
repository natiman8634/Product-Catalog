import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../types/product";
import { useCart } from "../components/context/CartContext";
import { Star, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(
    (p: Product) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-500">
        <h2 className="text-2xl font-semibold">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* ✅ BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="
          mb-6
          flex items-center gap-2
          px-5 py-3
          border rounded-lg
          shadow-md
          hover:bg-gray-100
          transition
          font-medium
        "
      >
        <ArrowLeft size={20} />
        Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Image */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-contain rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="space-y-5">

          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-500 text-lg">
            {product.category}
          </p>

          <div className="flex items-center gap-2 text-yellow-500">
            <Star size={20} fill="currentColor" />
            <span className="text-gray-700 font-medium">
              {product.rating}
            </span>
          </div>

          <p className="text-3xl font-bold text-blue-600">
            ${product.price}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Add to Cart */}
          <button
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              });

              toast.success("Added to cart 🛒");
            }}
            className="
              bg-blue-600 text-white
              px-8 py-3 rounded-lg
              hover:bg-blue-700
              transition
              font-semibold
            "
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;