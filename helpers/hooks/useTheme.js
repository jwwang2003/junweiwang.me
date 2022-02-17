import { useState, useEffect } from "react"

export const useTheme = () => {
  const [value, setValue] = useState(
    typeof window !== "undefined" ?
      (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || document.documentElement.classList.contains('dark')) ? 'dark' : ''
      :
      null
  )

  useEffect(() => {
    setValue(
      (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || document.documentElement.classList.contains('dark')) ? 'dark' : '')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', value)
  }, [value])

  return [value, setValue]
};