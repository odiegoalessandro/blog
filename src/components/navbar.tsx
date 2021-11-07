import { Box, Container, useColorModeValue, Heading, Flex, Link, HStack, Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react"
import React from "react"
import Logo from "./logo"
import ToggleTheme from "./toggle-theme"
import NextLink from "next/link"
import { NONAME } from "dns"
import { HamburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path.asPath === href
  const activeColor = useColorModeValue('glassTeal', 'deepPink')
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        color={active ? activeColor : inactiveColor}
        textDecoration={active ? "underline" : "none"}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const NavBar = (props) => {
  const { path } = props
  return(
    <Box
      position="fixed"
      as="nav"
      w="full"
      h="3.5rem"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        flexDir="row"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" fontFamily="M PLUS Rounded 1c" size="lg">
            <Logo />
          </Heading>
        </Flex>
        <HStack 
          width="full"
          display={{base: "none", md: "flex"}}
          flexGrow={1}
        >
          <LinkItem href="/projects" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Postagens
          </LinkItem>
        </HStack>
        <Box flex={1} align="right">
          <ToggleTheme />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                bgColor="transparent"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar