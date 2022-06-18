import {
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Layout from "../../components/layout"
import { getAllPosts } from "../../lib/mdx"
import { Post } from "../../types/post"
import { PostMeta } from "../../types/postMeta"

interface PostsProps {
  posts: PostMeta[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <Layout title="posts">
      <Heading mt="5rem">
        Postagens
      </Heading>
      <SimpleGrid pt="2rem" columns={2} spacing={10} minH="100vh">
        {posts.map(post => {
          const excerpt =
            post.excerpt.length > 200
              ? post.excerpt.substring(0, 200) + "..."
              : post.excerpt

          return (
            <LinkBox
              as="article"
              border="1px solid"
              borderColor="whiteAlpha.600"
              p=".8rem 1.5rem"
              h="14rem"
              borderRadius="md"
              transition=".3s"
              _hover={{
                borderColor: "white",
              }}
            >
              <Heading
                size="lg"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                transition=".3s"
                _hover={{ color: "whiteAlpha.800" }}
              >
                <LinkOverlay href={`posts/${post.slug}`}>
                  {post.title}
                </LinkOverlay>
              </Heading>
              <Text mt="1.5rem" color="whiteAlpha.600">
                {excerpt}
              </Text>
            </LinkBox>
          )
        })}
      </SimpleGrid>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const posts: Post[] = getAllPosts()
  const postsMetadata = posts.map(post => post.meta)

  return {
    props: {
      posts: postsMetadata,
    },
  }
}
