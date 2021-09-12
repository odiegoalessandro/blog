import React from 'react'
import { GetStaticProps } from 'next'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import { getAllProjects } from '../utils/projects'
import dynamic from 'next/dynamic'
const Cards = dynamic(() => import('../components/Cards'))

export default function Project({ projects }){

  return (
    <Center>
      <Flex
        flexDir="column"
        w="45rem"
        align="center"
      >
        <Box w="100%">
          <Heading marginTop="10rem">Projects</Heading>
          <Cards cards={projects} />
        </Box>
      </Flex>
    </Center>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects()
  
  return {
    props: {
      projects
    }
  }
}