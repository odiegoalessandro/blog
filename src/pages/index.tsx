import { Center } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Main from '../components/Main'
import { getLatestProjects } from '../utils/projects'

export default function Home({ projects }) {
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
        <Main cardContent={projects} />
      </Center>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getLatestProjects()

  return {
    props: {
      projects
    }
  }
}