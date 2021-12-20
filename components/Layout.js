import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import HeaderCard from './HeaderCard'
import Nav from './Nav'

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      once: true
    })
  })
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-200">
      <div data-aos-duration="400">
        <HeaderCard />
      </div>
      <div data-aos-duration="400">
        <Nav />
      </div>
      { children }
    </div>
  )
}