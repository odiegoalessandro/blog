import { Flex, Heading, Text, Spacer, Link, useColorModeValue } from '@chakra-ui/react'
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
        w="full"
        minH="6rem"
        h="auto"
        flexDir="column"
        borderRadius="md"
        p="4"
        bgColor={useColorModeValue("gray.300", "gray.700")}
        transition=".2s"
        _hover={{
          backgroundColor: useColorModeValue("#E2E8F0", "#4A5568")
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