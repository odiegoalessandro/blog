import { Box, Heading, Text, HStack, Center, Button } from "@chakra-ui/react"
import Nextjs from "../images/NextJs"
import Typescript from "../images/Typescript"
import Vercel from "../images/Vercel"
import NodeJs from "../images/NodeJs"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Main(){
  function handlePageDown(event){
    const element = event.target
    element.scrollIntoView()
  }

  return (
    <Box>
      <Heading fontSize="4xl">
        Oi!
      </Heading>
      <Heading fontSize="6xl">
        Pode me chamar de
      </Heading>
      <Heading 
        color="#FF0080"
        _after={{
          content: "'.'",
          color: "white"
        }}
      >
        Diego
      </Heading>
      <Text>
        Eu aprendo rápido e sou estudante de informática.
        Atualmente sou muito interessado em desenvolvimento front-end.
        Me procurem para podermos conversar sobre vagas front-end!
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
    </Box>
  )
}