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
        as="footer"
      >
        <Divider borderBottom="2px" />
        <Box p="2rem" role="navigation">
          <Heading size="sm">
            Minhas redes sociais
          </Heading>
          <HStack
            justifyContent="center"
            spacing="1rem"
            as="ul"
          >
            <Link 
              href="https://github.com/odiegoalessandro"
              fontSize="25px"
              transition=".3s"
              _hover={{
                color: "#ff0080"
              }}
              >
              <FontAwesomeIcon
                icon={faGithub}
                role="img"
                aria-label="Link para meu github"
              />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/diego-alessandro-da-cruz-martins-87b2541b4/"
              fontSize="25px"
              transition=".3s"
              _hover={{
                color: "#ff0080"
              }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                role="img"
                aria-label="Link para meu linkedin"  
              />
            </Link>
            <Link 
              href="https://twitter.com/odiegoalessandr"
              fontSize="25px"
              transition=".3s"
              _hover={{
                color: "#ff0080"
              }}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                role="img"
                aria-label="Link para meu twitter"
              />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Center>
  )
}