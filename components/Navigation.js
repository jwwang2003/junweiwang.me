import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { AiFillHome, AiFillCalendar, AiFillCamera } from 'react-icons/ai'
import { MdWbSunny, MdDarkMode } from 'react-icons/md'
import clsx from 'clsx'
import Link from 'next/link'

import useScrollListener from '../helpers/hooks/useScrollListener'

export default function Navigation() {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const [hideNav, setHideNav] = useState(false)
  const scroll = useScrollListener()

  useEffect(() => {
    if (scroll.y > 225 && scroll.y - scroll.lastY > 0) setHideNav(true)
    else setHideNav(false)

  }, [scroll.y, scroll.lastY])
  
  if (!mounted) return null

  return <nav
    className={
      clsx(hideNav && '-translate-y-full',
      'sticky top-0 z-10',
      'flex items-center',
      'p-3 sm:px-8',
      'bg-white dark:bg-neutral-900 transition-transform duration-300 ease-in-out')
    }>
    <h1 className="flex justify-center font-medium mr-auto">
      <p className="text-xl">{'<'}</p>
      <a className="text-2xl text-blue-500 font-bold">JW</a>
      <p className="text-xl">{'/>'}</p>
    </h1>
    <section className="text-2xl flex flex-row items-center">
      <Link href="/" passHref>
        <a className="mx-2 first:ml-0 last:mr-0">
          <AiFillHome />
        </a>
      </Link>
      <Link href="/blog" passHref>
        <a className="mx-2 first:ml-0 last:mr-0">
          <AiFillCalendar />
        </a>
      </Link>
      <Link href="/gallery" passHref>
        <a className="mx-2 first:ml-0 last:mr-0">
          <AiFillCamera />
        </a>
      </Link>
      <a className="cursor-pointer mx-2 first:ml-0 last:mr-0">
        {
          theme === "dark" ? 
          <MdWbSunny onClick={() => setTheme("light")} /> :
          <MdDarkMode onClick={() => setTheme("dark")} />
        }
      </a>
    </section>
  </nav>
}