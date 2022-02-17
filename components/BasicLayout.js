import { useEffect } from 'react'

import Navigation from './Navigation'
import Footer from './Footer'
import { useTheme } from '../helpers/hooks/useTheme'

export default function BasicLayout({ children }) {
  const [theme, setTheme] = useTheme()

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

  return <div className="font-light flex flex-col bg-zinc-100 dark:bg-black dark:text-white min-h-screen">
    <Navigation theme={theme} setTheme={setTheme} />
    { children }
    <Footer />
  </div>
}