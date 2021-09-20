import { Heading, HStack } from "@chakra-ui/react"
import Nextjs from "../images/NextJs"
import Typescript from "../images/Typescript"
import Vercel from "../images/Vercel"
import NodeJs from "../images/NodeJs"

export default function TechStacks(){
  return (
    <>
      <Heading 
        marginTop="3rem"
        fontSize={{
          xl: "3xl",
          lg: "3xl",
          md: "3xl", sm:
          "xl"
        }}
        role="heading"
      >
        Minhas tecnologias favoritas atuais
      </Heading>
      <HStack marginTop="1rem" spacing="1rem" role="group">
        <Nextjs />
        <Typescript />
        <Vercel />
        <NodeJs />
      </HStack>
    </>
  )
}