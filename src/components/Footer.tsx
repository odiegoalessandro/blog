import { Center, Flex, Divider, Box, Heading, Link, HStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return (
    <Center role="group">
      <Flex
        flexDir="column"
        w="45rem"
        h="8rem"
        align="center"
        marginTop="3rem"
        role="menu"
      >
        <Divider borderBottom="2px" role="separator" />
        <Box p="2rem" role="main">
          <Heading size="sm" role="heading">
            Minhas redes sociais
          </Heading>
          <HStack
            justifyContent="center"
            spacing="1rem"
            role="group"
          >
            <Link 
              href="https://github.com/odiegoalessandro"
              fontSize="25px"
              transition=".3s"
              _hover={{
                color: "#ff0080"
              }}
              role="link"
              aria-label="Link para o meu github"
            >
              <FontAwesomeIcon icon={faGithub} role="img" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/diego-alessandro-da-cruz-martins-87b2541b4/"
              fontSize="25px"
              transition=".3s"
              _hover={{
                color: "#ff0080"
              }}
              role="link"
              aria-label="Link para o meu linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} role="img" />
            </Link>
            <Link 
              href="https://twitter.com/odiegoalessandr"
              fontSize="25px"
              transition=".3s"
              _hover={{
                color: "#ff0080"
              }}
              role="link"
              aria-label="Link para o meu twitter"
            >
              <FontAwesomeIcon icon={faTwitter} role="img" />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Center>
  )
}