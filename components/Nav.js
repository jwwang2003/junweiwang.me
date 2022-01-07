import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const isActiveLink = (href, currentPathname) => {
  if (href === '/') {
    return href === currentPathname;
  }
  return currentPathname.startsWith(href);
};

export default function Nav({ className, routes }) {
  const router = useRouter();

  return (
    <nav
      id="nav"
      className={`${className} flex flex-row rounded my-4 mx-auto z-10 sticky top-0 p-3 bg-opacity-25 backdrop-blur-sm shadow-xl transition-transform duration-300 ease-in-out`}
      style={{ backgroundColor: '#24C7CB' }}
    >
      {routes.map(({ name, href }) => (
        <Link key={href} href={href} passHref>
          <a href={href} className={`${isActiveLink(href, router.pathname) ? 'text-white' : 'text-gray-200'} px-4 transition-color duration-150`}>
            {name}
          </a>
        </Link>
      ))}
    </nav>
  );
}

Nav.defaultProps = {
  className: '',
  routes: [],
};

Nav.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};
