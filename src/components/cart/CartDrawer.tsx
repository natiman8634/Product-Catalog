import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[70%]">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">
              Cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 items-center border-b pb-3"
              >
                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded"
                />

                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="px-2 bg-gray-200 rounded"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-blue-600 font-semibold mt-1">
                    ${item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full border-t p-4 space-y-3">

          <p className="font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </p>

          {/* ✅ CLEAR CART BUTTON */}
          {cart.length > 0 && (
            <button
              onClick={() => {
                clearCart();
                toast("Cart cleared 🧹");
              }}
              className="
        w-full
        bg-red-500 text-white
        py-2 rounded-lg
        hover:bg-red-600 transition
      "
            >
              Clear Cart
            </button>
          )}

          {/* CHECKOUT */}
          <button
            className="
      w-full
      bg-blue-600 text-white
      py-2 rounded-lg
      hover:bg-blue-700 transition
    "
          >
            Checkout
          </button>

        </div>
      </div>
    </>
  );
};

export default CartDrawer;