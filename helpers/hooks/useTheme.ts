import { useState, useEffect } from "react"

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined" ?
      (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || document.documentElement.classList.contains('dark')) ? 'dark' : ''
      :
      "light"
  )

  useEffect(() => {
    setTheme(
      (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || document.documentElement.classList.contains('dark')) ? 'dark' : '')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme!)
  }, [theme])

  return {theme, setTheme}
};