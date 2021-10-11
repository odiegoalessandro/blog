import { getAllSlugs, getPostBySlug } from "../../utils/posts"
import { GetStaticPaths, GetStaticProps } from "next"
import { Flex, Center, Heading, HStack, Text, Image, Button, Avatar, Input } from "@chakra-ui/react"
import Head from 'next/head'
import React from "react"
import Markdown from "../../components/Markdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import useAuth from "../../hook/useAuth"

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
  const { signInWithGoogle, user } = useAuth()
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

  console.log(user)
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
        <Flex
          w="full"
          flexDir="column"
        >
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
          <Markdown content={data.content} />
          <Flex
            marginTop="3rem"
            flexDir="column"
          >
            <Heading fontSize="xl">
              Comentários
            </Heading>
            {
              user ? (
                <HStack marginTop="1rem">
                  <Avatar src={user.avatar} borderRadius="8px" w="40px" h="40px" />
                  <Input placeholder="Iniciar discussão..." />
                </HStack>
              ) : (
                <>    
                  <Button 
                    marginTop="1rem"
                    maxW="350px"
                    h="50px"
                    display="flex"
                    fontSize={{
                      xl: "17px",
                      lg: "17px",
                      md: "17px",
                      sm: "17px",
                      base: "13px"
                    }}
                    justifyContent="space-between"
                    p={{
                      xl: "0 3rem",
                      lg: "0 3rem",
                      md: "0 3rem",
                      sm: "0 3rem",
                      base: "0 1rem"
                    }}
                    backgroundColor="red.600"
                    transition="filter .2s"
                    _hover={{
                      filter: "brightness(.7)"
                    }}
                    color="#fff"
                    onClick={signInWithGoogle}
                  >
                    <FontAwesomeIcon size="lg" icon={faGoogle} />
                    Faça login para comentar
                  </Button>
                </>
              )
            }
          </Flex>
        </Flex>
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