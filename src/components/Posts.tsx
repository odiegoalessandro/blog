import { Box, Heading, Center, Link as LinkStyle, useColorModeValue, VStack } from "@chakra-ui/react"
import Link from 'next/link'
import Card from '../components/Card'
import PostType from "../types/PostType"
import { motion, Variants } from 'framer-motion'
import React from "react"

interface PostsProps {
  posts: PostType[]
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: "-200px"
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: .5,
      duration: .6,
    }
  }
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return(
    <Box>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}        
      >
        <Heading 
          marginTop="5rem"
          fontSize={{
            xl: "3xl",
            lg: "3xl",
            md: "3xl",
            sm: "xl"
          }}
        >
          Ultimas postagens
        </Heading>
        <VStack marginTop="2rem">
          {
            posts.map((post, index) => (
              <Card 
                content={post}
                key={index}
                type="post"
              />
            ))
          }
        </VStack>
        <Center marginTop="1rem">
          <Link href="/posts">
            <LinkStyle
              _hover={{
                bgColor: useColorModeValue("gray.300", "gray.600")
              }}
              w="100px"
              h="40px"
              bgColor={useColorModeValue("gray.100", "gray.700")}
              fontWeight="bold"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="sm"
            >
              Ver mais
            </LinkStyle>
          </Link>
        </Center>
      </motion.div>
    </Box>
  )
}

export default Posts