import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const routes = [
  {
      name: 'Home',
      href: '/',
  },
  {
      name: 'Blog',
      href: '/blog',
  },
  {
      name: 'Projects',
      href: '/projects',
  },
]


export default function Nav() {
  const router = useRouter()

  return (
    <AnimateSharedLayout>
      <div className="w-full  mx-auto mt-8 mb-4">
        <nav className="flex flex-row flex-warp justify-center p-2 max-w-xs mx-auto bg-white shadow-xl rounded-md">
          {routes.map(({name, href}) => (
            <Link key={name} href={href} passHref>
              <a className="px-4">
                {name}
                {isActiveLink(href, router.pathname) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="nav-underline"
                    animate
                  />
                )}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </AnimateSharedLayout>
  )
}

const isActiveLink = (href, currentPathname) => {
  if (href === '/') {
      return href === currentPathname
  }

  return currentPathname.startsWith(href)
}