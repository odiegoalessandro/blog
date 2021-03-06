import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import Layout from "../components/layout"
import { Link } from "../components/link"
import { getAllPosts } from "../lib/mdx"

export default function Home() {

  return (
    <Layout title="home">
      <Flex flexDir="column" minH="100vh">
        <Box mt="auto" mb="auto">
          <Heading size="lg" as="h1">
            Olá, eu sou Diego
          </Heading>
          <Text as="p" color="whiteAlpha.600" mt="2rem">
            Desenvolvedor Front-End Junior, planejo compartilhar conhecimento
            nesse blog veja aqui meus{" "}
            <NextLink href="/posts">
              <Link>posts</Link>
            </NextLink>
            , conheça mais{" "}
            <NextLink href="/about">
              <Link>sobre mim</Link>
            </NextLink>
            .
          </Text>
        </Box>
      </Flex>
    </Layout>
  )
}
