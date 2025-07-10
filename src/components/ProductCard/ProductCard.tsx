import { Link, NavLink } from 'react-router-dom';
import type { Product } from '../../types/Product';
import { ButtonMain } from '../ButtonMain';
import { FavoriteButton } from '../FavoriteButton';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const hasDiscount = product.year < 2020;

  return (
    <article className="min-w-[229px] min-h-[440px] max-h-[530px] w-full flex flex-col p-4 tablet:p-6 desktop:p-8 border border-elements">
      <div className="flex items-center justify-center mb-4 tablet:mb-6">
        <Link to={`/product/${product.id}`}>
          <img
            className="w-[148px] h-[128px] object-contain tablet:w-[173px] tablet:h-[202px] desktop:w-[208px] desktop:h-[196px]"
            src={`${import.meta.env.BASE_URL}${product.image}`}
            alt={product.name}
          />
        </Link>
      </div>

      <NavLink
        to={`/product/${product.id}`}
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
