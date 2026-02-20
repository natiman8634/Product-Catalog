import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  cartCount?: number;
}

const Navbar = ({ cartCount = 0 }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 tracking-tight"
        >
          ProductCatalog
        </Link>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="
              w-full
              border
              rounded-lg
              px-4 py-2
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
              transition
            "
          />
        </div>

        {/* Cart Button */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
          <ShoppingCart size={24} />

          {cartCount > 0 && (
            <span
              className="
                absolute -top-1 -right-1
                bg-red-500 text-white
                text-xs font-semibold
                px-2 py-0.5
                rounded-full
              "
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;