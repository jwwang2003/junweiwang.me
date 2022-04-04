import { useState, useEffect } from 'react'
import { useTheme } from '../helpers/hooks/useTheme'
import clsx from 'clsx'
import 'normalize.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")

    if (theme === "dark") document.documentElement.classList.add("dark")
    else if (theme !== null) document.documentElement.classList.remove("dark")

    let listener = () => {
      if (media.matches) {
        setTheme("dark")
        document.documentElement.classList.add("dark")
      }
      else {
        setTheme("")
        document.documentElement.classList.remove("dark")
      }
    }

    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [theme, setTheme])

  useEffect(() => setLoaded(true), [])
  
  return <>
    <Script src="/darkTheme.js" strategy="beforeInteractive" />
      <div className={clsx("font-light flex flex-col bg-zinc-100 dark:bg-black dark:text-white min-h-screen", loaded && "transition-color duration-300")}>
      <Navigation theme={theme} setTheme={setTheme} />
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
}

export default MyApp
