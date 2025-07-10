import type { Product } from '../../types/Product';
import { ButtonMain } from '../ButtonMain';
import { FavoriteButton } from '../FavoriteButton';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <article className="min-w-[229px] min-h-[440px] max-h-[506px] w-full flex flex-col p-4 tablet:p-6 desktop:p-8 border border-gray-200">
      <div className="flex items-center justify-center mb-4 tablet:mb-6">
        <img
          className="w-full max-w-[148px] h-auto max-h-[128px] object-contain tablet:max-w-[173px] tablet:max-h-[202px] desktop:max-w-[208px] desktop:max-h-[196px]"
          src={`${import.meta.env.BASE_URL}${product.image}`}
          alt={product.name}
        />
      </div>

      <p className="body-text mb-2">{product.name}</p>

      <div className="py-2 border-b border-gray-200 font-mont text-[22px] font-extrabold leading-[140%] mb-4">
        ${product.price}
      </div>

      <div className="flex-grow space-y-2 mb-4">
        <div className="flex justify-between">
          <p className="small-text text-[#89939A]">Screen</p>
          <p className="text-[12px] text-[#313237] font-bold">
            {product.screen}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="small-text text-[#89939A]">Capacity</p>
          <p className="text-[12px] text-[#313237] font-bold">
            {product.capacity}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="small-text text-[#89939A]">RAM</p>
          <p className="text-[12px] text-[#313237] font-bold">{product.ram}</p>
        </div>
      </div>

      <div className="flex gap-2 w-full h-10 mt-auto">
        <ButtonMain />
        <FavoriteButton />
      </div>
    </article>
  );
};
