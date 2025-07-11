import { NavLink } from 'react-router-dom';
import phoneImage from '/img/categories/category-phones.webp';
import tabletImage from '/img/categories/category-tablets.webp';
import phonesImage from '/img/categories/category-accessories.webp';
import { usePhones } from '../../context/PhonesContext';
import { useTablets } from '../../context/TabletsContext';
import { useAccessories } from '../../context/AccessoriesContext';

export const ShopByCategory = () => {
  const phonesLength = usePhones().length;
  const tabletsLength = useTablets().length;
  const accessoriesLength = useAccessories().length;

  return (
    <section className="mt-14 tablet:mt-16 desktop:mt-20">
      <div className="flex flex-col">
        <h2 className="h2 color-primary mb-5 self-start">Shop by category</h2>

        <div className="flex flex-col tablet:flex-row gap-4">
          <NavLink
            to="/phones"
            className="flex flex-col w-full tablet:w-1/3 desktop:w-1/3"
          >
            <div className="w-full aspect-square mb-4 transition-transform duration-300 hover:scale-110">
              <img
                src={phoneImage}
                alt="Phone"
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="h4 color-primary mb-1 hover:underline transition-all duration-200">
              Mobile phones
            </h4>

            <p className="color-secondary mb-6">{phonesLength} models</p>
          </NavLink>

          <NavLink
            to="/tablets"
            className="flex flex-col w-full tablet:w-1/3 desktop:w-1/3 "
          >
            <div className="w-full aspect-square mb-4 transition-transform duration-300 hover:scale-110">
              <img
                src={tabletImage}
                alt="Tablets"
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="h4 color-primary mb-1 hover:underline transition-all duration-200">
              Tablets
            </h4>

            <p className="color-secondary mb-6">{tabletsLength} models</p>
          </NavLink>

          <NavLink
            to="/accessories"
            className="flex flex-col w-full tablet:w-1/3 desktop:w-1/3"
          >
            <div className="w-full aspect-square mb-4 transition-transform duration-300 hover:scale-110">
              <img
                src={phonesImage}
                alt="Phone"
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="h4 color-primary mb-1 hover:underline transition-all duration-200">
              Accessories
            </h4>

            <p className="color-secondary">{accessoriesLength} models</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
