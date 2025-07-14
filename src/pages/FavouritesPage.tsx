import { useCart } from '../hooks/useCart';
import type { Product } from '../types/Product';
import { ProductCard } from '../components/ProductCard';
import unicornImage from '../images/unicorn/unicorn.png';

export const FavouritesPage = () => {
  const { favorites } = useCart();

  if (favorites.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Favourites</h2>
        <div className="text-center py-12">
          <img
            src={unicornImage}
            alt="unicorn"
            className="mx-auto mb-4 w-[300px] h-[300px] transform -translate-x-1/6"
          />
          <p className="text-secondary text-lg">Ніхто мене не любить</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Favourites</h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(230px,272px))] mobile:justify-center mx-auto mt-6 mb-6 tablet:mb-10">
        {favorites.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
