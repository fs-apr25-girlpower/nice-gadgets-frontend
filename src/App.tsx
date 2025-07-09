import { useEffect } from 'react';
import { getTablets } from './api/getTablets';
import { TopSlider } from './components/TopSlider/TopSlider';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { ShopByCategory } from './components/ShopByCategory';
import { Outlet } from 'react-router-dom';

export const App = () => {
  useEffect(() => {
    getTablets()
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []); // test

  return (
    <div className="App">
      <Header />
      <Outlet />
      <TopSlider />
      <ShopByCategory />
      <Footer />
    </div>
  );
};
