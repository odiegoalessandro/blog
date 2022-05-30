import { motion, Variants } from "framer-motion"
import Head from "next/head"
import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
  title: string
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
    y: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: {
    x: 50,
    y: -0,
    opacity: 0,
  },
}

export default function PostLayout({ children, title }: LayoutProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.2,
        type: "easeInOut",
        delay: 0.2,
      }}
      style={{ position: "relative", marginTop: "4rem" }}
    >
      {title && (
        <Head>
          <title>{title} - odiegoalessandro</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
      )}
      {children}
    </motion.div>
  )
}
