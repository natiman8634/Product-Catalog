import type { Product } from "../../types/product";
import { Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="block h-full">
      <div
        className="
          bg-white rounded-xl shadow-sm
          hover:shadow-lg transition-all duration-300
          overflow-hidden
          flex flex-col
          h-full
        "
      >
        {/* ✅ IMAGE */}
        <div className="w-full aspect-square bg-gray-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full h-full object-contain
              transition-transform duration-300
              hover:scale-105
            "
          />
        </div>

        {/* ✅ CONTENT */}
        <div className="flex flex-col flex-1 p-4 space-y-2">

          {/* Product Name */}
          <h3
            className="
              font-semibold
              text-sm sm:text-base md:text-lg
              line-clamp-2
            "
          >
            {product.name}
          </h3>

          {/* Category */}
          <p className="text-xs sm:text-sm text-gray-500">
            {product.category}
          </p>

          {/* Price */}
          <p className="text-blue-600 font-bold text-base sm:text-lg">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-xs sm:text-sm text-gray-700">
              {product.rating}
            </span>
          </div>

          {/* Push button to bottom */}
          <div className="mt-auto">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                });

                toast.success("Added to cart 🛒");
              }}
              className="
                w-full
                text-sm sm:text-base
                bg-blue-600 text-white
                py-2.5
                rounded-lg
                hover:bg-blue-700
                transition
              "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;