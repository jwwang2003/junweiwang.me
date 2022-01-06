import propTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

const animationVariants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -200, y: 0 },
};

export default function Layout({ children, title, description }) {
  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={animationVariants}
        transition={{ type: 'linear' }}
        className="flex flex-col items-center"
      >
        {children}
      </motion.main>
    </>
  );
}

Layout.defaultProps = {
  children: null,
  title: '',
  description: '',
};

Layout.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
  description: propTypes.string,
};
