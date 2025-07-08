// type Props = {}

import { CartItem } from '../components/CartItem';

export const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>
      <div className="flex flex-col desktop:flex-row gap-4 desktop:gap-6">
        <div className="flex flex-col gap-4">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="w-full desktop:w-80">
          <div className="bg-white border border-gray-200 p-4 sm:p-6 sticky top-4">
            <div className="text-center mb-6">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                $2657
              </div>
              <div className="text-sm text-gray-500">Total for 3 items</div>
            </div>

            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
