import { NavLink } from 'react-router-dom';
import { LikeIcon } from '../../images/icons/LikeIcon';
import { CartIcon } from '../../images/icons/CartIcon';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useAuth } from '../../hooks/useAuth';
export const CustomerBar = () => {
  const cartContext = useContext(CartContext);
  const { user, loading, handleSignIn, handleSignOut } = useAuth();
  if (!cartContext) {
    throw new Error('CustomerBar must be used inside CartProvider');
  }

  const favouritesCount = cartContext.favorites.length;
  const cartCount = cartContext.getTotalItems();

  return (
    <div className="customerBar flex flex-row items-center  h-full  border-l border-r border-elements dark:border-gray-700">
      <NavLink
        to={'/favourites'}
        className="flex justify-center items-center w-12 h-full tablet:w-12 desktop:w-16 mobile:hidden tablet:flex transition-colors border border-elements dark:border-dark-elements hover:border-primary dark:hover:border-purple"
        aria-label="Favourites"
      >
        <LikeIcon favouritesCount={favouritesCount} />
      </NavLink>
      <NavLink
        to={'/cart'}
        className="flex justify-center items-center w-12 h-full tablet:w-12 desktop:w-16 mobile:hidden tablet:flex transition-colors border border-elements dark:border-dark-elements hover:border-primary dark:hover:border-purple"
        aria-label="Cart"
      >
        <CartIcon cartCount={cartCount} />
      </NavLink>
      <BurgerMenu
        favouritesCount={favouritesCount}
        cartCount={cartCount}
      />
      <div className="px-1">
        {loading ? (
          <div className="animate-spin w-2 h-2 border-1 border-primary border-t-transparent rounded-full"></div>
        ) : user ? (
          <div className="flex items-center space-x-2">
            <img
              src={user.photoURL || ''}
              alt={user.displayName || 'User'}
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={handleSignOut}
              className="text-xs px-1 py-1 bg-primary text-white rounded"
            >
              Вийти
            </button>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-3 py-1 bg-primary text-white rounded"
          >
            Увійти
          </button>
        )}
      </div>
    </div>
  );
};
