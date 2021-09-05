import { Flex, Heading, Text, useColorModeValue, HStack } from "@chakra-ui/react"

export default function Card({ post }){
  let title: string = post.metadata.title
  if(title.length > 50){
    title = post.metadata.title.substr(0, 50) + '..'
  }

  return (
    <Flex
      bgColor={useColorModeValue("gray.300", "gray.700")}
      borderRadius="md"
      w="45rem"
      h="6rem"
      justifyContent="space-between"
      p="5"
      flexDir="column"
    >
      <Heading fontSize="2xl">{title}</Heading>
      <HStack spacing="2">
        {
          post.metadata.tags.map(tag => {
            return (
              <Text 
                bgColor={useColorModeValue('gray.200', 'gray.600')}
                borderRadius="10px"
                align="center"
                px="2"
                key={tag}
                minW="2rem"
                _hover={{
                  bgColor: useColorModeValue("var(--chakra-colors-gray-100)", "var(--chakra-colors-gray-500)")
                }}
              >
                {tag}
              </Text>
            )
          })
        }
      </HStack>
    </Flex>
  )
}