import { CartItem } from '../components/CartItem';
import { CheckoutModal } from '../components/CheckoutModal';
import { useCart } from '../hooks/useCart';
import type { Product } from '../types/Product';
import unicornWithBusket from '../images/unicorn/unicornWithBusket.png';
import { useState } from 'react';

export const CartPage = () => {
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = getTotalPrice();
  const itemsCount = getTotalItems();

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleConfirmOrder = () => {
    // Тут можна додати логіку для обробки замовлення
    alert('Order confirmed! Thank you for your purchase!');
    clearCart();
    setIsModalOpen(false);
  };

  const handleClearCart = () => {
    clearCart();
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6 text-primary dark:text-dark-primary">
          Cart
        </h2>
        <div className="text-center py-12">
          <img
            src={unicornWithBusket}
            alt="unicorn"
            className="mx-auto mb-4 w-[400px] h-[300px]"
          />
          <p className="text-secondary dark:text-dark-secondary">
            Your cart is empty
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-primary dark:text-dark-primary">
        Cart
      </h2>
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
          <div className="bg-card-background dark:bg-dark-card-background border border-card-border dark:border-dark-elements p-4 sm:p-6 sticky top-16 desktop:top-20">
            <div className="text-center mb-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-dark-primary mb-2">
                ${totalPrice}
              </div>
              <div className="text-sm text-secondary dark:text-dark-secondary">
                Total for {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-primary dark:bg-dark-primary text-white dark:text-black py-3 px-6 rounded hover:bg-secondary dark:hover:bg-dark-secondary transition-colors font-medium text-sm sm:text-base cursor-pointer"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmOrder}
        onClearCart={handleClearCart}
        totalPrice={totalPrice}
        itemsCount={itemsCount}
      />
    </div>
  );
};
