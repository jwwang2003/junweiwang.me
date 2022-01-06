import PropTypes from 'prop-types';
import { AnimateSharedLayout } from 'framer-motion';
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
    <AnimateSharedLayout>
      <nav
        className={`${className} flex flex-col flex-warp sm:flex-row sm:justify-center w-full z-10 sticky top-0 p-3 px-6 bg-opacity-25 backdrop-blur-sm shadow-xl transition-transform duration-300 ease-in-out`}
        style={{ backgroundColor: '#24C7CB' }}
      >
        <h1 className="font-light text-center sm:mr-auto">Jun Wei Wang</h1>
        <div className="flex flex-row justify-center sm:justify-normal">
          {routes.map(({ name, href }) => (
            <Link key={href} href={href} passHref>
              <a href={href} className={`${isActiveLink(href, router.pathname) ? 'text-white' : 'text-gray-300'} px-4 transition-color duration-150`}>
                {name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </AnimateSharedLayout>
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
