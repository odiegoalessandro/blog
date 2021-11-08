import { Container, Box, Heading, useColorModeValue, List, Link, ListItem, Button, Icon, SimpleGrid } from "@chakra-ui/react"
import NextLink from "next/link"
import React from "react"
import Article from "../components/article"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin, IoChevronForward } from "react-icons/io5"
import { getLatestPosts } from "../lib/posts"
import { GetStaticProps } from "next"
import Card from "../components/card"

interface latestPosts {
  excerpt: string
  image: string
  slug: string
  title: string
}
interface HomeProps {
  latestPosts: latestPosts[]
}

export default function Home({ latestPosts }: HomeProps) {
  return (
    <Article title="">
      <Container>
        <Box
          p={3}
          mt="5rem"
          mb={6}
          borderRadius="lg"
          textAlign="center"
          bgColor={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Ola, sou um desenvolvedor front-end e esse é meu site
        </Box>
        <Box display={{md: "flex"}} marginBottom="3rem">
          <Box flexGrow={1}>
            <Heading as="h2">
              Diego Alessandro
            </Heading>
            <p>Desenvolvedor front-end</p>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
              Trabalho
            </Heading>
            <Paragraph>
              Diego é um freelancer e desenvolvedor front-end em Sorocaba,
              adora construir sites e aprender coisas novas. Muito determinado
              e dedicado em coisas que ele tenha interrese 
              Sou freelancer e desenvolvedor front-end que mora em Sorocaba, São Paulo 
              que adora programação e aprender coisas novas. Sou muito empenhado e focado,
              não tenho problemas em recomeçar do zero caso acredite que posso fazer melhor.
              Quanto não estou programando normalmente gosto de jogar MOBA e assistir séries.
              Quando não estou online gosto de sair com meus amigos e viajar.
            </Paragraph>
            <Box align="center" my={4}>
              <NextLink href="/projects">
                <Button 
                  rightIcon={<Icon as={IoChevronForward} />}
                  bgColor={useColorModeValue("glassTeal", "deepPink")}
                  transition="filter .2s"
                  color="#fff"
                  _hover={{
                    filter: "brightness(.8)"
                  }}
                  fontFamily="sans-serif"
                >
                  Portfólio
                </Button>
              </NextLink>
            </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Coisas que ♥
          </Heading>
          <Paragraph>
            Música, programação, jogos, arte, filosofia, animes e cultura japonesa no geral. 
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Me encontre
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/odiegoalessandro" target="_blank">
                <Button 
                  leftIcon={<Icon as={IoLogoGithub} />}
                  variant="ghost"
                  colorScheme="deepPink"
                >
                  @odiegoalessandro
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/odiegoalessandr" target="_blank">
                <Button 
                  leftIcon={<Icon as={IoLogoTwitter} />}
                  variant="ghost"
                  colorScheme="deepPink"
                >  
                  @odiegoalessandr
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/diego-alessandro-da-cruz-martins-87b2541b4/" target="_blank">
                <Button 
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                  variant="ghost"
                  colorScheme="deepPink"
                >  
                  @odiegoalessandr
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Últimas postagens
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6} mt={8}>
            {
              latestPosts.map((post, index) => (
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
          <Box align="center" mb={4}>
            <NextLink href="/posts">
              <Button 
                rightIcon={<Icon as={IoChevronForward} />}
                bgColor={useColorModeValue("glassTeal", "deepPink")}
                transition="filter .2s"
                color="#fff"
                _hover={{
                  filter: "brightness(.8)"
                }}
                fontFamily="sans-serif"
              >
                Ver mais
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Article>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const latestPosts = getLatestPosts()
 
  return {
    props: {
      latestPosts
    }
  }
}