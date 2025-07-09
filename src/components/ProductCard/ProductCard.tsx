import iPhoneImage from '../../../public/img/phones/apple-iphone-13-pro-max/graphite/00.webp';
import { ButtonMain } from '../ButtonMain';
import { FavoriteButton } from '../FavoriteButton';

export const ProductCard: React.FC = () => {
  return (
    <article className="w-[212px] h-[439px] px-[32px] pt-[32px] border border-[#E2E6E9] tablet:w-[232px] tablet:h-[520px] desktop:w-[272px] desktop:h-[515px]">
      <div className="flex items-center justify-center">
        <img
          className="w-[148px] h-[128px] object-contain tablet:w-[173px] tablet:h-[202px] desktop:w-[208px] desktop:h-[196px]"
          src={iPhoneImage}
          alt="iPhone 13 PRO MAX"
        />
      </div>

      <p className="body-text pt-6">Apple iPhone 14 Pro 128GB Silver (MQ023)</p>

      <div className="py-2 border-b border-[#E2E6E9] font-mont text-[22px] font-extrabold leading-[140%]">
        999$
      </div>

      <div className="pb-2">
        <div className="flex justify-between pt-2">
          <p className="small-text text-[#89939A]">Screen</p>
          <p className="text-[12px] text-[#313237] font-bold">6.1 OLED</p>
        </div>

        <div className="flex justify-between pt-2">
          <p className="small-text text-[#89939A]">Capacity</p>
          <p className="text-[12px] text-[#313237] font-bold">128 GB</p>
        </div>

        <div className="flex justify-between pt-2">
          <p className="small-text text-[#89939A]">RAM</p>
          <p className="text-[12px] text-[#313237] font-bold">6 GB</p>
        </div>
      </div>

      <div className="flex gap-[8px] w-[100%] h-[40px] mb-8">
        <ButtonMain />
        <FavoriteButton />
      </div>
    </article>
  );
};
