import { Link, NavLink } from 'react-router-dom';
import type { Product } from '../../types/Product';
import { ButtonMain } from '../ButtonMain';
import { FavoriteButton } from '../FavoriteButton';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const hasDiscount = product.year < 2020;

  const getImageScale = () => {
    const productName = product.name.toLowerCase();
    const category = product.category.toLowerCase();

    switch (category) {
      case 'phones':
        if (productName.includes('pro') && productName.includes('14')) {
          return 'scale-75 tablet:scale-75 desktop:scale-75';
        }
        if (productName.includes('8')) {
          return 'scale-45 tablet:scale-45 desktop:scale-45';
        }
        if (productName.includes('7')) {
          return 'scale-50 tablet:scale-50 desktop:scale-50';
        }
        return 'scale-45 tablet:scale-45 desktop:scale-45';

      case 'tablets':
        if (
          productName.includes('mini') &&
          productName.includes('6th') &&
          product.color.includes('starlight')
        ) {
          return 'scale-90 tablet:scale-90 desktop:scale-90';
        }
        if (productName.includes('mini') && productName.includes('6th')) {
          return 'scale-125 tablet:scale-125 desktop:scale-125';
        }
        if (productName.includes('mini') && productName.includes('5th')) {
          return 'scale-110 tablet:scale-110 desktop:scale-110';
        }
        return 'scale-75 tablet:scale-75 desktop:scale-75';

      case 'accessories':
        return 'scale-78 tablet:scale-78 desktop:scale-78';

      default:
        return 'scale-90 tablet:scale-90 desktop:scale-90';
    }
  };

  return (
    <article
      className="
    min-w-[229px] min-h-[440px] max-h-[530px] w-full
    flex flex-col
    p-4 tablet:p-6 desktop:p-8
    border border-elements
    relative z-0 hover:z-50
    transition-transform duration-300 ease-in-out
    hover:scale-107 transform-gpu will-change-transform
  "
    >
      <div className="flex items-center justify-center mb-4 tablet:mb-6 h-full overflow-hidden">
        <Link
          to={`/${product.category}/${product.itemId}`}
          state={{ fromSlider: true }} //для відстеження у ProductdetailsPage
          className="flex items-center justify-center w-full h-full"
        >
          <img
            className={`object-contain transform ${getImageScale()}`}
            src={`${import.meta.env.BASE_URL}${product.image}`}
            alt={product.name}
          />
        </Link>
      </div>

      <NavLink
        to={`/${product.category}/${product.itemId}`}
        className={({ isActive }) =>
          isActive ? 'body-text text-blue-500' : 'body-text text-black'
        }
      >
        <div className="body-text min-h-[42px]">{product.name}</div>
      </NavLink>

      <div className="py-3 border-b border-elements flex items-center gap-x-2 mb-4">
        <div className="font-mont text-primary text-price font-bold">
          ${product.price}
        </div>
        {hasDiscount && (
          <div className="font-mont text-secondary text-price font-light line-through">
            ${product.fullPrice}
          </div>
        )}
      </div>

      <div className="flex-grow space-y-2 mb-4">
        <div className="flex justify-between">
          <p className="small-text text-secondary">Screen</p>
          <p className="text-[12px] text-primary font-bold">{product.screen}</p>
        </div>

        <div className="flex justify-between">
          <p className="small-text text-secondary">Capacity</p>
          <p className="text-[12px] text-primary font-bold">
            {product.capacity}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="small-text text-secondary">RAM</p>
          <p className="text-[12px] text-primary font-bold">{product.ram}</p>
        </div>
      </div>

      <div className="flex gap-[8px] w-[100%] h-[40px] mb-8">
        <ButtonMain product={product} />
        <FavoriteButton product={product} />
      </div>
    </article>
  );
};
