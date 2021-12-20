import { NextSeo } from "next-seo"
import { motion } from "framer-motion"

const animationVariants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -200, y: 0},
}

export default function Layout({ children, title, description }) {
  return (
    <div className="w-full">
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={animationVariants}
        transition={{ type: 'linear' }}
        className="bg-white rounded-md shadow-xl backdrop-blur-sm"
      >
        {children}
      </motion.main>
    </div>
  )
}