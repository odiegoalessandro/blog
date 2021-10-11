import { Flex, HStack, Avatar, Heading, Text } from "@chakra-ui/react"
import { memo } from "react"


function Comment({ info }){
  return(
    <Flex
      w="full"
      minH="95px"
      p="1rem 0"
      flexDir="column"
    >
      <HStack
        align="center"
      >
        <Avatar 
          src={info.author.avatar}
          w="40px"
          h="40px"
        />
        <Heading fontSize="sm">
          {info.author.name}
        </Heading>
      </HStack>
      <Text
        flex="1"
        p=".5rem 1rem"
      >
        {info.content}
      </Text>
    </Flex>
  )
}

export default Comment