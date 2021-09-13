import { Center, Flex, Divider, Box, Heading, Link, HStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return (
    <Center>
      <Flex
        flexDir="column"
        w="45rem"
        h="8rem"
        align="center"
        marginTop="3rem"
      >
        <Divider borderBottom="2px" />
        <Box p="2rem">
          <Heading size="sm">
            Minhas redes sociais
          </Heading>
          <HStack
            justifyContent="center"
            spacing="1rem"
          >
            <Link 
              href="https://github.com/odiegoalessandro"
              fontSize="25px"
              transition=".3s"
              _hover={{
                color: "#ff0080"
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/diego-alessandro-da-cruz-martins-87b2541b4/"
              fontSize="25px"
              transition=".3s"
              _hover={{
                color: "#ff0080"
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link 
              href="https://twitter.com/odiegoalessandr"
              fontSize="25px"
              transition=".3s"
              _hover={{
                color: "#ff0080"
              }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Center>
  )
}