import { Flex, Heading, Text, Spacer, Link } from '@chakra-ui/react'
import react from 'react'

export default function Card({ content }){
  return (
    <Link
      href={`/projects/${content.slug}`}
      w="100%"
      _hover={{}}
    >
      <Flex
        w="100%"
        h="6rem"
        flexDir="column"
        borderRadius="md"
        p="4"
        border="2px solid currentcolor"
        transition=".2s"
        _hover={{
          transform: "scale(1.1)"
        }}
      >
        <Heading fontSize="2xl">
          {content.title}
        </Heading>
        <Spacer />
        <Text fontSize="sm" opacity=".9">
          {content.excerpt}
        </Text>
      </Flex>
    </Link>
  )
}