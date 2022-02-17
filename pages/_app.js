import { useEffect } from 'react'
import { useTheme } from '../helpers/hooks/useTheme'
import 'normalize.css'
import '../styles/globals.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const [ theme, setTheme ] = useTheme()

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")

    if(theme === "dark") document.documentElement.classList.add("dark")
    else if(theme !== null) document.documentElement.classList.remove("dark")

    let listener = () => {
      if(media.matches) {
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

  return <>
    <Script src="/darkTheme.js" strategy="beforeInteractive" />
    <div className="font-light flex flex-col bg-zinc-100 dark:bg-black dark:text-white min-h-screen">
      <Navigation theme={theme} setTheme={setTheme} />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}

export default MyApp
