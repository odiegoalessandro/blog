import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'

const MotionBox = motion<BoxProps>(Box)

const animationFlex = {
  hidden: { 
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
  }
}

export default function LoadText({ children }){
  return (
    <LazyMotion features={domAnimation}>
      <MotionBox
        animate="visible"
        initial="hidden"
        variants={animationFlex}
        minH="100vh"
        transition={{type: "spring"}}
      >
        {children}
      </MotionBox>
    </LazyMotion>
  )
}