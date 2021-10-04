import { Box, Center } from "@chakra-ui/react"
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { getLatestProjects } from '../utils/projects'
import TechStacks from "../components/TechStacks"
import Welcome from "../components/Welcome"
import PageDown from "../components/PageDown"
import PostType from "../types/PostType"
import { getLatestPosts } from "../utils/posts"
import dynamic from "next/dynamic"

const Projects = dynamic(() => import('../components/Projects'), {
  ssr: false, 
})

const Posts = dynamic(() => import('../components/Posts'), {
  ssr: false
})

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
          <Welcome />
          <TechStacks />
          <PageDown />
          <Projects projects={projects} />
          <Posts posts={posts} />
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