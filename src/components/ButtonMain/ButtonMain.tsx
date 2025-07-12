import clsx from 'clsx';
import { useCart } from '../../hooks/useCart';
import type { Product } from '../../types/Product';

interface Props {
  product: Product;
}

export const ButtonMain: React.FC<Props> = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();

  const isSelected = isInCart(product);

  const handleClick = () => {
    if (isSelected) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        'w-full h-[40px]',
        'cursor-pointer',
        'border',
        'hover:shadow-md',
        'transition duration-300 ease-in-out',
        'text-default',
        isSelected
          ? 'border-elements bg-white text-green'
          : 'bg-primary text-white',
      )}
    >
      {isSelected ? 'Added' : 'Add to cart'}
    </button>
  );
};
