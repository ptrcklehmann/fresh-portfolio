import Footer from '../components/footer'
import Meta from '../components/meta'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion'

export default function Layout({ preview, children }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  return (
    <>
      <Meta />
      <Navbar />
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial='hidden' // Set the initial state to variants.hidden
          animate='enter' // Animated state to variants.enter
          exit='exit' // Exit state (used later) to variants.exit
          transition={{ type: 'easy-in-out' }} // Set the transition to linear
          className='min-h-screen'
        >
          {children}
        </motion.main>
      <Footer />
    </>
  )
}
