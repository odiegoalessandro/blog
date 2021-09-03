import { IconButton, Heading, Flex, useColorModeValue, Input, HStack } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Menu(){
  const {colorMode, toggleColorMode} = useColorMode()

  return(
    <Flex
      align="center"
      justify="space-between"
      h="5rem"
      px="10"
      bgColor={useColorModeValue("gray.300", "gray.700")}
      pos="fixed"
      zIndex="10"
      inset="0"
    > 
      <Heading 
        fontSize="1.2rem"
      >
        <Link href="/">
          <a>
            Diego alessandro
          </a>
        </Link>
      </Heading>
      <HStack spacing="5">
        <Input
          placeholder="Pesquisar"
          size="md"
          w={350}
          variant="filled"
          bgColor={useColorModeValue("whiteAlpha.700", "whiteAlpha.200")}
        />
        <IconButton
          aria-label="Theme"
          bgColor="transparent"
          onClick={toggleColorMode}
          w="10"
          icon={
            colorMode === "light" ? (<MoonIcon />) : (<SunIcon />)
          }
      />
      </HStack>
    </Flex>
  )
}