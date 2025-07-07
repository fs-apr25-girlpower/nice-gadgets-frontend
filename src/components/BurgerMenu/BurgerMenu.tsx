import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Like } from '../../images/icons/LikeIcon';
import { Cart } from '../../images/icons/ShopCart';
import burgerMenuIcon from '../../images/icons/burger-menu-icon.svg';
import closeIcon from '../../images/icons/close-icon.svg';
import { slide as Menu } from 'react-burger-menu';

// Стилі для бургер-меню
const menuClassName = 'text-[#89939A] text-[12px] font-bold h-80vh  ';
const itemListClassName =
  'w-full flex flex-col items-center justify-start h-full text-center text-[16px] font-bold uppercase gap-4';
const itemClassName =
  'h-10 hover:text-[#000000] focus:text-[#000000] transition-colors duration-300 ease-in-out';
const burgerButtonClassName = ' ';
const customStyles = {
  bmMenuWrap: {
    paddingTop: '24px',
    width: '100vw',
    height: 'calc(100vh - 112px)',
    left: '0',
    top: '48px',
    backgroundColor: '#ffffff',
  },
  bmOverlay: {
    display: 'none',
  },
};

export const BurgerMenu = () => {
  const [isEmpty] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [favouriteCount] = useState<number>(7);
  const [cartCount] = useState<number>(7);
  return (
    <div className="burgerMenu w-12 h-12 tablet:w-16 tablet:h-16 flex items-center justify-center border-r border-[#E2E6E9] tablet:hidden">
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
        <div className="flex flex-row w-full h-16 fixed bottom-0 left-0 right-0  border-[#E2E6E9]  bg-white ">
          <NavLink
            to={'/favourites'}
            className={
              ' w-[50%] h-16 flex bg-white justify-center items-center border border-[#E2E6E9] tablet:w-12 desktop:w-16'
            }
            onClick={() => setIsMobile(false)}
          >
            <Like
              isMobile={isMobile}
              count={favouriteCount}
              isEmpty={isEmpty}
            />
          </NavLink>
          <NavLink
            to={'/cart'}
            className={
              ' w-[50%] h-16 flex bg-white justify-center items-center border border-[#E2E6E9] tablet:w-12 desktop:w-16 '
            }
            onClick={() => setIsMobile(false)}
          >
            <Cart
              isMobile={isMobile}
              count={cartCount}
              isEmpty={isEmpty}
            />
          </NavLink>
        </div>
      )}
    </div>
  );
};
