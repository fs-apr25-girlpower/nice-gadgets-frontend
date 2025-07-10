import type { Product } from '../../types/Product';
import { ButtonMain } from '../ButtonMain';
import { FavoriteButton } from '../FavoriteButton';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <article className="min-w-[229px] min-h-[440px] max-h-[530px] w-full flex flex-col p-4 tablet:p-6 desktop:p-8 border border-elements">
      <div className="flex items-center justify-center mb-4 tablet:mb-6">
        <img
          className="w-full max-w-[148px] h-auto max-h-[128px] object-contain tablet:max-w-[173px] tablet:max-h-[202px] desktop:max-w-[208px] desktop:max-h-[196px]"
          src={`${import.meta.env.BASE_URL}${product.image}`}
          alt={product.name}
        />
      </div>

      <div className="body-text min-h-[42px]">{product.name}</div>

      <div className="py-3 border-b border-elements flex items-center gap-x-2 mb-4">
        <div className="font-mont text-primary text-price font-bold">
          ${product.price}
        </div>
        <div className="font-mont text-secondary text-price font-light line-through">
          ${product.fullPrice}
        </div>
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

      <div className="flex gap-2 w-full h-10 mt-auto">
        <ButtonMain />
        <FavoriteButton />
      </div>
    </article>
  );
};
