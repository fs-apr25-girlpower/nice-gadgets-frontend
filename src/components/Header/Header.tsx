import { Logo } from '../../images/logos/Logo';
import { NavLink, useLocation } from 'react-router-dom';
import { CustomerBar } from '../CustomerBar.tsx/CustomerBar';
import { useLanguage } from '../../context/language/useLanguage';
import { headerDictionary } from '../../i18n/headerDictionary';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { GlassIcon } from '../../images/icons/GlassIcon';
import * as Switch from '@radix-ui/react-switch';
import clsx from 'clsx';
import { ArrowDown } from '../../images/icons/ArrowDown';
import { useState } from 'react';
//import { useLanguage } from '../../context/language/LanguageContext';

export const Header = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const { pathname } = useLocation();

  // Стан для контролю видимості дропдауну
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: 'ua' | 'en') => {
    setLanguage(lang);
  };

  const headerClass =
    'header flex flex-row sticky top-0 justify-between items-center w-full gap-12 bg-white dark:bg-dark-background z-10000 mobile:h-12 desktop:h-16 pl-[18px] border-b border-elements dark:border-dark-border font-bold text-[12px]';
  const navItemClass =
    'flex items-center h-full relative hover:text-primary dark:hover:text-white';

  const isActive = ({ isActive }: { isActive: boolean }) =>
    `flex h-full w-full items-center relative before:content-[''] before:absolute before:bottom-[0] before:left-0 before:h-[3px] before:bg-black dark:before:bg-white before:transition-all hover:before:w-full hover:text-primary dark:hover:text-white focus:before:w-full focus:text-primary dark:focus:text-white ${
      isActive
        ? 'text-primary dark:text-dark-primary nav-active before:w-full'
        : 'text-secondary dark:text-dark-secondary before:w-0'
    }`;

  const isVisibleGlassButton =
    !pathname.includes('phones') &&
    !pathname.includes('tablets') &&
    !pathname.includes('accessories') &&
    !pathname.includes('allProducts');

  return (
    <>
      <header className={headerClass}>
        <nav className="h-full flex flex-row items-center text-center gap-11 sticky top-0 bg-white dark:bg-dark-background z-10000">
          <NavLink
            to={'/'}
            className="w-16 md:w-20 h-7 m:h-[22px]"
          >
            <Logo />
          </NavLink>
          <ul className="h-full flex flex-row justify-between gap-16 tablet:gap-12 items-center text-center uppercase text-secondary dark:text-dark-secondary mobile:hidden tablet:flex">
            <li className={navItemClass}>
              <NavLink
                to={'/'}
                className={isActive}
              >
                {/* home */}
                {headerDictionary[currentLanguage].main}
              </NavLink>
            </li>
            <li className={navItemClass}>
              <NavLink
                to={'/phones'}
                className={isActive}
              >
                {/* phones */}
                {headerDictionary[currentLanguage].phones}
              </NavLink>
            </li>
            <li className={navItemClass}>
              <NavLink
                to={'/tablets'}
                className={isActive}
              >
                {/* tablets */}
                {headerDictionary[currentLanguage].tablets}
              </NavLink>
            </li>
            <li className={navItemClass}>
              <NavLink
                to={'/accessories'}
                className={isActive}
              >
                {/* accessories */}
                {headerDictionary[currentLanguage].accessories}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="right-container flex flex-row h-full">
          {isVisibleGlassButton && (
            <NavLink
              to={'/allProducts'}
              className="flex items-center justify-center p-2 rounded transition-colors hover:bg-secondary dark:hover:bg-dark-button-purple-hover"
              aria-label="Search"
            >
              <GlassIcon />
            </NavLink>
          )}

          {/* <div className="flex items-center gap-4">
           

            <div className="flex items-center gap-2">
              <span
                className={clsx(
                  'text-sm font-bold select-none',
                  currentLanguage === 'en'
                    ? 'text-primary dark:text-purple'
                    : 'text-secondary dark:text-dark-secondary',
                )}
              >
                EN
              </span>

              <Switch.Root
                checked={currentLanguage === 'ua'}
                onCheckedChange={() =>
                  handleLanguageChange(currentLanguage === 'en' ? 'ua' : 'en')
                }
                className={clsx(
                  'w-12 h-6 rounded-full relative transition-colors duration-200 cursor-pointer outline-none border-2',
                  'bg-elements dark:bg-dark-elements border-elements dark:border-dark-elements',
                  'hover:bg-secondary dark:hover:bg-dark-button-purple-hover',
                )}
              >
                <Switch.Thumb
                  className={clsx(
                    'block w-5 h-5 rounded-full shadow-md transition-transform duration-200',
                    currentLanguage === 'ua'
                      ? 'bg-white translate-x-6'
                      : 'bg-white translate-x-1',
                  )}
                />
              </Switch.Root>

              <span
                className={clsx(
                  'text-sm font-bold select-none',
                  currentLanguage === 'ua'
                    ? 'text-primary dark:text-purple'
                    : 'text-secondary dark:text-dark-secondary',
                )}
              >
                UA
              </span>
            </div>

            <ThemeSwitcher />
          </div> */}

          {/* Дропдаун для інших кнопок */}
          <div className="dropdown-icon relative">
            <button
              aria-label="More options"
              className="flex items-center justify-center p-2 rounded h-full transition-colors hover:bg-secondary dark:hover:bg-dark-button-purple-hover focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <ArrowDown className="h-5 w-5" />
            </button>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-20 mt-12 desktop:mt-16 w-35 bg-white dark:bg-dark-background border border-elements dark:border-dark-border rounded-md shadow-lg z-20000">
              {/* переключатель мови */}
              <div className="flex items-center gap-2 p-2">
                <span
                  className={clsx(
                    'text-sm font-bold select-none',
                    currentLanguage === 'en'
                      ? 'text-primary dark:text-purple'
                      : 'text-secondary dark:text-dark-secondary',
                  )}
                >
                  EN
                </span>

                <Switch.Root
                  checked={currentLanguage === 'ua'}
                  onCheckedChange={() =>
                    handleLanguageChange(currentLanguage === 'en' ? 'ua' : 'en')
                  }
                  className={clsx(
                    'w-12 h-6 rounded-full relative transition-colors duration-200 cursor-pointer outline-none border-2',
                    'bg-elements dark:bg-dark-elements border-elements dark:border-dark-elements',
                    'hover:bg-secondary dark:hover:bg-dark-button-purple-hover',
                  )}
                >
                  <Switch.Thumb
                    className={clsx(
                      'block w-5 h-5 rounded-full shadow-md transition-transform duration-200',
                      currentLanguage === 'ua'
                        ? 'bg-white translate-x-6'
                        : 'bg-white translate-x-1',
                    )}
                  />
                </Switch.Root>

                <span
                  className={clsx(
                    'text-sm font-bold select-none',
                    currentLanguage === 'ua'
                      ? 'text-primary dark:text-purple'
                      : 'text-secondary dark:text-dark-secondary',
                  )}
                >
                  UA
                </span>
              </div>

              {/* Перемикач теми */}
              <div className="p-2">
                <ThemeSwitcher />
              </div>
            </div>
          )}

          <CustomerBar />
        </div>
      </header>
    </>
  );
};
