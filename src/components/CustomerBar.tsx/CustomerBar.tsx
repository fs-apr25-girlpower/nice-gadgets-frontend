import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Like } from '../../images/icons/LikeIcon';
import { Cart } from '../../images/icons/ShopCart';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const CustomerBar = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [favouriteCount] = useState<number>(7);
  const [cartCount] = useState<number>(7);
  const onHandleClick = () => {
    setIsEmpty(prev => !prev);
  };

  return (
    <div className="customerBar flex flex-row items-center  h-full  border-l border-r border-[#E2E6E9]">
      <NavLink
        onClick={onHandleClick}
        to={'/favourites'}
        className="flex justify-center items-center w-12 h-full tablet:w-12 desktop:w-16  border-r border-[#E2E6E9] mobile:hidden tablet:flex"
      >
        <Like
          count={favouriteCount}
          isEmpty={isEmpty}
        />
      </NavLink>

      <NavLink
        onClick={onHandleClick}
        to={'/cart'}
        className="flex justify-center items-center w-12 h-full tablet:w-12  desktop:w-16   mobile:hidden tablet:flex"
      >
        <Cart
          count={cartCount}
          isEmpty={isEmpty}
        />
      </NavLink>

      <BurgerMenu />
    </div>
  );
};
