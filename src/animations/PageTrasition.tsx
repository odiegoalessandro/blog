import { motion, Variants } from "framer-motion";

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: -200,
    y: 0
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100
  },
}

export default function PageTrasition({children}){
  return(
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }} 
    >
      {children}
    </motion.main>
  )
}