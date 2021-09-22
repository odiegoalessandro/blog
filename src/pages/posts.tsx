import { GetStaticProps } from "next"
import PostType from "../types/PostType"
import { getAllPosts } from "../utils/posts"
import Head from 'next/head'
import React from "react"
import { Box, Center, Heading, Text, List, ListItem, ListProps, ListItemProps } from "@chakra-ui/react"
import Card from "../components/Card"
import { motion, Variants } from "framer-motion"

interface PostsProps {
  posts: PostType[]
}

const MotionList = motion<ListProps>(List)
const MotionListItem = motion<ListItemProps>(ListItem)

const ListVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const ListItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Center
        minH="100vh"
        alignItems="flex-start"
        px={{
          base: "1.5rem",
          sm: "5rem",
          md: "10rem",
          lg: "15rem",
          xl: "20rem"
        }}
      >
        <Box w="full">
          <Heading 
            marginTop="8rem"
            fontSize={{
              base: "3xl",
              xl: "5xl",
              lg: "4xl",
              md: "4xl",
              sm: "4xl"
            }}
          >
            Postagens
          </Heading>
          <Text opacity=".7" marginTop=".5rem">
            Alguns posts que possam te ajudar
          </Text>
          <Center>
            <MotionList
              marginTop="4rem"
              initial="hidden"
              w="full"
              animate="visible"
              variants={ListVariants}
            >
              {
                posts.map((project, index) => (
                  <MotionListItem
                    key={index}
                    variants={ListItemVariants}
                  >
                    <Card
                      content={project}
                      type="post"
                    />
                  </MotionListItem>
                ))
              }
            </MotionList>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  
  return {
    props: {
      posts
    }
  }
}