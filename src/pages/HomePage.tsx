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
    .sort((a, b) => b.year - a.year)
    .slice(0, 10);

  const hotPriceProducts = products
    .filter(p => p.year < 2020)
    .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price))
    .slice(0, 10);

  const productsSliderConfig = {
    titleForBrand: 'Brand new models',
    marginTop: 'mt-21 tablet:mt-23 desktop:mt-27',
  };

  const hotPricesSliderConfig = {
    titleForBrand: 'Hot prices',
    marginTop: 'mt-14 tablet:mt-16 desktop:mt-20',
  };

  return (
    <>
      <h1 className="text-primary dark:text-dark-primary mb-6 tablet:mb-8 desktop:mb-14 tablet:mt-2 desktop:mt-8">
        Welcome to Nice Gadgets store!
      </h1>
      <TopSlider />

      <ProductSlider
        sliderConfig={productsSliderConfig}
        products={brandNewProducts}
      />

      <ShopByCategory />

      <ProductSlider
        sliderConfig={hotPricesSliderConfig}
        products={hotPriceProducts}
      />
    </>
  );
};
