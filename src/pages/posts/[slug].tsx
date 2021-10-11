import { getAllSlugs, getPostBySlug } from "../../utils/posts"
import { GetStaticPaths, GetStaticProps } from "next"
import { Flex, Center, Heading, HStack, Text, Image, Button, Avatar, Input } from "@chakra-ui/react"
import Head from 'next/head'
import React, { FormEvent, useEffect, useState } from "react"
import Markdown from "../../components/Markdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import useAuth from "../../hook/useAuth"
import { database } from "../../services/firebase"

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
  slug: string
}

interface FirebaseComments {
  content: string
  authorId: string
}

interface Comments {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string

}

const Slug: React.FC<SlugProps> = ({ data, slug }) => {
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
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState<Comments[]>()

  async function handleSendComment(event: FormEvent){
    event.preventDefault()

    if(newComment.trim() === ""){
      return
    }

    const commentsRef = database.ref(`${slug}/comments`)

    commentsRef.push({
      author: {
        avatar: user?.avatar,
        name: user?.name,
      },
      content: newComment
    })

    setNewComment("")
  }

  useEffect(() => {
    const commentsRef = database.ref(`${slug}/comments`)

    commentsRef.on("value", result => {
      const comments = result.val()
      const firebaseComments: FirebaseComments = comments ?? {}
      const parsedComments = Object.entries(firebaseComments).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author
        }
      })

      setComments(parsedComments)
    })

    return () => commentsRef.off()
  }, [slug, user?.id])

  console.log(comments)

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
                <HStack
                  marginTop="1rem"
                  as="form"
                  onSubmit={handleSendComment}
                >
                  <Avatar src={user.avatar} borderRadius="8px" w="40px" h="40px" />
                  <Input 
                    placeholder="Iniciar discussão..."
                    onChange={event => setNewComment(event.target.value)}
                    value={newComment}
                  />
                </HStack>
              ) : (
                <Center>
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
                </Center>
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
      data,
      slug: context.params.slug
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