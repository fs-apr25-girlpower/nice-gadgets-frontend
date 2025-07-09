import { useEffect, useState } from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import type { Product } from './types/Product';
import { getProducts } from './api/getProducts';
import { ProductsContext } from './context/ProductsContext';

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <div className="App">
        <div className="wrapper min-h-screen flex flex-col">
          <Header />
          <main className="grow px-4 tablet:px-6 desktop:px-8 pb-16 tablet:pb-16 desktop:pb-20 pt-6">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ProductsContext.Provider>
  );
};
