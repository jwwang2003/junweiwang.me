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
      name: 'Portfolio',
      href: '/portfolio',
  },
]


export default function Nav() {
  const router = useRouter()

  return (
    <AnimateSharedLayout>
      <div className="w-full  mx-auto mt-8 mb-4">
        <nav className="flex flex-row flex-warp justify-center max-w-xs mx-auto">
          {routes.map(({name, href}) => (
            <Link key={name} href={href} passHref>
              <a>
                {name}
                {isActiveLink(href, router.pathname) && (
                  <motion.div
                    layoutId="navigation-underline"
                    className="navigation-underline"
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