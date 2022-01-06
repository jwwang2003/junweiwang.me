import propTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Nav from './Nav';
import Footer from './Footer';
import useScrollListener from '../utils/hooks/useScrollListener';

const routes = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
];

export default function Skeleton({ children }) {
  const scroll = useScrollListener();
  const [navClassList, setNavClassList] = useState([]);

  useEffect(() => {
    const classList = [];

    if (scroll.y > 125 && scroll.y - scroll.lastY > 0) { classList.push('-translate-y-full'); }

    setNavClassList(classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-zinc-900 text-white">
      <Nav className={navClassList.join(' ')} routes={routes} />
      {children}
      <Footer />
    </div>
  );
}

Skeleton.defaultProps = {
  children: null,
};

Skeleton.propTypes = {
  children: propTypes.node,
};
