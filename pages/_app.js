import Script from 'next/script'
import { useEffect } from 'react'
import 'normalize.css'
import '../styles/globals.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useTheme } from '../helpers/hooks/useTheme'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useTheme()

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")

    if(theme === "dark") document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")

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
    <Script type="text/javascript" src="/darkTheme.js" strategy="beforeInteractive" />
    <div className="font-light flex flex-col bg-zinc-100 dark:bg-black dark:text-white min-h-screen transition-color duration-300 ease-in-out">
      <Navigation theme={theme} setTheme={setTheme} />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}

export default MyApp
