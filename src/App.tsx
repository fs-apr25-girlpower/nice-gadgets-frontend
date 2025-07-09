import { useEffect } from 'react';
import { getTablets } from './api/getTablets';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
// import { ShopByCategory } from './components/ShopByCategory';
import { Outlet } from 'react-router-dom';
// import { ProductSlider } from './components/ProductsSlider';

export const App = () => {
  useEffect(() => {
    getTablets()
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []); // test

  return (
    <div className="App">
      <div className="wrapper min-h-screen flex flex-col">
        <Header />
        <main className="grow px-4 tablet:px-6 desktop:px-8 pb-16 tablet:pb-16 desktop:pb-20 pt-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
