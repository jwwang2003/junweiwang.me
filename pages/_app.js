import { useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import 'normalize.css'
import '../styles/globals.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider
    defaultTheme='system'
    attribute='class'>
    <Script src="/darkTheme.js" strategy="beforeInteractive" />
    <div className="font-light flex flex-col bg-zinc-100 dark:bg-black dark:text-white min-h-screen">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  </ThemeProvider>
}

export default MyApp
