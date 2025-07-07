//import './App.scss';

import { useEffect } from 'react';
import { getTablets } from './api/getTablets';
import { TopSlider } from './components/TopSlider/TopSlider';

export const App = () => {
  useEffect(() => {
    getTablets()
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []); // test

  return (
    <div className="App">
      <h1>Product Catalog</h1>

      {/* для перевірки */}
      <p className="mt-4 text-lg text-gray-800">tailwind</p>

      {/* для перевірки */}
      <TopSlider />
    </div>
  );
};
