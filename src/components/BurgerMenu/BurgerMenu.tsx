import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LikeIcon } from '../../images/icons/LikeIcon';
import { CartIcon } from '../../images/icons/CartIcon';
import burgerMenuIcon from '../../images/icons/burger-menu-icon.svg';
import closeIcon from '../../images/icons/close-icon.svg';
import { slide as Menu } from 'react-burger-menu';
import { menuClassName } from './BurgerMenuStyles';
import { itemListClassName } from './BurgerMenuStyles';
import { itemClassName } from './BurgerMenuStyles';
import { burgerButtonClassName } from './BurgerMenuStyles';
import { customStyles } from './BurgerMenuStyles';

interface BurgerMenuProps {
  favouritesCount: number;
  cartCount: number;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  favouritesCount,
  cartCount,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  return (
    <div className="burgerMenu w-12 h-12 tablet:w-16 tablet:h-16 flex items-center justify-center border-r border-elements tablet:hidden">
      <Menu
        right
        isOpen={isMobile}
        onStateChange={({ isOpen }) => setIsMobile(isOpen)}
        customBurgerIcon={
          isMobile ? (
            <img
              src={closeIcon}
              alt="Close"
            />
          ) : (
            <img
              src={burgerMenuIcon}
              alt="Menu"
            />
          )
        }
        customCrossIcon={false}
        menuClassName={menuClassName}
        itemListClassName={itemListClassName}
        itemClassName={itemClassName}
        burgerButtonClassName={burgerButtonClassName}
        styles={customStyles}
      >
        <NavLink
          to={'/'}
          className="menu-item"
          onClick={() => setIsMobile(false)}
        >
          Home
        </NavLink>
        <NavLink
          to={'/phones'}
          className="menu-item"
          onClick={() => setIsMobile(false)}
        >
          Phones
        </NavLink>
        <NavLink
          to={'/tablets'}
          className="menu-item"
          onClick={() => setIsMobile(false)}
        >
          Tablets
        </NavLink>
        <NavLink
          to={'/accessories'}
          className="menu-item"
          onClick={() => setIsMobile(false)}
        >
          Accessories
        </NavLink>
      </Menu>
      {isMobile && (
        <div className="flex flex-row w-full h-16 fixed bottom-0 left-0 right-0  border-elements  bg-white ">
          <NavLink
            to={'/favourites'}
            className={
              ' w-[50%] h-16 flex bg-white justify-center items-center border border-elements tablet:w-12 desktop:w-16'
            }
            onClick={() => setIsMobile(false)}
          >
            <LikeIcon
              isMobile={isMobile}
              favouritesCount={favouritesCount}
            />
          </NavLink>
          <NavLink
            to={'/cart'}
            className={
              ' w-[50%] h-16 flex bg-white justify-center items-center border border-elements tablet:w-12 desktop:w-16 '
            }
            onClick={() => setIsMobile(false)}
          >
            <CartIcon
              isMobile={isMobile}
              cartCount={cartCount}
            />
          </NavLink>
        </div>
      )}
    </div>
  );
};
