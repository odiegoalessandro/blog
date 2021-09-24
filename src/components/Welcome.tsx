import { Heading, Text, useColorModeValue } from "@chakra-ui/react"
import Link from "./Link"

export default function Welcome(){
  return (
    <>
      <Heading
        as="h1"
        fontSize="4xl"
        marginTop="10rem"
      >
        Oi!
      </Heading>
      <Heading 
        fontSize={{
          base: "3xl",
          xl: "6xl",
          lg: "4xl",
          md: "4xl",
          sm: "4xl"
        }}
      >
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
          color="#ff0080"
          fontWeight="bold"
        >
          Me procurem
        </Link>
        
        {" "}
        para podermos conversar sobre vagas front-end!
      </Text>
    </>
  )
}