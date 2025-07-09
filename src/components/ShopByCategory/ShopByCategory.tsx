import { NavLink } from 'react-router-dom';
import phone from '/img/categories/category-phones.webp';
import tablet from '/img/categories/category-tablets.webp';
import phones from '/img/categories/category-accessories.webp';

export const ShopByCategory = () => {
  return (
    <section className="mt-14 sm:mt-16 lg:mt-20">
      <div className="flex flex-col w-full">
        <h2 className="h2 color-primary mb-5 self-start">Shop by category</h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/phones"
            className="flex flex-col w-full sm:w-1/3 lg:w-[30%]"
          >
            <div className="w-full aspect-square overflow-hidden mb-4">
              <img
                src={phone}
                alt="Phone"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h4 className="h4 color-primary mb-1 hover:underline transition-all duration-200">
              Mobile phones
            </h4>
            <p className="color-secondary mb-6">
              95 models{/* mobile phones .lenght */}
            </p>
          </NavLink>

          <NavLink
            to="/tablets"
            className="flex flex-col w-full sm:w-1/3 lg:w-[30%]"
          >
            <div className="w-full aspect-square overflow-hidden mb-4">
              <img
                src={tablet}
                alt="Tablets"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h4 className="h4 color-primary mb-1 hover:underline transition-all duration-200">
              Tablets
            </h4>
            <p className="color-secondary mb-6">
              95 models{/* Tablets .lenght */}
            </p>
          </NavLink>

          <NavLink
            to="/accessories"
            className="flex flex-col w-full sm:w-1/3 lg:w-[30%]"
          >
            <div className="w-full aspect-square overflow-hidden mb-4">
              <img
                src={phones}
                alt="Phone"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
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
