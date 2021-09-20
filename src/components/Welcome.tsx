import { Heading, Text, useColorModeValue, Link } from "@chakra-ui/react"

export default function Welcome(){
  return (
    <>
      <Heading as="h1" fontSize="4xl" marginTop="10rem" role="heading">
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
        role="heading"
      >
        Diego
      </Heading>
      <Text role="textbox">
        Eu aprendo rápido e sou estudante de informática.
        Atualmente sou muito interessado em desenvolvimento front-end. {" "}
        <Link
          href="/about"
          role="link"
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
    </>
  )
}