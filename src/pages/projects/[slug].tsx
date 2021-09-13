import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs, getProjectBySlug } from '../../utils/projects'
import { Box, Center, Heading } from '@chakra-ui/react'
import Content from '../../styles/Content'

export default function Slug({data}){
  return(
    <Center
      flexDir="column"
      marginTop="10rem"
      px={{
        base: "2rem",
        sm: "5rem",
        md: "10rem",
        lg: "15rem",
        xl: "20rem"
      }}
    >
      <Box>
        <Heading 
          fontSize={{
            base: "4xl",
            xl: "5xl",
            lg: "5xl",
            md: "5xl",
            sm: "4xl"
          }}
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