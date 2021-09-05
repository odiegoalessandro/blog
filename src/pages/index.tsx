import { getAllPosts } from '../utils/posts'
import { GetStaticProps } from 'next'
import { Flex, Center } from '@chakra-ui/react'
import Card from '../components/Card'
import Link from 'next/link'
import Main from '../components/Main'

export default function Home({ posts }) {
  return (
    <Center>
      <Flex
        flexDir="column"
        marginTop="7rem"
        w="45rem"
        align="center"
      >
        <Main />
      </Flex>
    </Center>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: {
      posts: posts.map(post => {
        return {
          metadata: {
            title: post.metadata.title,
            tags: post.metadata.tags,
            slug: post.metadata.slug
          }
        }
      }),
    }
  }
}