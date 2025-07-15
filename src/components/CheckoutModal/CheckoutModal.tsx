import React from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onClearCart: () => void;
  totalPrice: number;
  itemsCount: number;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  onClearCart,
  totalPrice,
  itemsCount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[10001]">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 border-2 border-elements shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-primary dark:text-dark-primary">
          Checkout
        </h2>

        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-primary dark:text-dark-primary mb-2">
            ${totalPrice}
          </div>
          <div className="text-sm text-secondary dark:text-dark-secondary">
            Total for {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
          </div>
        </div>

        <p className="text-secondary dark:text-dark-secondary mb-6 text-center">
          Are you ready to proceed with your order?
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="w-full bg-green text-white py-3 px-6 rounded hover:opacity-90 transition-opacity font-medium"
          >
            Confirm Order
          </button>

          <button
            onClick={onClearCart}
            className="w-full bg-red text-white py-3 px-6 rounded hover:opacity-90 transition-opacity font-medium"
          >
            Clear Cart
          </button>

          <button
            onClick={onClose}
            className="w-full bg-elements text-primary py-3 px-6 rounded hover:bg-hover transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
