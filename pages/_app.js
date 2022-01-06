import App from 'next/app';
import { AnimatePresence } from 'framer-motion';

import 'normalize.css';
import '../styles/globals.scss';

import Skeleton from '../components/Skeleton';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Skeleton className="flex flex-col min-h-screen pt-10 pb-5 px-3 sm:px-5 bg-zinc-900">
        <div content-entrance-animation="" className="mb-6">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </Skeleton>
    );
  }
}

export default MyApp;
