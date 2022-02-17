import { useState, useEffect } from "react"

export const useTheme = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(
      (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : '')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', value)
  }, [value])

  return [value, setValue]
};