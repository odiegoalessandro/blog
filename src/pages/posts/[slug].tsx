import { getAllSlugs, getPostBySlug } from "../../utils/posts"
import { GetStaticPaths, GetStaticProps } from "next"
import { Box, Center, Heading, HStack, Text, Image } from "@chakra-ui/react"
import Head from 'next/head'
import React from "react"
import Content from "../../styles/Content"

interface SlugProps {
  data: {
    metadata: {
      author: string
      excerpt: string
      image: string
      title: string
      date: string
      duration: number
    }
    content: string
  }
}

const Slug: React.FC<SlugProps> = ({ data }) => {
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
  ]

  const date = new Date(data.metadata.date)
  const postingDate = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`

  return (
    <>
      <Head>
        <title>{data.metadata.title}</title>
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
            fontSize="5xl"  
          >
            {data.metadata.title}
          </Heading>
          <Text
            opacity=".7"
            fontSize="md"
          >
            {data.metadata.excerpt}
          </Text>
          <HStack marginTop="1rem">
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="#ff0080"
            >
              {data.metadata.author}
            </Text>
            <Text fontSize="sm">
              {postingDate}
            </Text>
            <span>·</span>
            <Text fontSize="sm">
              {data.metadata.duration}min de leitura
            </Text>
          </HStack>
          <Image
            src={`/${data.metadata.image}`}
            marginTop="2rem"
            alt={data.metadata.title}
          />
          <Content 
            dangerouslySetInnerHTML={{__html: data.content}}
          />
        </Box>
      </Center>
    </>
  )
}

export default Slug

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getPostBySlug((context.params.slug).toString())

  return {
    props: {
      data
    }
  }
} 

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSlugs().map(slug => `/posts/${slug}`)
  
  return {
    paths,
    fallback: false
  }
}