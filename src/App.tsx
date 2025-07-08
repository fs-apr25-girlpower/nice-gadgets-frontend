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

  const titleForBrand = 'Brand new models';
  const titleForPrice = 'Hot prices';

  return (
    <div className="App">
      <Header />
      {/* для перевірки */}
      <p className="mt-4 text-lg text-gray-800">tailwind</p>

      {/* для перевірки */}
      <TopSlider />
      <ProductSlider title={titleForBrand} />
      <ShopByCategory />
      <ProductSlider title={titleForPrice} />
      <Footer />
    </div>
  );
};
