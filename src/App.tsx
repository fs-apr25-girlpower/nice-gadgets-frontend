import { useEffect, useState } from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import type { Product } from './types/Product';
import type { Phone } from './types/Phone';
import type { Tablet } from './types/Tablet';
import type { Accessory } from './types/Accessory';
import { getProducts } from './api/getProducts';
import { ProductsContext } from './context/ProductsContext';
import { PhonesContext } from './context/PhonesContext';
import { getPhones } from './api/getPhones';
import { getTablets } from './api/getTablets';
import { TabletsContext } from './context/TabletsContext';
import { getAccessories } from './api/getAccessories';
import { AccessoriesContext } from './context/AccessoriesContext';
import { CartProvider } from './context/CartContext';
import type { ProductWithDetails } from './types';
import { getProductsWithDetails } from './api/getProductsWithDetails';
import { ProductsWithDetailsContext } from './context/ProductsWithDetailsContext';

export const App = () => {
  const [productsWithDetails, setProductsWithDetails] = useState<
    ProductWithDetails[]
  >([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);

  useEffect(() => {
    getProductsWithDetails().then(setProductsWithDetails);
    getProducts().then(setProducts);
    getPhones().then(setPhones);
    getTablets().then(setTablets);
    getAccessories().then(setAccessories);
  }, []);

  return (
    <CartProvider>
      <ProductsWithDetailsContext.Provider value={productsWithDetails}>
        <ProductsContext.Provider value={products}>
          <PhonesContext.Provider value={phones}>
            <TabletsContext.Provider value={tablets}>
              <AccessoriesContext.Provider value={accessories}>
                <div className="App">
                  <div className="wrapper min-h-screen flex flex-col">
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
      </ProductsWithDetailsContext.Provider>
    </CartProvider>
  );
};
