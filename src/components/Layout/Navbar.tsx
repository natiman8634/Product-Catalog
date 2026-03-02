import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "../context/CartContext";

interface NavbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onCartClick: () => void;
}

const Navbar = ({
  searchTerm,
  onSearchChange,
  onCartClick,
}: NavbarProps) => {
  const { cart } = useCart();

  // total items in cart
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="fixed top-0 left-0 w-full border-b bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">

        {/* ✅ Logo */}
        <h1 className="text-blue-600 font-bold text-xl whitespace-nowrap">
          ProductCatalog
        </h1>

        {/* ✅ Search Bar */}
        <div className="flex-1 relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="
              w-full
              pl-10 pr-4 py-2
              border rounded-lg
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        {/* ✅ Cart Icon */}
        <button
          onClick={onCartClick}
          className="relative p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <ShoppingCart size={22} />

          {/* Cart Badge */}
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