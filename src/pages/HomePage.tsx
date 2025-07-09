import { Loader } from '../components/Loader';
import { ProductSlider } from '../components/ProductsSlider';
import { ShopByCategory } from '../components/ShopByCategory';
import { TopSlider } from '../components/TopSlider';
import { useProducts } from '../context/ProductsContext';

export const HomePage = () => {
  //hook Context
  const products = useProducts();

  const isLoading = !products || !Array.isArray(products);
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    ); // add loader?
  }

  const brandNewProducts = products
    .filter(product => product.year >= 2021)
    .sort((a, b) => b.year - a.year);

  const hotPriceProducts = products
    .filter(p => p.fullPrice - p.price > 100)
    .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price));

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

      <ProductSlider
        sliderConfig={productsSliderConfig}
        products={brandNewProducts.slice(0, 10)}
      />

      <ShopByCategory />

      <ProductSlider
        sliderConfig={hotPricesSliderConfig}
        products={hotPriceProducts.slice(0, 10)}
      />
    </div>
  );
};
