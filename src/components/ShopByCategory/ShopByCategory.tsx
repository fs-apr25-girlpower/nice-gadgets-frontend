import { NavLink } from 'react-router-dom';
import phone from '/img/categories/category-phones.webp';
import tablet from '/img/categories/category-tablets.webp';
import phones from '/img/categories/category-accessories.webp';

export const ShopByCategory = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-72 sm:w-148 lg:w-284 mx-auto">
        <h2 className="h2 color-primary mb-5 self-start">Shop by category</h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/phones"
            className="w-72 sm:w-46 lg:w-92"
          >
            <img
              src={phone}
              alt="Phone"
              className="w-72 h-72 overflow-hidden mb-5 sm:w-46 sm:h-46 lg:w-92 lg:h-92 transition-transform duration-300 hover:scale-110"
            />
            <h4 className="h4 color-primary mb-1 hover:underline transition-all duration-200">
              Mobile phones
            </h4>
            <p className="color-secondary mb-6">
              95 models{/* mobile phones .lenght */}
            </p>
          </NavLink>

          <NavLink
            to="/tablets"
            className="w-72 sm:w-46 lg:w-92"
          >
            <img
              src={tablet}
              alt="Tablets"
              className="w-72 h-72 overflow-hidden mb-5 sm:w-46 sm:h-46 lg:w-92 lg:h-92 transition-transform duration-300 hover:scale-110"
            />
            <h4 className="h4 color-primary mb-1 hover:underline transition-all duration-200">
              Tablets
            </h4>
            <p className="color-secondary mb-6">
              95 models{/* Tablets .lenght */}
            </p>
          </NavLink>

          <NavLink
            to="/accessories"
            className="w-72 sm:w-46 lg:w-92"
          >
            <img
              src={phones}
              alt="Phone"
              className="w-72 h-72 overflow-hidden mb-5 sm:w-46 sm:h-46 lg:w-92 lg:h-92 transition-transform duration-300 hover:scale-110"
            />
            <h4 className="h4 color-primary mb-1 hover:underline transition-all duration-200">
              Accessories
            </h4>
            <p className="color-secondary">
              95 models{/* mobile phones .lenght */}
            </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
