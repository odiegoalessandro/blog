import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { getAllPosts } from "../lib/posts"
import Article from "../components/article"
import Card from "../components/card"
import Section from "../components/section"

interface Posts {
  title: string
  excerpt: string
  slug: string
  duration: string
  date: string
  image: string
}

interface PostsProps {
  posts: Posts[]
}

export default function Posts({posts}: PostsProps){
  return (
    <Article title="Postagens">
      <Container>
        <Heading as="h3" mt={10} size="md">Postagens</Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={8}>
          {
            posts.map((post, index) => (
              <Section delay={Number(`0.${index}`)}>
                <Card 
                  slug={`/posts/${post.slug}`}
                  thumbnail={`/images/posts/${post.image}`}
                  title={post.title}
                  key={post.slug}
                >
                  {post.excerpt}
                </Card>
              </Section>
            ))
          }
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts()
  
  return {
    props: {
      posts
    }
  }
}