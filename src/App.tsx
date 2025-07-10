import { useEffect, useState } from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import type { Product } from './types/Product';
import { getProducts } from './api/getProducts';
import { ProductsContext } from './context/ProductsContext';
import { PhonesContext } from './context/PhonesContext';
import type { Phone } from './types/Phone';
import { getPhones } from './api/getPhones';
import type { Tablet } from './types/Tablet';
import { getTablets } from './api/getTablets';
import { TabletsContext } from './context/TabletsContext';
import type { Accessory } from './types/Accessory';
import { getAccessories } from './api/getAccessories';
import { AccessoriesContext } from './context/AccessoriesContext';

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
    getPhones().then(setPhones);
    getTablets().then(setTablets);
    getAccessories().then(setAccessories);
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <PhonesContext.Provider value={phones}>
        <TabletsContext.Provider value={tablets}>
          <AccessoriesContext.Provider value={accessories}>
            <div className="App">
              <div className="wrapper  min-h-screen flex flex-col">
                <Header />
                <main className="grow px-4 tablet:px-6 desktop:px-8 pb-16 tablet:pb-16 desktop:pb-20 pt-6">
                  <Outlet />
                </main>
                <Footer />
              </div>
            </div>
          </AccessoriesContext.Provider>
        </TabletsContext.Provider>
      </PhonesContext.Provider>
    </ProductsContext.Provider>
  );
};
