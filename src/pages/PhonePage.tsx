import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DropDown } from '../components/DropDown/DropDown';
import { ProductCard } from '../components/ProductCard';
import { getProducts } from '../api/getProducts';
import type { Product } from '../types/Product';
import { Loader } from '../components/Loader';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(productsFromApi => {
        const phonesFromApi = productsFromApi.filter(
          products => products.category === 'phones',
        );
        setPhones(phonesFromApi);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <h2 className="mt-6 mb-2 tablet:mt-10">Mobile phones</h2>

      {phones.length === 0 ? (
        <p>There are no phones yet</p>
      ) : (
        <>
          <p className="body-text mb-8 tablet:mb-10">{phones.length} models</p>

          <div className="  w-full min-h-20 flex items-center justify-center gap-4 ">
            <DropDown
              value="newest"
              label="Sort by"
              options={[
                { label: 'Newest', value: 'newest' },
                { label: 'Name', value: 'name' },
                { label: 'Price High to Low', value: 'high' },
                { label: 'Price Low to High', value: 'low' },
              ]}
              defaultValue="newest"
            />
            <DropDown
              value="початковий велью сюди"
              label="Items on page"
              options={[
                { label: 'шось', value: 'type' },
                { label: 'шось2', value: 'color' },
                { label: 'шось3', value: 'size' },
                { label: 'шось 4', value: 'mood' },
              ]}
              defaultValue="type"
              className="" // для обгортки
              triggerButtonClassName="" // для кнопки
              dropdownMenuClassName="" // для меню опцій
              itemClassName=""
            />
          </div>

          {isLoading && <Loader />}

          <div className="grid gap-4 justify-center grid-cols-[repeat(auto-fill,_minmax(230px,288px))] mt-6 mb-6 tablet:mb-10">
            {phones.map(phone => (
              <div
                key={phone.id}
                className="w-full h-full flex justify-center bg-amber-400"
              >
                <ProductCard product={phone} />
              </div>
            ))}
          </div>

          <div>Pagination</div>
        </>
      )}
    </div>
  );
};
