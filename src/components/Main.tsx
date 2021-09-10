import { Box, Heading, Text, HStack, Center, Button, useColorModeValue, Link, VStack } from "@chakra-ui/react"
import Nextjs from "../images/NextJs"
import Typescript from "../images/Typescript"
import Vercel from "../images/Vercel"
import NodeJs from "../images/NodeJs"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./Card"
import LoadText from "../animations/LoadText"

export default function Main({ cardContent }){
  function handlePageDown(event){
    const element = event.target
    element.scrollIntoView()
  }

  return (
    <Box>
      <Heading fontSize="4xl" marginTop="10rem">
        Oi!
      </Heading>
      <Heading fontSize="6xl">
        Pode me chamar de
      </Heading>
      <Heading 
        color="#FF0080"
        _after={{
          content: "'.'",
          color: useColorModeValue('black', 'white')
        }}
      >
        Diego
      </Heading>
      <Text>
        Eu aprendo rápido e sou estudante de informática.
        Atualmente sou muito interessado em desenvolvimento front-end. {" "}
        <Link
          href="/about"
          fontWeight="bold"
          color="#FF0080"
          pos="relative"
          transition=".3s"
          _hover={{
            _after: {
              w: "100%",
            }
          }}
          _after={{
            content: "''",
            height: "2px",
            bgColor: "#FF0080",
            position: "absolute",
            left: "0",
            bottom: "-3px",
            transition: ".3s",
            w: "0"
          }}
        >
          Me procurem
        </Link> 
        {" "}
        para podermos conversar sobre vagas front-end!
      </Text>
      <Heading marginTop="3rem" fontSize="3xl">
        Minhas tecnologias favoritas atuais
      </Heading>
      <HStack marginTop="1rem" spacing="1rem">
        <Nextjs />
        <Typescript />
        <Vercel />
        <NodeJs />
      </HStack>
      <Center>
        <Button
          bgColor="transparent"
          borderRadius="50%"
          marginTop="4rem"
          fontSize="30px"
          w="60px"
          h="60px"
          _hover={{
            color: "#FF0080"
          }}
          onClick={handlePageDown}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </Button>
      </Center>
      <Heading marginTop="5rem">
        Projetos em destaque
      </Heading>
      <VStack spacing="1rem" p="1.5rem 0">
        {
          cardContent.map((content, index) => {
            return <Card content={content} key={index} />
          })
        }
      </VStack>
    </Box>
  )
}