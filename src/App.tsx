import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { Outlet } from 'react-router-dom';
import { ProductsContext } from './context/ProductsContext';
import { PhonesContext } from './context/PhonesContext';
import { TabletsContext } from './context/TabletsContext';
import { AccessoriesContext } from './context/AccessoriesContext';
import { CartProvider } from './context/CartContext';
import { ProductsWithDetailsContext } from './context/ProductsWithDetailsContext';
import { useLoading } from './hooks/useLoading';

export const App = () => {
  const {
    isLoading,
    products,
    phones,
    tablets,
    accessories,
    productsWithDetails,
  } = useLoading();

  if (isLoading) {
    return <Loader />;
  }

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
