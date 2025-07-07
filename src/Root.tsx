import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import type { RouteConfig } from './types/RouteConfig';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonePage';
import { TabletsPage } from './pages/TabletPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MobileMenuPage } from './pages/MobileMenuPage';

const routeConfig: RouteConfig[] = [
  { index: true, element: <HomePage /> },
  { path: 'phones', element: <PhonesPage /> },
  { path: 'tablets', element: <TabletsPage /> },
  { path: 'accessories', element: <AccessoriesPage /> },
  { path: 'favourites', element: <FavouritesPage /> },
  { path: 'cart', element: <CartPage /> },
  { path: 'mobileMenu', element: <MobileMenuPage /> },
  { path: '*', element: <NotFoundPage /> },
];
export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          {routeConfig.map((route: RouteConfig, index: number) =>
            route.index ? (
              <Route
                key={index}
                index
                element={route.element}
              />
            ) : (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ),
          )}
        </Route>
      </Routes>
    </Router>
  );
};
