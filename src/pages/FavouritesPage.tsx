import { useCart } from '../hooks/useCart';
import type { Product } from '../types/Product';
import { ProductCard } from '../components/ProductCard';

export const FavouritesPage = () => {
  const { favorites } = useCart();

  if (favorites.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Favourites</h2>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No favorites yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Favourites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
