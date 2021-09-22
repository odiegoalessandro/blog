import { Box, Center } from "@chakra-ui/react"
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { getLatestProjects } from '../utils/projects'
import TechStacks from "../components/TechStacks"
import Welcome from "../components/Welcome"
import PageDown from "../components/PageDown"
import Projects from "../components/Projects"
import { motion, Variants } from 'framer-motion'
import PostType from "../types/PostType"
import Posts from "../components/Posts"
import { getLatestPosts } from "../utils/posts"

const variants: Variants = {
  hidden: {
    y: "50px",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: .7,
      staggerChildren: .4
    }
  }
}

const elementVariants: Variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1}
}

interface HomeProps {
  projects: PostType[]
  posts: PostType[]
}

const Home: React.FC<HomeProps> = ({ projects, posts }) => {
  return (
    <>
      <Head>
        <title>Pagina inicial</title>
      </Head>
      <Center 
        px={{
          base: "5rem",
          sm: "5rem",
          md: "10rem",
          lg: "15rem",
          xl: "20rem"
        }}
      >
        <Box>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <motion.div variants={elementVariants}>
              <Welcome />
            </motion.div>
            <motion.div variants={elementVariants}>
              <TechStacks />
            </motion.div>
            <motion.div variants={elementVariants}>
              <PageDown />
            </motion.div>
            <Projects projects={projects} />
            <Posts posts={posts} />
          </motion.div>
        </Box>
      </Center>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const projects = getLatestProjects()
  const posts = getLatestPosts()

  return {
    props: {
      projects,
      posts
    }
  }
}