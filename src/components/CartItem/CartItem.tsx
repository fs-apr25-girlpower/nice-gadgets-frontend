import type { Product } from '../../types/Product';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

export const CartItem: React.FC<Props> = ({ product }) => {
  const { removeFromCart, getQuantity, increaseQuantity, decreaseQuantity } =
    useCart();

  const quantity = getQuantity(product);

  const handleRemove = () => {
    removeFromCart(product);
  };

  const handleIncrease = () => {
    increaseQuantity(product);
  };

  const handleDecrease = () => {
    decreaseQuantity(product);
  };

  return (
    <div className="w-full min-w-[288px] bg-white border border-gray-200 shadow-sm p-4 relative">
      <div className="sm:hidden">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <button
                onClick={handleRemove}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                ×
              </button>
              <Link
                className="w-20 h-20 flex-shrink-0"
                to={`/${product.category}/${product.itemId}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecrease}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
              >
                −
              </button>
              <span className="w-8 text-center text-sm font-medium">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <Link to={`/${product.category}/${product.itemId}`}>
              <h3 className="text-sm font-medium text-gray-900 leading-tight">
                {product.name}
              </h3>
            </Link>
            <div className="text-right self-end">
              <div className="text-lg font-bold text-gray-900">
                ${product.price * quantity}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <button
          onClick={handleRemove}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          ×
        </button>
        <div className="w-20 h-20 flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}${product.image}`}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 leading-tight">
            {product.name}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-medium">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">
              ${product.price * quantity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
