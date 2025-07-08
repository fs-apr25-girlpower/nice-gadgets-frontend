import { NavLink } from 'react-router-dom';
import { Logo } from '../../images/logos/Logo';

export const Footer = () => {
  return (
    <footer className="test border-t border-t-gray-400 py-8 min-w-[288px] sm:min-w-[192px]">
      <div
        className="
        max-w-[1440px] mx-auto
        flex flex-col gap-8 items-start
        sm:flex-row sm:items-center sm:justify-between
        px-4 sm:px-8
      "
      >
        <NavLink
          to="/"
          className="flex-shrink-0"
        >
          <Logo />
        </NavLink>

        <nav className="w-full sm:w-auto">
          <ul
            className="
            flex flex-col gap-2 
            sm:flex-row sm:gap-12
            font-semibold text-gray-400
            uppercase tracking-wide
            items-start sm:items-center
          "
          >
            <li>
              <a
                href="#"
                className="hover:text-black"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black"
              >
                Contacts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black"
              >
                Rights
              </a>
            </li>
          </ul>
        </nav>

        {/* Back to top */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
          <span className="text-gray-400 text-base">Back to top</span>
          <button className="border border-gray-300 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition">
            <span className="text-xl">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
