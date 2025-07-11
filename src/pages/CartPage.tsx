import { CartItem } from '../components/CartItem';
import { useCart } from '../hooks/useCart';
import type { Product } from '../types/Product';
import unicornWithBusket from '../images/unicorn/unicornWithBusket.png';

export const CartPage = () => {
  const { cartItems, getTotalPrice, getTotalItems } = useCart();

  const totalPrice = getTotalPrice();
  const itemsCount = getTotalItems();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Cart</h2>
        <div className="text-center py-12">
          <img
            src={unicornWithBusket}
            alt="unicorn"
            className="mx-auto mb-4 w-[400px] h-[300px]"
          />
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>
      <div className="flex flex-col desktop:flex-row gap-4 desktop:gap-6">
        <div className="flex flex-col gap-4">
          {cartItems.map((product: Product) => (
            <CartItem
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="w-full desktop:w-80">
          <div className="bg-white border border-gray-200 p-4 sm:p-6 sticky top-4">
            <div className="text-center mb-6">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                ${totalPrice}
              </div>
              <div className="text-sm text-gray-500">
                Total for {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
              </div>
            </div>

            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
