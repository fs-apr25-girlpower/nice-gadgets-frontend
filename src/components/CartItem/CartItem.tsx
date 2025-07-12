import type { Product } from '../../types/Product';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

interface Props {
  product: Product;
}

export const CartItem: React.FC<Props> = ({ product }) => {
  const { removeFromCart, getQuantity, increaseQuantity, decreaseQuantity } =
    useCart();
  const navigate = useNavigate();
  const quantity = getQuantity(product);

  const handleNavigateToProduct = () => {
    const path = `/${product.category}/${product.itemId}`;
    navigate(path);
  };

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
    <div className="w-full min-w-[288px] bg-white border border-elements shadow-sm p-4 relative">
      <div className="mobile:hidden">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <button
                onClick={handleRemove}
                className="w-8 h-8 flex items-center justify-center text-elements hover:text-red-500 transition-colors text-xl font-bold cursor-pointer"
              >
                ×
              </button>
              <div
                className="w-20 h-20 flex-shrink-0 cursor-pointer"
                onClick={handleNavigateToProduct}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecrease}
                className="w-8 h-8 flex items-center justify-center border border-elements rounded hover:bg-elements cursor-pointer"
              >
                −
              </button>
              <span className="w-8 text-center text-default font-medium">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="w-8 h-8 flex items-center justify-center border border-elements rounded hover:bg-elements cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div
              onClick={handleNavigateToProduct}
              className="cursor-pointer"
            >
              <h3 className="text-default text-primary hover:text-secondary transition-colors">
                {product.name}
              </h3>
            </div>
            <div className="text-right self-end">
              <div className="text-price font-bold text-primary w-16 text-right">
                ${product.price * quantity}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden mobile:flex items-center gap-4">
        <button
          onClick={handleRemove}
          className="w-8 h-8 flex items-center justify-center text-secondary hover:text-red-500 transition-colors text-xl font-bold cursor-pointer"
        >
          ×
        </button>
        <div className="w-20 h-20 flex-shrink-0">
          <div
            onClick={handleNavigateToProduct}
            className="cursor-pointer"
          >
            <img
              src={`${import.meta.env.BASE_URL}${product.image}`}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div
            onClick={handleNavigateToProduct}
            className="cursor-pointer"
          >
            <p className="text-default text-primary hover:text-secondary transition-colors">
              {product.name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center border border-elements rounded hover:bg-elements cursor-pointer"
            >
              −
            </button>
            <span className="w-8 text-center text-default font-medium">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center border border-elements rounded hover:bg-elements cursor-pointer"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <div className="text-price font-bold text-primary w-16 text-right">
              ${product.price * quantity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
