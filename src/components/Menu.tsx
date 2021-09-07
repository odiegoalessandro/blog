import { IconButton, Heading, Flex, useColorModeValue, Link, HStack } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function Menu(){
  const {colorMode, toggleColorMode} = useColorMode()

  return(
    <Flex
      align="center"
      justify="space-between"
      h="5rem"
      px="20rem"
      bgColor={useColorModeValue("gray.300", "gray.700")}
      pos="fixed"
      zIndex="10"
      inset="0"
    > 
      <Heading 
        fontSize="1.2rem"
      >
        <Link
          href="/"
          transition=".3s"
          _hover={{
            color: "#ff0080"
          }}
        >
          Diego alessandro
        </Link>
      </Heading>
      <HStack spacing="5">
        <IconButton
          aria-label="Theme"
          bgColor="transparent"
          borderRadius="50%"
          onClick={toggleColorMode}
          w="10"
          fontSize="large"
          icon={
            colorMode === "light" ? (<MoonIcon />) : (<SunIcon />)
          }
      />
      </HStack>
    </Flex>
  )
}