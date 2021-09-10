import { Flex, Center } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
import Main from '../components/Main'
import { getLatestProjects } from '../utils/projects'

export default function Home({ projects }) {
  return (
    <Center>
      <Flex
        flexDir="column"
        w="45rem"
        align="center"
      >
        <Main cardContent={projects} />
      </Flex>
    </Center>
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