import NextLink from "next/link"
import styled from "@emotion/styled"
import { Text, useColorModeValue, Link, chakra } from "@chakra-ui/react"

const LinkStyle = chakra(styled(Link)`
  position: relative;
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  cursor: pointer;
  transition: .3s;
`)

const Logo = () => (
  <NextLink href="/">
      <Link
        display="flex"
        alignItems="center"
        pos="relative"
        fontSize="18px"
        lineHeight="20px"
        padding="10px"
        cursor="pointer"
        transition=".3s"
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily='M PLUS Rounded 1c", sans-serif'
        fontWeight="extrabold"
        ml={3}
        _hover={{
          color: useColorModeValue("", "#ff0080"),
          textDecoration: "underline"
        }}
      >
        odiegoalessadro
      </Link>
  </NextLink>
)

export default Logo