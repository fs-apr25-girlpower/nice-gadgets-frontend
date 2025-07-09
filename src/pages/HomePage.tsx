import { ProductSlider } from '../components/ProductsSlider';
import { ShopByCategory } from '../components/ShopByCategory';
import { TopSlider } from '../components/TopSlider';

export const HomePage = () => {
  const productsSliderConfig = {
    titleForBrand: 'Brand new models',
    classNameForButtonPrev: 'swiper-button-prev-cust',
    classNameForButtonNext: 'swiper-button-next-cust',
    marginTop: 'mt-21 tablet:mt-23 desktop:mt-27',
  };

  const hotPricesSliderConfig = {
    titleForBrand: 'Hot prices',
    classNameForButtonPrev: 'swiper-button-prev-cust-price',
    classNameForButtonNext: 'swiper-button-next-cust-price',
    marginTop: 'mt-14 tablet:mt-16 desktop:mt-20',
  };

  return (
    <div className="desktop:w-284 desktop:m-auto">
      <h1 className="color-primary mb-6 tablet:mb-8 desktop:mb-14 tablet:mt-2 desktop:mt-8">
        Welcome to Nice Gadgets store!
      </h1>
      <TopSlider />
      <ProductSlider sliderConfig={productsSliderConfig} />
      <ShopByCategory />
      <ProductSlider sliderConfig={hotPricesSliderConfig} />
    </div>
  );
};
