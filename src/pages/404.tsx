import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import Layout from "../components/layout"

export default function NotFound() {
  return (
    <Layout title="404">
      <Flex
        minH="calc(100vh - 4rem)"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Heading
          display="flex"
          alignContent="center"
          fontWeight="100"
          lineHeight="220px"
          fontSize={["150px", "230px"]}
        >
          4
          <Box
            alignSelf="center"
            w={["90px", "150px"]}
            h={["90px", "150px"]}
            borderRadius="100%"
            bgColor="white"
          />
          4
        </Heading>
        <Text fontWeight="bold" fontSize="lg">
          Oops!
        </Text>
        <Text mt=".5rem" w="18rem" textAlign="center" color="whiteAlpha.600">
          Não conseguimos achar a página que você está procurando.
        </Text>
        <Link href="/" passHref>
          <Button
            mt="2rem"
            bgColor="blue"
            borderRadius="1.2rem"
            color="white"
            transition=".2s"
            _hover={{}}
          >
            Página inicial
          </Button>
        </Link>
      </Flex>
    </Layout>
  )
}
