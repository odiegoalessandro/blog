import { IconButton, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function Menu(){
  const {colorMode, toggleColorMode} = useColorMode()

  return(
    <Flex
      align="center"
      justify="space-between"
      h="5rem"
      px={{
        base: "2rem",
        sm: "5rem",
        md: "10rem",
        lg: "15rem",
        xl: "20rem"
      }}
      bgColor={useColorModeValue("gray.300", "gray.700")}
      pos="fixed"
      zIndex="10"
      inset="0"
      as="header"
      role="navigation"
    > 
      <Link
        href="/"
        transition=".3s"
        pos="relative"
        fontWeight="bold"
        fontSize="1.2rem"
        _hover={{
          color: "#ff0080",
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
        role="link"
      >
        Diego alessandro
      </Link>
      <IconButton
        aria-label="Mudar o tema"
        bgColor="transparent"
        borderRadius="50%"
        onClick={toggleColorMode}
        w="10"
        fontSize="large"
        icon={
          colorMode === "light" ? (<MoonIcon aria-label="Tema escuro" />) : (<SunIcon aria-label="Tema claro" />)
        }
    />
    </Flex>
  )
}