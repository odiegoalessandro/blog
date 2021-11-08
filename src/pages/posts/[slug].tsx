import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { Container, Heading, HStack, Text, Image, useColorModeValue } from "@chakra-ui/react"
import Article from "../../components/article"
import { getAllSlugs, getPostBySlug } from "../../lib/posts"
import Markdown from "../../components/markdown"
import Section from "../../components/section"

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

const Slug = ({ data }: SlugProps) => {
  const date = new Date(data.metadata.date)
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
  const postingDate = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`

  return (
    <Article title={data.metadata.title}>
      <Container mt={10} px={{base: "1rem"}} overflow="hidden">
        <Section delay={0.1}>
          <Heading as="h2" size="xl">
            {data.metadata.title}
          </Heading>
          <Text 
            as="span"
            fontSize="sm"
            opacity=".6"
          >
            {data.metadata.excerpt}
          </Text>
          <HStack mt={3}>
            <Text 
              fontSize="sm"
              as="span"
              color={useColorModeValue("glassTeal", "deepPink")}
              fontWeight="bold"
            >
              {data.metadata.author}
            </Text>
            <Text
              as="span"
              fontSize="sm"
            >
              {postingDate}
            </Text>
            <span style={{fontWeight: "bold"}}>·</span>
            <Text fontSize="sm">
              {data.metadata.duration}min de leitura
            </Text>
          </HStack>
        </Section>
        <Section delay={.2}>
          <Image 
            src={`/images/posts/${data.metadata.image}`}
            borderRadius="xl"
            mt={10}
          />
        </Section>
        <Section delay={.3}>
          <Markdown content={data.content} />
        </Section>
      </Container>
    </Article>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getPostBySlug(context.params.slug.toString())
  
  return {
    props: {
      data
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllSlugs().map(slug => `/posts/${slug}`)

  return {
    paths,
    fallback: false
  }
}

export default Slug