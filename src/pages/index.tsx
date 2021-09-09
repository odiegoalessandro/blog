import { Flex, Center } from '@chakra-ui/react'
import Main from '../components/Main'

export default function Home({ projects }) {
  console.log(projects)

  return (
    <Center>
      <Flex
        flexDir="column"
        w="45rem"
        align="center"
      >
        <Main />
      </Flex>
    </Center>
  )
}