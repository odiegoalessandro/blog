import { Button, Flex, Heading, Text, Icon, useColorModeValue, Container, Image } from "@chakra-ui/react"
import React from "react"
import Article from "../components/article"
import NextLink from "next/link"

const NotFound = () => {
  return (
    <Article title="Não encontrado">
      <Container>
        <Flex flexDir="column" justify="center" align="center" mt={12}>
          <Heading 
            as="h2"
            w="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize={{base: "7rem", sm: "10rem", md: "15rem"}}
          >
            4
            <Image
              margin="0"
              src="/404_face_icon.png"
              width={{base: "100px", sm: "150px", md: "200px"}}
              height={{base: "100px", sm: "150px", md: "200px"}}
            />
            4
          </Heading>
          <Heading
            fontSize={{base: "1.5rem", md: "2rem"}}
            as="span"
            textAlign="center"
          >
            Página não encontrada.
          </Heading>
          <NextLink href="/">
            <Button
              mt={6}
              bgColor={useColorModeValue("glassTeal", "deepPink")}
              transition="filter .2s"
              color="#fff"
              _hover={{
                filter: "brightness(.8)"
              }}
              fontFamily="sans-serif"
            >
              Voltar para página inicial
            </Button>
          </NextLink>
        </Flex>
      </Container>
    </Article>
  )
}

export default NotFound