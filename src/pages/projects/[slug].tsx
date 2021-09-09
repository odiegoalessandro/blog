import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs, getProjectBySlug } from '../../utils/projects'
import { Box, Center, Heading } from '@chakra-ui/react'
import Content from '../../styles/Content'

export default function Slug({data}){
  return(
    <Center>
      <Box 
        marginTop="8rem"
        w="45rem"
        marginBottom="4rem"
      >
        <Heading 
          fontSize="5xl"
          marginBottom="4rem"
          textTransform="capitalize"
        >
          {data.metadata.title}
        </Heading>
        <Content dangerouslySetInnerHTML={{__html: data.content}} />
      </Box>
    </Center>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSlugs().map(path => `/projects/${path}`)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getProjectBySlug((context.params.slug).toString())

  return {
    props: {
      data
    }
  }
}