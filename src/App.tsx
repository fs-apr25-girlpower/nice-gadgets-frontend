import { useEffect } from 'react';
import { getTablets } from './api/getTablets';
import { TopSlider } from './components/TopSlider/TopSlider';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';

import { ShopByCategory } from './components/ShopByCategory';
import { ProductSlider } from './components/ProductsSlider';

export const App = () => {
  useEffect(() => {
    getTablets()
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []); // test

  const productsSliderConfig = {
    titleForBrand: 'Brand new models',
    classNameForButtonPrev: 'swiper-button-prev-cust',
    classNameForButtonNext: 'swiper-button-next-cust',
  };
  const hotPricesSliderConfig = {
    titleForBrand: 'Hot prices',
    classNameForButtonPrev: 'swiper-button-prev-cust-price',
    classNameForButtonNext: 'swiper-button-next-cust-price',
  };

  return (
    <div className="App">
      <Header />
      {/* для перевірки */}
      <p className="mt-4 text-lg text-gray-800">tailwind</p>

      {/* для перевірки */}
      <TopSlider />
      <ProductSlider sliderConfig={productsSliderConfig} />
      <ShopByCategory />
      <ProductSlider sliderConfig={hotPricesSliderConfig} />
      <Footer />
    </div>
  );
};
