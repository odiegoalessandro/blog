import { Box, Container, Heading } from "@chakra-ui/react"
import NextLink from "next/link"

function NavBar() {
  return (
    <Box
      as="nav"
      w="full"
      h="3.5rem"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex="10"
    >
      <Container
        display="flex"
        maxW="container.md"
        h="full"
        alignItems="center"
      >
        <NextLink href="/" passHref>
          <Heading cursor="pointer" size="sm" lineHeight="1rem">
            odiegoalessandro
          </Heading>
        </NextLink>
      </Container>
    </Box>
  )
}

export default NavBar
