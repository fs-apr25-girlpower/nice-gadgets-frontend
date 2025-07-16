import { Logo } from '../../images/logos/Logo';
import { NavLink, useLocation } from 'react-router-dom';
import { CustomerBar } from '../CustomerBar.tsx/CustomerBar';
import { useLanguage } from '../../context/language/useLanguage';
import { headerDictionary } from '../../i18n/headerDictionary';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { GlassIcon } from '../../images/icons/GlassIcon';
//import { useLanguage } from '../../context/language/LanguageContext';

export const Header = () => {
  const { currentLanguage, setLanguage } = useLanguage(); // Використовуємо хук для доступу до мови та її зміни
  const { pathname } = useLocation();

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

        {isVisibleGlassButton && (
          <NavLink to={'/allProducts'}>
            <GlassIcon />
          </NavLink>
        )}

        <div className="flex items-center gap-4">
          <div className="language-switcher flex gap-2">
            <button
              onClick={() => handleLanguageChange('ua')}
              className={`px-3 py-1 rounded text-white ${currentLanguage === 'ua' ? 'bg-button-active dark:bg-dark-button-active' : 'bg-button-inactive dark:bg-dark-button-inactive hover:bg-button-hover dark:hover:bg-dark-button-hover'}`}
            >
              UA
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-3 py-1 rounded text-white ${currentLanguage === 'en' ? 'bg-button-active dark:bg-dark-button-active' : 'bg-button-inactive dark:bg-dark-button-inactive hover:bg-button-hover dark:hover:bg-dark-button-hover'}`}
            >
              EN
            </button>
          </div>

          <ThemeSwitcher />
        </div>

        <CustomerBar />
      </header>
    </>
  );
};
