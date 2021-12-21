import App from 'next/app'
import { AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'normalize.css'
import '../styles/globals.scss'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HeaderCard from '../components/HeaderCard'
import Nav from '../components/Nav'

class MyApp extends App {
  componentDidMount() {
    AOS.init({
      once: true
    })
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <div className="flex flex-col min-h-screen pt-10 pb-5 px-3 sm:px-5 bg-gray-200">
        <div header-entrance-animation="">
          <HeaderCard />
        </div>
        <div nav-entrance-animation="" className="sticky top-0 z-10">
          <Nav />
        </div>
        <div content-entrance-animation="" className="mb-6" >
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
        <footer className="mt-auto text-center">
          <p className="text-xs sm:text-base text-gray-600 w-full inline-block">
            © 2021
          </p>
          <p className="text-xs sm:text-base text-gray-600 w-full inline-block">
            小王曾路过这里
          </p>
          <ToastContainer />
        </footer>
      </div>
    )
  }
}

export default MyApp;