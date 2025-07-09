import { ProductSlider } from '../components/ProductsSlider';
import { ShopByCategory } from '../components/ShopByCategory';
import { TopSlider } from '../components/TopSlider';

export const HomePage = () => {
  const productsSliderConfig = {
    titleForBrand: 'Brand new models',
    classNameForButtonPrev: 'swiper-button-prev-cust',
    classNameForButtonNext: 'swiper-button-next-cust',
    marginTop: 'mt-21 sm:mt-23 lg:mt-27',
  };

  const hotPricesSliderConfig = {
    titleForBrand: 'Hot prices',
    classNameForButtonPrev: 'swiper-button-prev-cust-price',
    classNameForButtonNext: 'swiper-button-next-cust-price',
    marginTop: 'mt-14 sm:mt-16 lg:mt-20',
  };

  return (
    <div>
      <h1 className="color-primary mb-6 sm:mb-8 lg:mb-14 sm:mt-2 lg:mt-8">
        Welcome to Nice Gadgets store!
      </h1>
      <TopSlider />
      <ProductSlider sliderConfig={productsSliderConfig} />
      <ShopByCategory />
      <ProductSlider sliderConfig={hotPricesSliderConfig} />
    </div>
  );
};
