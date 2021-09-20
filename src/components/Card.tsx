import { Flex, Heading, Text, Spacer, Link } from '@chakra-ui/react'
import React from 'react'

function Card({ content }){
  return (
    <Link
      href={`/projects/${content.slug}`}
      w="100%"
      _hover={{}}
      role="link"
    >
      <Flex
        w="100%"
        minH="6rem"
        h="auto"
        flexDir="column"
        borderRadius="md"
        p="4"
        border="2px solid currentcolor"
        transition=".2s"
        _hover={{
          transform: "scale(1.1)"
        }}
        role="group"
      >
        <Heading fontSize="2xl" role="heading">
          {content.title}
        </Heading>
        <Spacer role="separator" />
        <Text w="full" fontSize="sm" opacity=".9" role="textbox">
          {content.excerpt}
        </Text>
      </Flex>
    </Link>
  )
}

export default React.memo(Card)