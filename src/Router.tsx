import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { App } from './App';
// import { HomePage } from './pages/HomePage/HomePage';
// import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';
// import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />

        {/* Приклади майбутніх сторінок */}
        {/* <Route path="/home" element={<HomePage />} /> */}
        {/* <Route path="/products/:id" element={<ProductDetailsPage />} /> */}

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </HashRouter>
  );
};
