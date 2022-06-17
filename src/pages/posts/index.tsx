import { Flex, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Layout from "../../components/layout"
import { getAllPosts } from "../../lib/mdx"
import { Post } from "../../types/post"
import { PostMeta } from "../../types/postMeta"

interface PostsProps {
  posts: PostMeta[]
}

export default function Posts({ posts }: PostsProps) {
  console.log(posts)

  return (
    <Layout title="posts">
      <Flex mt="3.5rem">
        {posts.map(post => (
          <LinkBox as="article">
            <Heading>
              <LinkOverlay href={`posts/${post.slug}`}>{post.title}</LinkOverlay>
            </Heading>
          </LinkBox>
        ))}
      </Flex>
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
