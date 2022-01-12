import { useState, useEffect } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import useScrollListener from '../utils/hooks/useScrollListener';

import 'normalize.css';
import '../styles/globals.scss';

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

function MyApp(props) {
  const { Component, pageProps, router } = props;

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
      <Component {...pageProps} key={router.route} />
      <Footer />
    </div>
  );
}

export default MyApp;
