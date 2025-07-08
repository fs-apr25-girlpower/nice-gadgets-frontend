import { useEffect } from 'react';
import { getTablets } from './api/getTablets';
import { TopSlider } from './components/TopSlider/TopSlider';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';

import { ShopByCategory } from './components/ShopByCategory';
import { ProductCard } from './components/ProductCard';

export const App = () => {
  useEffect(() => {
    getTablets()
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []); // test

  return (
    <div className="App">
      <Header />
      <p className="mt-4 text-lg text-gray-800">tailwind</p>

      <TopSlider />
      <ShopByCategory />
      <ProductCard />
      <Footer />
    </div>
  );
};
