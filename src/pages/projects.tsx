import React from 'react'
import { GetStaticProps } from 'next'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import { getAllProjects } from '../utils/projects'
import dynamic from 'next/dynamic'
const Cards = dynamic(() => import('../components/Cards'))

export default function Project({ projects }){

  return (
    <Center
      px={{
        base: "2rem",
        sm: "5rem",
        md: "10rem",
        lg: "15rem",
        xl: "20rem"
      }}
    >
        <Box w="full">
          <Heading marginTop="10rem">
            Projects
          </Heading>
          <Cards cards={projects} />
        </Box>
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