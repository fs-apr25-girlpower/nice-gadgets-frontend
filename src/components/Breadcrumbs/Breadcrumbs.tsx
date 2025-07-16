import { Link, useLocation, useParams } from 'react-router-dom';
import { HomeIcon } from '../../images/icons/HomeIcon';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export const Breadcrumbs = () => {
  const location = useLocation();
  const { itemId } = useParams();

  if (!itemId) return;

  const nameProduct = itemId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  const getPathSegments = () => {
    const pathnames = location.pathname.split('/').filter(x => x);

    if (pathnames.length === 0) {
      return [];
    }

    const segments: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

    let currentPath = '';
    pathnames.forEach((segment, index) => {
      currentPath += `/${segment}`;

      let label = segment.charAt(0).toUpperCase() + segment.slice(1);

      switch (segment) {
        case 'phones':
          label = 'Phones';
          break;
        case 'tablets':
          label = 'Tablets';
          break;
        case 'accessories':
          label = 'Accessories';
          break;
        case 'favourites':
          label = 'Favourites';
          break;
        case 'cart':
          label = 'Cart';
          break;
      }

      if (
        pathnames[index - 1] === 'phones' ||
        pathnames[index - 1] === 'tablets' ||
        pathnames[index - 1] === 'accessories'
      ) {
        label = nameProduct;
      }

      segments.push({
        label,
        path: index === pathnames.length - 1 ? undefined : currentPath,
      });
    });

    return segments;
  };

  const breadcrumbs = getPathSegments();

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav
      className="flex items-center text-small"
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <div
          key={index}
          className="flex items-center"
        >
          {index === 0 ? (
            // Home icon
            <Link
              to="/"
              className="text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-primary transition-colors"
            >
              <HomeIcon />
            </Link>
          ) : (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-secondary dark:text-dark-secondary mx-2"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {breadcrumb.path ? (
                <Link
                  to={breadcrumb.path}
                  className="text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-primary transition-colors"
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span className="text-secondary dark:text-dark-secondary">
                  {breadcrumb.label}
                </span>
              )}
            </>
          )}
        </div>
      ))}
    </nav>
  );
};
